import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "1000px" }}>
          <h1 style={{ 
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)", 
            fontWeight: 800, 
            marginBottom: "2.5rem",
            color: "var(--on-surface)",
            letterSpacing: "-0.04em"
          }}>
            Scan with Confidence. <br/><span className="text-gradient">Live Gluten-Free.</span> 
          </h1>
          <p style={{ 
            fontSize: "1.5rem", 
            color: "var(--on-surface)", 
            opacity: 0.8,
            maxWidth: "750px",
            margin: "0 auto 4.5rem auto",
            lineHeight: "1.6",
            fontWeight: 400
          }}>
            The high-end digital concierge for Celiac safety. Stop guessing with "Natural Flavors" and use 30+ clinical data streams to protect your health.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "6rem" }}>
            <button className="btn-primary">
              <span className="material-symbols-outlined">apple</span>
              App Store Trial
            </button>
            <button className="btn-secondary">
              <span className="material-symbols-outlined">android</span>
              Play Store Trial
            </button>
          </div>

          <p style={{ fontWeight: 800, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)", marginTop: "-2.5rem", marginBottom: "5.5rem" }}>
            30-Day Free Trial • First 6 Scans Complimentary
          </p>

          {/* Scanner Mockup (3-tier) */}
          <div className="card-lifted bg-brand-gradient" style={{ 
            position: "relative",
            margin: "0 auto",
            maxWidth: "960px",
            borderRadius: "3rem",
            padding: "5rem",
            color: "white"
          }}>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
                {[
                  { status: "Safe", icon: "check_circle", color: "var(--surface)", text: "Verified Clinical Safety" },
                  { status: "Caution", icon: "warning", color: "#FFD666", text: "Traces Detected" },
                  { status: "Gluten", icon: "cancel", color: "#FF8C8C", text: "Prohibited Exposure" }
                ].map((tier, i) => (
                  <div key={i} className="glass" style={{ borderRadius: "2rem", padding: "3rem" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: tier.color, marginBottom: "2rem", fontVariationSettings: "'FILL' 1" }}>
                        {tier.icon}
                    </span>
                    <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "white" }}>{tier.status}</h3>
                    <p style={{ opacity: 0.8, fontSize: "1rem" }}>{tier.text}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* The Hook Section - Editorial Asymmetry */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "10rem", alignItems: "center" }}>
            <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "5rem", position: "relative" }}>
                 <div style={{ position: "absolute", top: "2rem", left: "2rem", fontSize: "12rem", fontWeight: 800, color: "var(--primary)", opacity: 0.03, lineHeight: 1 }}>"</div>
                 <h2 style={{ fontSize: "3.75rem", fontWeight: 800, marginTop: "2rem", marginBottom: "3rem", lineHeight: 1.1 }}>"Natural Flavors" shouldn't be a guessing game.</h2>
                 <p style={{ fontSize: "1.35rem", opacity: 0.8, lineHeight: 1.8, marginBottom: "4rem" }}>
                    Hidden gluten lurks in the most unexpected places—from modified starches to proprietary flavorings. Without clinical verification, every shopping trip is a health risk. We built the Celiac Scanner to be your digital guardian.
                 </p>
                 <Link href="/how-it-works" className="btn-secondary" style={{ backgroundColor: "var(--surface-container-highest)", color: "var(--on-surface)" }}>
                    Explore the Methodology
                 </Link>
            </div>
            <div style={{ paddingRight: "2rem" }}>
              <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "3rem", lineHeight: 1.05 }}>Precision Built for <br/><span style={{ color: "var(--primary)" }}>Celiac Safety.</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {[
                  "30+ Authoritative Clinical Sources",
                  "AI-Powered Ingredient De-Obfuscation",
                  "Cross-Contamination Risk Mapping",
                  "Digital Sanctuary User Experience"
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(86, 100, 43, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem", fontWeight: 800 }}>check</span>
                    </div>
                    <span style={{ fontSize: "1.25rem", fontWeight: 600, opacity: 0.9 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Engine Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "6rem", letterSpacing: "-0.03em" }}>The Trust Engine</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem" }}>
            {[
              { icon: "account_balance", name: "Mayo Clinic", text: "Clinical dietary auditing for verified gastrointestinal safety." },
              { icon: "verified_user", name: "Celiac.org", text: "The platinum standard for gluten-free safety databases." },
              { icon: "analytics", name: "Manufacturing Data", text: "Real-time auditing of industrial ingredient labeling." }
            ].map((source, i) => (
              <div key={i} className="card-lifted" style={{ padding: "4rem", textAlign: "left" }}>
                <div style={{ backgroundColor: "var(--surface-container-low)", width: "80px", height: "80px", borderRadius: "2rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2.5rem" }}>{source.icon}</span>
                </div>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.5rem" }}>{source.name}</h3>
                <p style={{ opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.6 }}>{source.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
