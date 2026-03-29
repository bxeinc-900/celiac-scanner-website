import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForClinicians() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Helping You Keep Patients Safe</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Care Led <br /><span className="text-gradient">by Experts.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
             Help your patients follow their diet with a tool they can trust. Celiac Scanner helps you take care of your patients even when they are at the grocery store.
          </p>
        </div>
      </section>

      {/* Clinician Portal Feature */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "10rem", alignItems: "center" }}>
             <div>
                <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "3rem", lineHeight: 1.05 }}>A dashboard <br/><span style={{ color: "var(--primary)" }}>for doctors.</span></h2>
                <div style={{ display: "grid", gap: "3rem", marginTop: "4rem" }}>
                   {[
                     { title: "Tracking Patient Progress", desc: "See how your patients are doing and what they are scanning with live updates." },
                     { title: "Custom Safety Plans", desc: "Make special safety plans for your patients to make sure they follow your medical advice." },
                     { title: "Check Our Data Sources", desc: "See the full list of the 30 different sources we use to keep people safe." }
                   ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "2rem" }}>
                       <div style={{ width: "64px", height: "64px", borderRadius: "1rem", backgroundColor: "rgba(86, 100, 43, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--primary)" }}>monitor_heart</span>
                       </div>
                       <div>
                          <h4 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem" }}>{p.title}</h4>
                          <p style={{ opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.6 }}>{p.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", height: "700px", padding: "5rem", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", padding: "3rem" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
                      <h4 style={{ fontWeight: 800, fontSize: "1.2rem" }}>Patient Profile 01</h4>
                      <span style={{ fontSize: "0.875rem", padding: "0.5rem 1rem", backgroundColor: "var(--primary)", color: "white", fontWeight: 800, borderRadius: "0.75rem" }}>Live Updates</span>
                   </div>
                   <div style={{ display: "grid", gap: "1.5rem" }}>
                      {[84, 92, 78].map((score, i) => (
                        <div key={i} style={{ height: "12px", backgroundColor: "var(--surface-container-highest)", borderRadius: "1rem", overflow: "hidden" }}>
                           <div style={{ width: `${score}%`, height: "100%", background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-container) 100%)" }}></div>
                        </div>
                      ))}
                   </div>
                   <p style={{ marginTop: "3rem", opacity: 0.5, fontSize: "0.9rem", textAlign: "center", fontWeight: 600 }}>Example of the Doctor Interface</p>
                </div>
                <div style={{ marginTop: "4rem", textAlign: "center" }}>
                   <p style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "2rem" }}>Review the safety rules</p>
                   <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Join Our Network</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
           <h2 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.4, maxWidth: "900px", margin: "0 auto" }}>
              "This is the first app I've found that truly helps my patients feel less stressed at the store. It does the hard thinking for them."
           </h2>
           <p style={{ marginTop: "3rem", fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>- Dr. Sarah Klinic, Food Expert</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
