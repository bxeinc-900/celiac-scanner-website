import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>The Feature Set</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Digital Guardian <br /><span className="text-gradient">Precision Features.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
             Celiac Scanner was built to deliver premium safety. Every feature is designed to perform the invisible clinical labor you need to shop safely. 
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6rem" }}>
            
            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>verified_user</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Expert-Backed Database</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>Our Trust Engine is founded on 30 authoritative clinical streams, including Mayo Clinic, Celiac.org, and FDA label audits. We don't guess, we verify with precision.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>sync_alt</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Instant Replacement</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>When a product fails the safety scan, Celiac Scanner automatically suggests highly-rated, diet-safe alternatives available in the same aisle. Never leave empty-handed.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--primary)", color: "white" }}>
               <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "white" }}>photo_camera</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>Digital Guardian AI</h3>
               <p style={{ opacity: 0.85, fontSize: "1.15rem", lineHeight: 1.7 }}>Submit a photo of the ingredient list for any product without a barcode. Our AI performs manual de-obfuscation to find hidden gluten triggers with clinical depth.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>family_restroom</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Family Sync</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>Share your safety history and 'favorites' with family or caregivers. One account, total clinical visibility for everyone in your circle. No child left un-guarded.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section (Sanitized for Branding) */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
           <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "6rem", letterSpacing: "-0.03em" }}>Why Choose <span style={{ color: "var(--primary)" }}>Celiac Scanner?</span></h2>
           <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "5rem", display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: "4rem" }}>
              <div style={{ textAlign: "left" }}>
                 <h4 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5 }}>Clinical Specifications</h4>
                 <div style={{ display: "grid", gap: "1.5rem" }}>
                    {["Clinical Source Auditing (30+ Sources)", "AI Photo Label Analysis", "Substitute Engine", "Community Curation", "Clinician Recommendation Engine"].map((f, i) => (
                      <div key={i} style={{ padding: "1.5rem 2.5rem", background: "var(--surface-container-low)", borderRadius: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                         <span style={{ fontWeight: 700, fontSize: "1.1rem", opacity: 0.9 }}>{f}</span>
                         <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span className="material-symbols-outlined" style={{ color: "white", fontSize: "1.25rem" }}>check</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div style={{ padding: "4rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                 <span style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.05em", color: "white" }}>6/6</span>
                 <p style={{ fontSize: "1.25rem", opacity: 0.8, color: "white", fontWeight: 600 }}>Total Clinical <br />Precision Score</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
