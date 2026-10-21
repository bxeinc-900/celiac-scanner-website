import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Celiac Scanner",
  description: "Learn how Celiac Scanner protects your data and privacy while helping you stay safe on a gluten-free diet.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Celiac Scanner is a tool that helps you identify gluten in food products, track gluten-free grocery spending, and find safe restaurants. We built this app with privacy in mind and we do not sell your data — ever. This policy explains what information the app collects, why, where it is stored, and who it is shared with when necessary to make the app work.
      </p>
    ),
  },
  {
    id: "collection",
    title: "Information We Collect (and Why)",
    content: (
      <div style={{ display: "grid", gap: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>👤 Your Account</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            To use the app you sign in with Apple, Google, or an email address and password. We store your email address, your name (if provided), and the preferences you choose during onboarding — such as your gluten sensitivity level and whether you have Celiac disease or gluten sensitivity — in your account so the app can personalize your experience. Your account is stored with Google Firebase.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>📷 Product Label Scans</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            When you scan a product, the photo is sent over an encrypted connection to our server, which forwards it to Google&apos;s Gemini AI service for analysis and returns the result. Our server does not store the photo. The analysis result (product name, ingredients, and safety rating) is saved to your scan history in your account.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>🧾 Receipt Scans</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            When you scan a grocery receipt, the photo is analyzed the same way, through our server and Google&apos;s Gemini AI service. The receipt image and the extracted line items, store name, date, and totals are saved to your account so you can review them and export your gluten-free spending summary.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>📍 Location</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            If you use the Restaurant Finder, the app sends the location you type in — or, if you allow it, your device&apos;s approximate GPS location — through our server to Google&apos;s Gemini AI service, which uses Google Search to find gluten-safe restaurants nearby. We do not store your location.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>📧 Email Updates</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            We add your name, email address, sensitivity level, and subscription status to our email platform (GoHighLevel) so we can send you onboarding tips and app updates. You can unsubscribe from these emails at any time using the link in any email.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>🛡️ Free Trial Protection</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            To prevent the free trial from being restarted by deleting and re-creating an account, we keep a one-way scrambled (hashed) copy of your Sign in with Apple identifier together with the date your trial started. It cannot be used to identify you and is kept even if you delete your account.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>💳 Payments</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            Premium subscriptions are processed entirely by Apple via in-app purchase. Subscription billing is managed through our partner, Adapty, which receives your app account ID so your subscription follows you across devices. We never see your credit card number, bank details, or any payment credentials. All subscription management is handled through your Apple ID settings.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "not-collected",
    title: "What We Do NOT Collect",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" , marginBottom: "1.5rem" }}>
          We want to be clear about what we do not do:
        </p>
        <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
          <li>We do not collect your phone number or home address.</li>
          <li>We do not collect medical records — only the sensitivity preferences you choose to enter.</li>
          <li>We do not store the photos of product labels you scan.</li>
          <li>We do not store your location.</li>
          <li>We do not use advertising identifiers (IDFA) or track you across other apps and websites.</li>
          <li>We do not share or sell your data to advertisers or data brokers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" , marginBottom: "1.5rem" }}>
          To deliver core features, certain data is shared with the following service providers. Each of these services operates under their own privacy policies.
        </p>
        <div style={{ display: "grid", gap: "1.25rem" }}>
          {[
            { name: "Google LLC (Firebase)", desc: "Stores your account, profile preferences, scan history, and receipt images. Governed by Google's Privacy Policy." },
            { name: "Google LLC (Gemini AI)", desc: "Receives product and receipt photos, and restaurant search locations, to analyze gluten content and find restaurants. Governed by Google's Privacy Policy." },
            { name: "Cloudflare, Inc.", desc: "Hosts our website and the server that securely passes scan photos and restaurant searches to Gemini. It does not store them. Governed by Cloudflare's Privacy Policy." },
            { name: "Adapty", desc: "Manages subscription billing through Apple's in-app purchase system. Governed by Adapty's Privacy Policy." },
            { name: "GoHighLevel", desc: "Sends onboarding and update emails to the email address on your account. Governed by GoHighLevel's Privacy Policy." },
          ].map((svc) => (
            <div key={svc.name} style={{ padding: "1.25rem 1.5rem", backgroundColor: "var(--surface-container-high)", borderRadius: "1rem" }}>
              <strong style={{ display: "block", marginBottom: "0.4rem" }}>{svc.name}</strong>
              <span style={{ fontSize: "1rem", opacity: 0.75, lineHeight: "1.7" }}>{svc.desc}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Celiac Scanner is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a> and we will take steps to delete that information promptly.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          Depending on where you live, you may have certain rights regarding your personal information. You have the right to:
        </p>
        <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
          <li><strong>Know</strong> what data is collected about you (described in this policy).</li>
          <li><strong>Delete your account</strong> and its data at any time from the Profile screen in the app, or by contacting us.</li>
          <li><strong>Unsubscribe</strong> from our emails using the link in any email.</li>
          <li><strong>Opt out</strong> of location access at any time via your device settings.</li>
          <li><strong>Opt out</strong> of camera access at any time via your device settings.</li>
        </ul>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginTop: "1.5rem" }}>
          These rights apply to users in California (CCPA) and the European Economic Area (GDPR), as well as other jurisdictions with similar laws. To exercise any of these rights, contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Your account, profile preferences, scan history, and receipts are kept until you delete them or delete your account. Deleting your account from the app removes your account, profile, scan history, receipts, and receipt images. Product label photos and location searches are processed in real time and are not stored by us. The hashed free-trial record described above is kept to prevent trial abuse. Your contact record on our email platform is removed when you unsubscribe or ask us to delete it. Subscription and purchase records are retained by Apple and Adapty in accordance with their own policies.
      </p>
    ),
  },
  {
    id: "deletion",
    title: "Data Deletion Requests",
    highlight: true,
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          You can delete your account and its data at any time from the Profile screen in the app. You can also request deletion of any data associated with your use of the app, including your email contact record, by contacting us at:
        </p>
        <a href="mailto:legal@celiacscanner.com" style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary)", textDecoration: "none", borderBottom: "2px solid var(--primary)", display: "inline-block" }}>
          legal@celiacscanner.com
        </a>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically. Your continued use of the app after any changes means you accept the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a>. We will do our best to respond within 5 business days.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Last Updated: October 21, 2026</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Privacy <br /><span className="text-gradient">Policy.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            We believe privacy is a right, not a feature. Here is exactly what Celiac Scanner collects, what it does not collect, and how your data is used.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "4rem" }}>
            <div style={{ display: "grid", gap: "3.5rem" }}>
              {sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  style={
                    s.highlight
                      ? { padding: "2.5rem", backgroundColor: "var(--surface-container-high)", borderRadius: "1.5rem" }
                      : undefined
                  }
                >
                  <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>{s.title}</h2>
                  {s.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
