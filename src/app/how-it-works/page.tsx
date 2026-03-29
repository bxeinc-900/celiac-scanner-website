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
      <section className="section-padding" style={{ backgroundColor: "white" }}>
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
              <div key={i} className="card-lifted" style={{ padding: "3.5rem", borderRadius: "3rem", backgroundColor: "var(--surface)" }}>
                <span style={{ fontSize: "4rem", fontWeight: 800, opacity: 0.1, display: "block", marginBottom: "1rem" }}>{item.step}</span>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.5rem" }}>{item.title}</h3>
                <p style={{ opacity: 0.6, lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Discovery */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
             <div>
                <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2rem" }}>Never leave the aisle <span style={{ color: "var(--primary)" }}>empty-handed.</span></h2>
                <p style={{ fontSize: "1.25rem", opacity: 0.7, marginBottom: "3rem" }}>
                  If a product is flagged as unsafe, the Celiac Scanner automatically suggests top-rated, diet-safe alternatives available in the same category.
                </p>
                <div style={{ backgroundColor: "white", padding: "2.5rem", borderRadius: "2rem" }}>
                   <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "2rem" }}>
                      <div style={{ width: "60px", height: "60px", backgroundColor: "var(--status-danger)", borderRadius: "1rem" }}></div>
                      <div>
                         <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--status-danger)", textTransform: "uppercase" }}>Flagged</span>
                         <h4 style={{ fontSize: "1.1rem", fontWeight: 800 }}>Malt Flavoring Detected</h4>
                      </div>
                   </div>
                   <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "2rem" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.4, textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>Safe Alternatives</span>
                      <div style={{ display: "grid", gap: "1rem" }}>
                         {["Organic Rice Crisps", "Ancient Grains Medley"].map((alt, i) => (
                           <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "var(--surface)", borderRadius: "1rem" }}>
                              <span style={{ fontWeight: 700 }}>{alt}</span>
                              <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>check_circle</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div style={{ backgroundColor: "white", height: "650px", borderRadius: "4rem", overflow: "hidden", position: "relative" }} className="card-lifted">
                <div className="bg-brand-gradient" style={{ height: "40%", padding: "4rem", color: "white" }}>
                   <h3 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Substitute Engine</h3>
                   <p style={{ opacity: 0.8 }}>Pivot with clinical confidence.</p>
                </div>
                <div style={{ padding: "4rem" }}>
                   <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                     {[
                       "Brand-to-Brand Mapping",
                       "Ingredient Sensitivity Cross-Check",
                       "Community Ratings & Availability",
                       "Retailer Stock Integration"
                     ].map((point, i) => (
                       <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                          <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>star</span>
                          <span style={{ fontWeight: 600 }}>{point}</span>
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
