import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "10rem", overflow: "hidden" }}>
        <div className="container">
          <div className="responsive-grid" style={{ alignItems: "center" }}>
            <div data-aos="fade-up">
              <span style={{ 
                fontSize: "1rem", 
                fontWeight: 800, 
                color: "var(--primary)", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em",
                display: "block",
                marginBottom: "1.5rem"
              }}>
                Welcome to Celiac Scanner
              </span>
              <h1 style={{ 
                fontSize: "clamp(3rem, 6vw, 4.5rem)", 
                fontWeight: 800, 
                marginBottom: "2.5rem",
                color: "var(--on-surface)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05
              }}>
                Your Digital Guardian <br/>for <span className="text-gradient">Gluten-Free</span> Living.
              </h1>
              <p style={{ 
                fontSize: "1.25rem", 
                color: "var(--on-surface)", 
                opacity: 0.85,
                maxWidth: "600px",
                marginBottom: "2rem",
                lineHeight: "1.7",
                fontWeight: 600
              }}>
                The only AI-powered safety ecosystem that cross-references 30+ medical authorities in real-time.
              </p>
              <p style={{ 
                fontSize: "1.05rem", 
                color: "var(--on-surface)", 
                opacity: 0.75,
                maxWidth: "600px",
                marginBottom: "3rem",
                lineHeight: "1.7",
                fontWeight: 400
              }}>
                Living with Celiac Disease or severe gluten sensitivity isn't a "lifestyle choice"—it's a daily medical necessity. Designed by developers who understand the high-stakes reality of a strict gluten-free diet, Celiac Scanner is the casual, approachable, tech-savvy friend you need in your pocket.
              </p>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "3.5rem", alignItems: "center", justifyContent: "inherit" }}>
                <Link href="#download">
                  <Image src="/app-store.svg" alt="Download on the App Store" width={160} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
                <Link href="#download">
                  <Image src="/google-play.svg" alt="Get it on Google Play" width={180} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
              </div>
            </div>
            
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
               <div className="card-lifted" style={{ 
                 position: "relative", 
                 width: "100%", 
                 maxWidth: "500px", 
                 borderRadius: "3rem", 
                 overflow: "hidden",
                 aspectRatio: "1/1",
               }}>
                 <Image src="/mockups_person/scanner.png" alt="Celiac Scanner App" fill style={{ objectFit: "cover" }} priority />
               </div>
               {/* Floating elements for high-end feel */}
               <div className="card-lifted glass" style={{ position: "absolute", bottom: "10%", left: "-10%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-danger)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Gluten Found</p>
                 </div>
               </div>
               <div className="card-lifted glass" style={{ position: "absolute", top: "15%", right: "-12%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-safe)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Safe to Eat</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Celiac Scanner is Different Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2rem" }}>Why we're <span style={{ color: "var(--primary)" }}>Different.</span></h2>
            <p style={{ fontSize: "1.25rem", opacity: 0.7, maxWidth: "700px", margin: "0 auto" }}>
              Whether you are grocery shopping or dining out, deciphering "natural flavors" shouldn't be a guessing game.
            </p>
          </div>

          <div className="responsive-grid" style={{ gap: "3rem", marginBottom: "4rem" }}>
             {/* 1. Multimodal AI */}
             <div className="card-lifted" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(178, 172, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                   <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: "var(--primary)" }}>smart_toy</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>1. Multimodal AI Label Intelligence</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.7 }}>
                  Traditional barcode scanners rely on outdated databases. Celiac Scanner uses <strong>Gemini 3 Multimodal AI</strong> to actually "read" the physical ingredient list. It easily identifies hidden gluten sources like Malt, Brewer's Yeast, and Yeast Extract that often hide behind generic barcodes.
                </p>
             </div>

             {/* 2. Trust 30 */}
             <div className="card-lifted" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(178, 172, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                   <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: "var(--primary)" }}>verified_user</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>2. The "Trust 30" Database Consensus</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.7 }}>
                  We don't just guess if an ingredient is safe. Every scan triggers a real-time cross-reference against <strong>30+ authoritative sources</strong>, including the Celiac Disease Foundation, Mayo Clinic, and Columbia University. You get a verdict backed by the world's leading experts.
                </p>
             </div>
             
             {/* 4. Amazon Safe Swap */}
             <div className="card-lifted" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(178, 172, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                   <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: "var(--primary)" }}>swap_horiz</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>4. Amazon "Safe-Swap" Integration</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.7 }}>
                  Did you scan a product that isn't safe? The app automatically finds a <strong>Certified Gluten-Free alternative on Amazon</strong>. With one tap, you can order a safe version of exactly what you were looking for.
                </p>
             </div>

             {/* 5. Safe Dining Hub */}
             <div className="card-lifted" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "rgba(178, 172, 136, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
                   <span className="material-symbols-outlined" style={{ fontSize: "2rem", color: "var(--primary)" }}>restaurant</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>5. Safe Dining Hub</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.7 }}>
                  Our restaurant finder uses AI to <strong>scan Yelp and Google Maps reviews for crucial keywords like "cross-contamination" or "knowledgeable staff,"</strong> helping you discover dedicated gluten-free kitchens and highly-vetted local spots instantly.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Logic Tiers - The 3-Tier System */}
      <section className="section-padding">
        <div className="container">
           <div className="responsive-grid" style={{ alignItems: "center", gap: "4rem" }}>
              <div className="card-lifted bg-brand-gradient" style={{ borderRadius: "3rem", height: "100%", color: "white" }}>
                 <h3 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "white", lineHeight: 1.1 }}>3. The Traffic Light Safety System</h3>
                 <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.8, marginBottom: "3rem", color: "white" }}>
                    We keep it simple when you're in a crowded grocery aisle. We color code every scan so you instantly know whether to buy it or leave it.
                 </p>
                 <div style={{ padding: "1.5rem", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.5rem", marginBottom: "1.5rem" }}>
                    <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "white", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}><span style={{ color: "var(--status-safe)" }}>🟢</span> SAFE (Green)</h4>
                    <p style={{ opacity: 0.9, fontSize: "0.95rem" }}>Confirmed safe by ingredients and official medical databases.</p>
                 </div>
                 <div style={{ padding: "1.5rem", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.5rem", marginBottom: "1.5rem" }}>
                    <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "white", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}><span style={{ color: "var(--status-caution)" }}>🟡</span> CAUTION (Amber)</h4>
                    <p style={{ opacity: 0.9, fontSize: "0.95rem" }}>Flags ambiguous ingredients like "Spices" and suggests checking for a GF certification.</p>
                 </div>
                 <div style={{ padding: "1.5rem", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.5rem" }}>
                    <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "white", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}><span style={{ color: "var(--status-danger)" }}>🔴</span> GLUTEN FOUND (Red)</h4>
                    <p style={{ opacity: 0.9, fontSize: "0.95rem" }}>Immediate alert identifying the specific prohibited grain or derivative.</p>
                 </div>
              </div>
              
              <div>
                 <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "3rem" }}>Built for You, <br/><span style={{ color: "var(--primary)" }}>With Your Privacy in Mind.</span></h2>
                 
                 <div style={{ display: "grid", gap: "2rem" }}>
                    <div className="card-lifted" style={{ padding: "2.5rem" }}>
                       <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>edit_note</span>
                          <h4 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Personal History & Notes</h4>
                       </div>
                       <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Keep a digital log of everything you scan. Add personal notes like <em>"Tastes great, found at Target"</em> to remember your favorites.</p>
                    </div>
                    <div className="card-lifted" style={{ padding: "2.5rem" }}>
                       <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>lock</span>
                          <h4 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Proactive Privacy</h4>
                       </div>
                       <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Your health data is your business. We use <strong>2026-standard encryption</strong> to ensure your onboarding info and scan history stay completely private.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Start Scanning Today */}
      <section className="section-padding" style={{ backgroundColor: "var(--on-surface)", color: "white" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "1000px" }}>
           <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "3.5rem", color: "white" }}>Start Scanning Today 💎</h2>
           <div className="responsive-grid-3" style={{ textAlign: "left", marginBottom: "4rem" }}>
              <div style={{ padding: "2.5rem 2rem", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "1.5rem" }}>
                 <h4 style={{ fontWeight: 800, color: "var(--primary)", fontSize: "1.35rem", marginBottom: "1rem" }}>The Freemium Start</h4>
                 <p style={{ opacity: 0.8, fontSize: "1rem", lineHeight: 1.6 }}>Try your first <strong>6 scans completely free</strong> —no credit card required.</p>
              </div>
              <div style={{ padding: "2.5rem 2rem", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.5rem", border: "2px solid var(--primary)", position: "relative" }}>
                 <span style={{ position: "absolute", top: "-14px", left: "2rem", backgroundColor: "var(--primary)", color: "var(--on-primary)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase" }}>Recommended</span>
                 <h4 style={{ fontWeight: 800, color: "var(--primary)", fontSize: "1.35rem", marginBottom: "1rem" }}>The 30-Day Pro Trial</h4>
                 <p style={{ opacity: 0.8, fontSize: "1rem", lineHeight: 1.6 }}>Unlock unlimited scanning, the Safe Dining Hub, and detailed ingredient breakdowns for a full month at $0.</p>
              </div>
              <div style={{ padding: "2.5rem 2rem", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "1.5rem" }}>
                 <h4 style={{ fontWeight: 800, color: "var(--primary)", fontSize: "1.35rem", marginBottom: "1rem" }}>Safety Pro</h4>
                 <p style={{ opacity: 0.8, fontSize: "1rem", lineHeight: 1.6 }}>Choose a simple monthly or discounted annual plan to keep your Digital Guardian active 24/7.</p>
              </div>
           </div>
           
           <Link href="#download" className="btn-primary" style={{ padding: "1.5rem 3.5rem", fontSize: "1.1rem", border: "2px solid rgba(255,255,255,0.2)" }}>
             Start Your Free Trial Now
           </Link>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
           <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-highest)", borderLeft: "4px solid var(--status-caution)" }}>
              <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <span className="material-symbols-outlined">warning</span> The "Real Talk" Disclaimer
              </h4>
              <p style={{ fontSize: "1.1rem", opacity: 0.7, lineHeight: 1.7 }}>
                Celiac Scanner is an information tool, not medical advice. While AI is a powerful assistant, you should always verify the physical label yourself. We provide the data; you make the final call for your health.
              </p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
