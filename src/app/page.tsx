import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const authoritativeSources = [
    "Celiac.org", "Mayo Clinic", "Beyond Celiac", "Gluten-Free Drugs", 
    "Find Me Gluten Free", "FDA Database", "NHS Health", "Celiac Canada", 
    "Gluten Intolerance Group", "Schär Safety Lab", "GFCO", "AOECS",
    "USDA FoodData", "EFSA", "Coeliac UK", "National Institute of Health",
    "University of Chicago Celiac Center", "Children's National Hospital",
    "Harvard Health", "Massachusetts General Hospital", "Stanford Medicine",
    "Cleveland Clinic", "Johns Hopkins GI", "Columbia Celiac Center",
    "UCSD Celiac Program", "Vanderbilt Celiac Center", "EGA", "Health Canada",
    "FSANZ", "Codex Alimentarius", "Digestion SOS", "Kitchen Sanctuary"
  ];

  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - High-End Personal Concierge */}
      <section className="section-padding" style={{ paddingTop: "14rem", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
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
                The Digital Guardian
              </span>
              <h1 style={{ 
                fontSize: "clamp(3rem, 6vw, 4.5rem)", 
                fontWeight: 800, 
                marginBottom: "2.5rem",
                color: "var(--on-surface)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05
              }}>
                Shop for groceries <br/>like you have <br/><span className="text-gradient">a GI in your pocket.</span> 
              </h1>
              <p style={{ 
                fontSize: "1.35rem", 
                color: "var(--on-surface)", 
                opacity: 0.85,
                maxWidth: "600px",
                marginBottom: "4.5rem",
                lineHeight: "1.7",
                fontWeight: 400
              }}>
                Hey there! We built the Celiac Scanner to take the stress out of ingredient reading. No more squinting at "Natural Flavors"—just scan, and our AI does the clinical heavy lifting for you.
              </p>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "3.5rem", alignItems: "center" }}>
                <Link href="#download">
                  <Image src="/app-store.svg" alt="Download on the App Store" width={160} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
                <Link href="#download">
                  <Image src="/google-play.png" alt="Get it on Google Play" width={180} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 700 }}>
                Try it free for 30 days. Your first 6 scans are on the house!
              </p>
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
                 <Image src="/mockup.png" alt="Celiac Scanner App" fill style={{ objectFit: "cover" }} priority />
               </div>
               {/* Floating elements for high-end feel */}
               <div className="card-lifted glass" style={{ position: "absolute", bottom: "10%", left: "-10%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-danger)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Gluten Detected</p>
                 </div>
               </div>
               <div className="card-lifted glass" style={{ position: "absolute", top: "15%", right: "-12%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-safe)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Certified Safe</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section - The 32 Clinical Streams */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2rem" }}>Trust isn't optional.</h2>
            <p style={{ fontSize: "1.25rem", opacity: 0.7, maxWidth: "700px", margin: "0 auto" }}>
              Every time you scan, we reach out to 30+ of the world's most authoritative clinical sources to build a consensus on your safety.
            </p>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", 
            gap: "1.5rem",
            opacity: 0.8
          }}>
            {authoritativeSources.map((source, i) => (
              <div key={i} style={{ 
                padding: "1.5rem", 
                textAlign: "center", 
                backgroundColor: "var(--surface-container-lowest)", 
                borderRadius: "1rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--on-surface-variant)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80px"
              }}>
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logic Tiers - The 3-Tier System */}
      <section className="section-padding">
        <div className="container">
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
              <div>
                 <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "3rem" }}>Three tiers <br/>of <span style={{ color: "var(--primary)" }}>Assurance.</span></h2>
                 <p style={{ fontSize: "1.3rem", opacity: 0.7, marginBottom: "4rem" }}>
                    We don't do maybe. We give you clear, actionable results so you can buy with total clinical confidence.
                 </p>
                 <div style={{ display: "grid", gap: "2rem" }}>
                    {[
                      { status: "Safe", color: "var(--status-safe)", text: "Our AI and clinical streams found zero risk factors. Eat with joy." },
                      { status: "Caution", color: "var(--status-caution)", text: "Potential cross-contact or 'Natural Flavors' that haven't been cleared by a dietitian yet." },
                      { status: "Gluten", color: "var(--status-danger)", text: "Prohibited ingredients detected. Stay clear to stay healthy." }
                    ].map((step, i) => (
                      <div key={i} className="card-lifted" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "center" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: step.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                           <span className="material-symbols-outlined" style={{ color: "white", fontSize: "2rem" }}>shield</span>
                        </div>
                        <div>
                           <h4 style={{ fontSize: "1.5rem", fontWeight: 800, color: step.color }}>{step.status}</h4>
                           <p style={{ opacity: 0.6 }}>{step.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="card-lifted bg-brand-gradient" style={{ borderRadius: "3rem", padding: "5rem", height: "100%", color: "white" }}>
                 <h3 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>AI-Powered <br/>De-obfuscation.</h3>
                 <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.8, marginBottom: "4rem", color: "white" }}>
                    Barcodes are just the start. If a product doesn't have one, just snap a photo of the ingredients. Gemini 3 reads between the lines to find hidden gluten in modified starches, thickeners, and "proprietary blends."
                 </p>
                 <button className="btn-secondary" style={{ backgroundColor: "white", color: "var(--primary)" }}>
                    Learn About Gemini 3
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Medical Education Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--on-surface)", color: "white" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
           <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem", color: "white" }}>Why 20ppm Matters.</h2>
           <p style={{ fontSize: "1.4rem", opacity: 0.8, lineHeight: "1.8", color: "white" }}>
              For most, a crumb is just a crumb. For a Celiac patient, as little as 20 parts per million of gluten can trigger a systemic autoimmune response. That's why we don't settle for "probably safe." We built Celiac Scanner to ensure your sanctuary remains untouched by accidental exposure.
           </p>
        </div>
      </section>

      {/* Disclaimers & Personal Note */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
           <div className="card-lifted" style={{ padding: "4rem", backgroundColor: "var(--surface-container-highest)" }}>
              <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>A quick personal note from the devs.</h4>
              <p style={{ fontSize: "1.1rem", opacity: 0.7, lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Hey! Just a reminder: we aren't doctors. We're app developers who are passionate about Celiac safety. While our AI is incredibly smart, it's not perfect. Always, always check the physical label yourself before consuming. We built this tool to help you find things you might miss, but you're the final judge of your safety.
              </p>
              <div style={{ opacity: 0.4, fontSize: "0.9rem" }}>
                The Celiac Scanner is an informational tool only. Consult a healthcare professional for clinical medical advice.
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
