import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>The Experience</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Scanning is just <br /><span className="text-gradient">the beginning.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            The Celiac Scanner eliminates the mental fatigue of ingredient reading. We've combined clinical expertise with high-speed AI to create a sanctuary of safety in every grocery aisle.
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4rem" }}>
            {[
              { 
                step: "01", 
                title: "Scan the Barcode", 
                desc: "Instant access to over 500,000 products. Our database is audited by 30 authoritative clinical streams." 
              },
              { 
                step: "02", 
                title: "AI Label Analysis", 
                desc: "No barcode? No problem. Take a photo of the ingredient list and our Digital Guardian AI de-obfuscates hidden gluten." 
              },
              { 
                step: "03", 
                title: "Safety Verdict", 
                desc: "Receive a clear 'Safe', 'Caution', or 'Gluten' status backed by dietitian-led logic and research." 
              }
            ].map((item, i) => (
              <div key={i} className="card-lifted" style={{ padding: "4rem", backgroundColor: "var(--surface-container-lowest)" }}>
                <span style={{ fontSize: "5rem", fontWeight: 800, opacity: 0.05, display: "block", marginBottom: "-1rem", color: "var(--primary)" }}>{item.step}</span>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem" }}>{item.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: "1.7", fontSize: "1.1rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Discovery - Asymmetric Layout */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10rem", alignItems: "center" }}>
             <div>
                <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "3rem", lineHeight: 1.05 }}>Never leave the aisle <span style={{ color: "var(--primary)" }}>empty-handed.</span></h2>
                <p style={{ fontSize: "1.35rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "4rem" }}>
                  If a product is flagged as unsafe, the Celiac Scanner automatically suggests top-rated, diet-safe alternatives available in the same category.
                </p>
                <div style={{ backgroundColor: "var(--surface-container-low)", padding: "3.5rem", borderRadius: "1.5rem" }}>
                   <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "3rem" }}>
                      <div style={{ width: "70px", height: "70px", backgroundColor: "var(--status-danger)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined" style={{ color: "white", fontSize: "2.5rem" }}>warning</span>
                      </div>
                      <div>
                         <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--status-danger)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Flagged</span>
                         <h4 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Malt Extract Detected</h4>
                      </div>
                   </div>
                   <div style={{ paddingTop: "1rem" }}>
                      <span style={{ fontSize: "0.9rem", fontWeight: 800, opacity: 0.5, textTransform: "uppercase", display: "block", marginBottom: "2rem", letterSpacing: "0.1em" }}>Safe Alternatives</span>
                      <div style={{ display: "grid", gap: "1.5rem" }}>
                         {["Organic Rice Crisps", "Ancient Grains Medley"].map((alt, i) => (
                           <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", backgroundColor: "var(--surface-container-lowest)", borderRadius: "1rem" }}>
                              <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>{alt}</span>
                              <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2rem" }}>check_circle</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div style={{ backgroundColor: "var(--surface-container-lowest)", height: "650px", overflow: "hidden", position: "relative" }} className="card-lifted">
                <div className="bg-brand-gradient" style={{ height: "45%", padding: "5rem", color: "white" }}>
                   <h3 style={{ fontSize: "3rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>Substitute Engine</h3>
                   <p style={{ opacity: 0.8, fontSize: "1.2rem" }}>Pivot with absolute clinical confidence.</p>
                </div>
                <div style={{ padding: "5rem" }}>
                   <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                     {[
                       "Brand-to-Brand Mapping",
                       "Ingredient Sensitivity Cross-Check",
                       "Community Ratings & Availability",
                       "Retailer Stock Integration"
                     ].map((point, i) => (
                       <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                          <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2rem" }}>verified</span>
                          <span style={{ fontWeight: 600, fontSize: "1.2rem", opacity: 0.9 }}>{point}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
