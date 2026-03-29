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
            fontSize: "clamp(3rem, 6vw, 5.5rem)", 
            fontWeight: 800, 
            marginBottom: "2rem",
            color: "var(--on-surface)"
          }}>
            Scan with Confidence. <br/><span className="text-gradient">Live Gluten-Free.</span> 
          </h1>
          <p style={{ 
            fontSize: "1.35rem", 
            color: "var(--on-surface)", 
            opacity: 0.8,
            maxWidth: "700px",
            margin: "0 auto 4rem auto",
            lineHeight: "1.7"
          }}>
            Stop guessing with "Natural Flavors". Our high-end barcode scanner uses 30 authoritative sources to protect your health with clinical precision.
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

          <p style={{ fontWeight: 800, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)", marginTop: "-2.5rem", marginBottom: "5rem" }}>
            Start your 30-day free trial. Your first 6 scans are on us.
          </p>

          {/* Scanner Mockup (3-tier) */}
          <div className="card-lifted bg-brand-gradient" style={{ 
            position: "relative",
            margin: "0 auto",
            maxWidth: "900px",
            borderRadius: "4rem",
            padding: "4rem",
            color: "white"
          }}>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {[
                  { status: "Safe", icon: "check_circle", color: "#B2AC88", text: "Trusted for Celiac" },
                  { status: "Caution", icon: "warning", color: "#E6A23C", text: "Cross-Contamination" },
                  { status: "Gluten", icon: "cancel", color: "#B42900", text: "Definite Exposure" }
                ].map((tier, i) => (
                  <div key={i} className="glass" style={{ borderRadius: "2.5rem", padding: "2.5rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: tier.color, marginBottom: "1.5rem", fontVariationSettings: "'FILL' 1" }}>
                        {tier.icon}
                    </span>
                    <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem", color: tier.color }}>{tier.status}</h3>
                    <p style={{ opacity: 0.8, color: i === 0 ? "black" : "white" }}>{tier.text}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* The Hook Section */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
            <div style={{ backgroundColor: "var(--surface)", height: "600px", borderRadius: "3rem", padding: "4rem", position: "relative" }}>
                 <div style={{ position: "absolute", top: "2rem", left: "2rem", fontSize: "10rem", fontWeight: 800, opacity: 0.05, lineHeight: 1 }}>"</div>
                 <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginTop: "4rem", marginBottom: "2.5rem" }}>"Natural Flavors" shouldn't be a guessing game.</h2>
                 <p style={{ fontSize: "1.25rem", opacity: 0.7, lineHeight: 1.8 }}>
                    Hidden gluten lurks in the most unexpected places—from thickeners to flavorings. Without clinical verification, every shopping trip is a risk. We built the Celiac Scanner to be your digital guardian.
                 </p>
                 <div style={{ marginTop: "4rem", display: "flex", gap: "2rem" }}>
                    <Link href="/how-it-works" className="btn-primary" style={{ backgroundColor: "white", color: "var(--on-surface)", border: "1px solid rgba(0,0,0,0.1)" }}>
                        Read the Science
                    </Link>
                 </div>
            </div>
            <div>
              <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.1 }}>Precision Built for <span style={{ color: "var(--primary)" }}>Celiac Safety.</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  "30+ Authoritative Sources (Mayo Clinic, Celiac.org)",
                  "Instant Ingredient De-Obfuscation",
                  "Cross-Contamination Threshold Mapping",
                  "Digital Sanctuary User Experience"
                ].map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontWeight: 800 }}>verified</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{point}</span>
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
          <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "5rem" }}>The Trust Engine</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            {[
              { img: "mayo.png", name: "Mayo Clinic", text: "Clinical dietary data for verified Celiac guidance." },
              { img: "celiac.png", name: "Celiac.org", text: "The foundation of our gluten-free safety database." },
              { img: "fda.png", name: "FDA Data", text: "Real-time auditing of ingredient manufacturing labels." }
            ].map((source, i) => (
              <div key={i} className="card-lifted" style={{ padding: "3rem", borderRadius: "2rem", backgroundColor: "white" }}>
                <div style={{ backgroundColor: "var(--surface)", width: "80px", height: "80px", borderRadius: "100%", margin: "0 auto 2rem auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2rem" }}>account_balance</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>{source.name}</h3>
                <p style={{ opacity: 0.6, fontSize: "0.875rem" }}>{source.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
