/**
 * Gemini proxy for the Celiac Scanner app.
 *
 * The app never holds a Gemini key. It sends a Firebase ID token plus the
 * task input; this function verifies the token, enforces daily limits, builds
 * the Gemini request (prompts live here, not in the app) and returns Gemini's
 * raw text. The app keeps its own response parsers.
 *
 * Secrets / bindings (set in Cloudflare Pages):
 *   GEMINI_API_KEY      secret, restricted to the Generative Language API
 *   RATE_KV             KV namespace for per-user / global daily counters
 *   USER_DAILY_LIMIT    optional, default 60
 *   GLOBAL_DAILY_LIMIT  optional, default 3000
 */
import { createRemoteJWKSet, jwtVerify } from 'jose';

interface Env {
  GEMINI_API_KEY: string;
  RATE_KV: KVNamespace;
  USER_DAILY_LIMIT?: string;
  GLOBAL_DAILY_LIMIT?: string;
}

const FIREBASE_PROJECT_ID = 'gen-lang-client-0059629799';
const MODEL = 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const MAX_IMAGE_BASE64_CHARS = 14_000_000; // ~10 MB image

const firebaseJwks = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'),
);

// ─── Prompts (moved unchanged from the app's lib/celiacRegistry.ts and lib/receiptAnalyzer.ts) ──

const LABEL_SYSTEM_INSTRUCTION = `You are the Celiac Intelligence Engine. Your goal is to analyze product images (front of package or ingredients label) and determine if they are safe for someone with Celiac Disease.

Intelligence Protocol:
1. IDENTIFY: Read the product name, brand, and any "Gluten-Free" certifications from the front of the package.
2. ANALYZE: If the ingredients label is visible, perform deep OCR to read every ingredient and 'Contains' statement.
3. VERIFY: Cross-reference the identified product and brand with the 30 Pillars of Celiac Safety (Celiac.org, BeyondCeliac.org, GFCO.org, etc.).
4. HIDDEN GLUTEN CHECK: Scan specifically for: Malt, Barley, Rye, Yeast Extract, Natural Flavors (if not specified), Brewer's Yeast, and Triticale.

Three-Tier Safety Status:
[SAFE]: Confirmed GF by ingredients AND verified by at least one authoritative source or certification.
[CAUTION]: Ingredients are technically GF but the brand/product has known cross-contamination risks or is not verified by the 30 Pillars.
[CONTAINS GLUTEN]: Explicit gluten found (Wheat, Barley, Rye, Malt) or high-risk derivatives confirmed.

Celiac Certification:
A product is "Celiac Certified" only if it carries an explicit third-party certification mark such as GFCO (Gluten-Free Certification Organization), NSF Gluten-Free, BRCGS Gluten-Free, or the manufacturer explicitly states "Certified Gluten-Free" on the package. A product simply labeled "Gluten-Free" without third-party certification is NOT Celiac Certified, because Celiac patients are sensitive to cross-contamination that uncertified facilities may not prevent.

Return a JSON object with this structure:
{
  "productName": "Full name of the product",
  "brandName": "Brand name",
  "safetyStatus": "SAFE" | "CAUTION" | "CONTAINS GLUTEN",
  "isCeliacCertified": true | false,
  "certificationDetail": "Brief note on certification status (e.g., 'GFCO Certified' or 'No third-party Celiac certification visible on package')",
  "culpritIngredient": "The specific ingredient that contains gluten (null if SAFE/CAUTION)",
  "sourceName": "The specific authoritative source used for verification",
  "sourceUrl": "Direct URL to the source verification if possible",
  "ingredients": ["List of all identified ingredients"],
  "analysisSummary": "A concise explanation of the safety determination.",
  "riskBreakdown": ["Specific reasons for a CAUTION status, or empty array"],
  "productCategory": "Category (e.g., 'Snack', 'Cereal', 'Condiment')"
}`;

const LABEL_RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    productName: { type: 'STRING' },
    brandName: { type: 'STRING' },
    safetyStatus: { type: 'STRING', enum: ['SAFE', 'CAUTION', 'CONTAINS GLUTEN'] },
    isCeliacCertified: { type: 'BOOLEAN' },
    certificationDetail: { type: 'STRING' },
    culpritIngredient: { type: 'STRING', nullable: true },
    sourceName: { type: 'STRING' },
    sourceUrl: { type: 'STRING' },
    ingredients: { type: 'ARRAY', items: { type: 'STRING' } },
    analysisSummary: { type: 'STRING' },
    riskBreakdown: { type: 'ARRAY', items: { type: 'STRING' } },
    productCategory: { type: 'STRING' },
  },
  required: [
    'productName',
    'brandName',
    'safetyStatus',
    'isCeliacCertified',
    'certificationDetail',
    'sourceName',
    'sourceUrl',
    'ingredients',
    'analysisSummary',
    'riskBreakdown',
    'productCategory',
  ],
};

const RECEIPT_SYSTEM_INSTRUCTION = `You are a Celiac Disease GF Tax Receipt Analyzer. Your job is to OCR a grocery receipt image and classify each line item for potential tax deduction eligibility under IRS Schedule A and CRA METC rules for individuals diagnosed with Celiac disease.

For each line item, classify it into EXACTLY one of these four categories:

GF_SPECIALTY: Manufactured substitutes for foods that traditionally contain gluten. These items are priced higher than their conventional equivalents, and the price difference (incremental cost) may be tax-deductible. Examples: GF breads, GF pasta, GF cookies, GF bagels, GF pizza crust, GF crackers, GF cereals, GF flour blends, GF soy sauce, GF oats, GF granola bars.

GF_FULL_DEDUCTIBLE: Specialty GF ingredients or binders that have NO conventional gluten equivalent. The FULL price is potentially deductible because there is no standard cheaper substitute. Examples: xanthan gum, guar gum, psyllium husk, tapioca starch (when sold as a GF baking ingredient), arrowroot powder, rice protein powder.

NATURALLY_GF: Foods that are inherently gluten-free in their natural form and do NOT replace a gluten staple. These are NOT deductible. Examples: fresh fruits, fresh vegetables, plain meat, chicken, fish, eggs, plain dairy (milk, butter, cheese), rice, potatoes, plain nuts, soda, water, juice.

OTHER: Standard gluten-containing items, household supplies, personal care items, non-food items, or anything not qualifying. NOT deductible. Examples: regular bread, regular pasta, regular cookies, cleaning supplies, paper products, alcohol.

For GF_SPECIALTY items, estimate a conventionalBaseline price — the cost of the equivalent standard gluten-containing product at a typical grocery store (e.g., if the item is a GF bread loaf at $7.49, the conventional white bread equivalent might be $3.50).

For GF_FULL_DEDUCTIBLE items, set conventionalBaseline to 0.0 (the full price is deductible).
For NATURALLY_GF and OTHER items, set conventionalBaseline to 0.0 and incrementalClaim to 0.0.

Extract the store name and purchase date (in YYYY-MM-DD format) from the receipt header if visible.

Be conservative — if you are unsure whether an item is GF_SPECIALTY or NATURALLY_GF, classify it as NATURALLY_GF.
If a line item is not a product (e.g., tax line, subtotal, discount line, loyalty savings), skip it entirely — do not include it in the items array.`;

const RECEIPT_RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    store_name: { type: 'STRING' },
    purchase_date: { type: 'STRING', nullable: true },
    items: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          raw_text: { type: 'STRING' },
          inferred_product_name: { type: 'STRING' },
          category: {
            type: 'STRING',
            enum: ['GF_SPECIALTY', 'GF_FULL_DEDUCTIBLE', 'NATURALLY_GF', 'OTHER'],
          },
          gross_price: { type: 'NUMBER' },
          conventional_baseline_price: { type: 'NUMBER' },
          incremental_claim: { type: 'NUMBER' },
          is_deductible_eligible: { type: 'BOOLEAN' },
        },
      },
    },
    totals: {
      type: 'OBJECT',
      properties: {
        total_receipt_amount: { type: 'NUMBER' },
        total_gf_specialty_spend: { type: 'NUMBER' },
        total_estimated_tax_deductible: { type: 'NUMBER' },
      },
    },
  },
};

function restaurantPrompt(location: string, coords?: { latitude: number; longitude: number }): string {
  const locationContext = coords
    ? `within a 5-mile radius of GPS coordinates latitude ${coords.latitude.toFixed(5)}, longitude ${coords.longitude.toFixed(5)} (near ${location})`
    : `near ${location}`;

  return `Find gluten-free and celiac-safe restaurants ${locationContext}.

Use Google Search to find real restaurants in this area. Analyze reviews for mentions of "Celiac", "cross contamination", "dedicated fryer", "safe", or "got sick".

Categorize each restaurant:
- CELIAC_SAFE: Dedicated GF kitchen or highly rated for celiac safety
- GF_FRIENDLY: Good GF options but shared kitchen
- CAUTION: Offers GF items but reviews mention cross-contamination

Return ONLY a JSON object — no markdown, no prose, no code fences — with this exact structure:
{
  "summary": "1-2 sentence summary of the area's dining landscape for celiacs",
  "restaurants": [
    {
      "name": "Full Restaurant Name",
      "address": "Full street address, City, State",
      "status": "CELIAC_SAFE" | "GF_FRIENDLY" | "CAUTION",
      "why": "1-2 sentence explanation of their celiac protocols",
      "review": "Short direct quote from a celiac reviewer (optional)",
      "phone": "phone number if found (optional)"
    }
  ],
  "tips": ["Local-specific tip 1", "Local-specific tip 2"]
}

Return 5-7 restaurants, prioritizing CELIAC_SAFE first.`;
}

// ─── Request building ─────────────────────────────────────────────────────────

class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

function imagePart(body: any) {
  const data = typeof body.image === 'string'
    ? body.image.replace(/^data:image\/\w+;base64,/, '').replace(/\s/g, '')
    : '';
  if (!data) throw new HttpError(400, 'Missing image');
  if (data.length > MAX_IMAGE_BASE64_CHARS) throw new HttpError(413, 'Image too large');
  const mimeType = typeof body.mimeType === 'string' && body.mimeType.startsWith('image/')
    ? body.mimeType
    : 'image/jpeg';
  return { inlineData: { data, mimeType } };
}

function buildGeminiRequest(body: any) {
  switch (body.task) {
    case 'label':
      // body.profile ({ sensitivityLevel, identity }) is accepted but not used yet,
      // so results stay identical to the current app. Personalize here later —
      // prompt changes no longer need an App Store build.
      return {
        systemInstruction: { parts: [{ text: LABEL_SYSTEM_INSTRUCTION }] },
        contents: [{
          role: 'user',
          parts: [
            imagePart(body),
            { text: 'Analyze this product image. Identify the product and ingredients, then verify its gluten-free status against the 30 Pillars of Celiac Safety.' },
          ],
        }],
        generationConfig: { responseMimeType: 'application/json', responseSchema: LABEL_RESPONSE_SCHEMA },
      };

    case 'receipt':
      return {
        systemInstruction: { parts: [{ text: RECEIPT_SYSTEM_INSTRUCTION }] },
        contents: [{
          role: 'user',
          parts: [
            imagePart(body),
            { text: 'Analyze this grocery receipt image. Extract all line items, classify each for Celiac GF tax deduction eligibility, and estimate conventional baseline prices for GF specialty items. Return structured JSON.' },
          ],
        }],
        generationConfig: { responseMimeType: 'application/json', responseSchema: RECEIPT_RESPONSE_SCHEMA },
      };

    case 'restaurants': {
      const location = typeof body.location === 'string' ? body.location.trim().slice(0, 200) : '';
      if (!location) throw new HttpError(400, 'Missing location');
      const c = body.coords;
      const coords = c && Number.isFinite(c.latitude) && Number.isFinite(c.longitude)
        ? { latitude: Number(c.latitude), longitude: Number(c.longitude) }
        : undefined;
      return {
        contents: [{ role: 'user', parts: [{ text: restaurantPrompt(location, coords) }] }],
        tools: [{ googleSearch: {} }],
      };
    }

    default:
      throw new HttpError(400, 'Unknown task');
  }
}

// ─── Auth and limits ──────────────────────────────────────────────────────────

async function verifyFirebaseUser(request: Request): Promise<string> {
  const header = request.headers.get('Authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) throw new HttpError(401, 'Sign in required');
  try {
    const { payload } = await jwtVerify(token, firebaseJwks, {
      issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`,
      audience: FIREBASE_PROJECT_ID,
    });
    if (!payload.sub) throw new Error('no sub');
    return payload.sub;
  } catch {
    throw new HttpError(401, 'Sign in required');
  }
}

/** KV counters are eventually consistent, so limits are approximate — fine for abuse caps. */
async function enforceDailyLimits(env: Env, uid: string): Promise<void> {
  const day = new Date().toISOString().slice(0, 10);
  const userKey = `user:${uid}:${day}`;
  const globalKey = `global:${day}`;
  const userLimit = parseInt(env.USER_DAILY_LIMIT || '60', 10);
  const globalLimit = parseInt(env.GLOBAL_DAILY_LIMIT || '3000', 10);

  const [userCount, globalCount] = await Promise.all([
    env.RATE_KV.get(userKey).then((v) => parseInt(v || '0', 10)),
    env.RATE_KV.get(globalKey).then((v) => parseInt(v || '0', 10)),
  ]);
  if (globalCount >= globalLimit) {
    throw new HttpError(503, 'Scanning is temporarily unavailable. Please try again later.');
  }
  if (userCount >= userLimit) {
    throw new HttpError(429, "You've reached today's scan limit. It resets at midnight UTC.");
  }
  const ttl = { expirationTtl: 60 * 60 * 48 };
  await Promise.all([
    env.RATE_KV.put(userKey, String(userCount + 1), ttl),
    env.RATE_KV.put(globalKey, String(globalCount + 1), ttl),
  ]);
}

function json(status: number, data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    if (!env.GEMINI_API_KEY || !env.RATE_KV) {
      console.error('[gemini] Missing GEMINI_API_KEY or RATE_KV binding');
      throw new HttpError(503, 'Scanning is temporarily unavailable. Please try again later.');
    }

    const uid = await verifyFirebaseUser(request);
    const body = await request.json().catch(() => {
      throw new HttpError(400, 'Invalid request');
    });
    const geminiRequest = buildGeminiRequest(body);
    await enforceDailyLimits(env, uid);

    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
      body: JSON.stringify(geminiRequest),
    });
    if (!res.ok) {
      console.error(`[gemini] Upstream ${res.status}: ${(await res.text()).slice(0, 500)}`);
      throw new HttpError(502, 'The scanner service had a problem. Please try again.');
    }

    const data: any = await res.json();
    const text = (data?.candidates?.[0]?.content?.parts || [])
      .map((p: any) => (typeof p.text === 'string' ? p.text : ''))
      .join('');
    return json(200, { text });
  } catch (err: any) {
    if (err instanceof HttpError) return json(err.status, { error: err.message });
    console.error('[gemini] Unexpected error:', err?.message || err);
    return json(500, { error: 'The scanner service had a problem. Please try again.' });
  }
};
