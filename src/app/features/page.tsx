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
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6rem" }}>
            
            <div className="card-lifted" style={{ padding: "4rem", borderRadius: "3rem", backgroundColor: "var(--surface)" }}>
               <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: "var(--primary)", marginBottom: "2rem" }}>verified_user</span>
               <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Expert-Backed Database</h3>
               <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>Our Trust Engine is founded on 30 authoritative clinical streams, including Mayo Clinic, Celiac.org, and FDA label audits. We don't guess, we verify.</p>
            </div>

            <div className="card-lifted" style={{ padding: "4rem", borderRadius: "3rem", backgroundColor: "var(--surface)" }}>
               <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: "var(--primary)", marginBottom: "2rem" }}>sync_alt</span>
               <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Instant Replacement</h3>
               <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>When a product fails the safety scan, Celiac Scanner suggests highly-rated, diet-safe alternatives category-by-category. Never walk away empty-handed.</p>
            </div>

            <div className="card-lifted" style={{ padding: "4rem", borderRadius: "3rem", backgroundColor: "var(--primary)", color: "white" }}>
               <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: "white", marginBottom: "2rem" }}>photo_camera</span>
               <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Digital Guardian AI</h3>
               <p style={{ opacity: 0.8, fontSize: "1.1rem" }}>Submit a photo of the ingredient list for any product without a barcode. Our AI performs manual de-obfuscation to find hidden gluten triggers.</p>
            </div>

            <div className="card-lifted" style={{ padding: "4rem", borderRadius: "3rem", backgroundColor: "var(--surface)" }}>
               <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: "var(--primary)", marginBottom: "2rem" }}>family_restroom</span>
               <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Family Sync</h3>
               <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>Share your scan history and 'favorites' list with family or caregivers. One account, total clinical visibility for everyone in your circle.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Section (Sanitized for Branding) */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
           <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "4.5rem" }}>Why Choose <span style={{ color: "var(--primary)" }}>Celiac Scanner?</span></h2>
           <div style={{ backgroundColor: "white", borderRadius: "4rem", padding: "4rem", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div style={{ textAlign: "left" }}>
                 <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>Feature Comparison</h4>
                 <div style={{ display: "grid", gap: "1.5rem" }}>
                    {["Clinical Source Auditing (30+ Sources)", "AI Photo Label Analysis", "Substitute Engine", "Community Curation", "Clinician Recommendation Engine"].map((f, i) => (
                      <div key={i} style={{ padding: "1.25rem 2rem", background: "var(--surface)", borderRadius: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                         <span style={{ fontWeight: 600 }}>{f}</span>
                         <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>check</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div style={{ padding: "2rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                 <span style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1rem" }}>6/6</span>
                 <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>Total Clinical <br />Precision Score</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
