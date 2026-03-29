import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForClinicians() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Partnering for Safety</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Clinician-Led <br /><span className="text-gradient">Precision Care.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
             Support your patients' dietary adherence with the Digital Guardian they can trust. Celiac Scanner offers a reliable extension of your clinical care into every grocery store.
          </p>
        </div>
      </section>

      {/* Clinician Portal Feature */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "8rem", alignItems: "center" }}>
             <div>
                <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2rem" }}>A dedicated <span style={{ color: "var(--primary)" }}>Clinician Dashboard.</span></h2>
                <div style={{ display: "grid", gap: "2.5rem", marginTop: "4rem" }}>
                  {[
                    { title: "Adherence Monitoring", desc: "Gain visibility into your patients' scanning history and diet quality." },
                    { title: "Personalized Protocols", desc: "Create curated safety profiles for your patients to ensure their scans align with their medical outcomes." },
                    { title: "Clinical Stream Audits", desc: "Access the transparent listing of the 30+ streams that power our Trust Engine." }
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                       <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--primary)" }}>monitor_heart</span>
                       <div>
                          <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>{p.title}</h4>
                          <p style={{ opacity: 0.6 }}>{p.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
             <div style={{ backgroundColor: "var(--surface)", height: "700px", borderRadius: "4rem", padding: "4rem", display: "flex", flexDirection: "column" }} className="card-lifted">
                <div style={{ flex: 1, backgroundColor: "white", borderRadius: "2rem", border: "1px solid rgba(0,0,0,0.05)", padding: "3rem" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                      <h4 style={{ fontWeight: 800 }}>Clinical Profile 01</h4>
                      <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.75rem", backgroundColor: "var(--surface)", color: "var(--primary)", fontWeight: 800, borderRadius: "99px" }}>Active Sync</span>
                   </div>
                   <div style={{ display: "grid", gap: "1rem" }}>
                      {[84, 92, 78].map((score, i) => (
                        <div key={i} style={{ height: "10px", backgroundColor: "var(--surface)", borderRadius: "99px", overflow: "hidden" }}>
                           <div style={{ width: `${score}%`, height: "100%", backgroundColor: "var(--primary)" }}></div>
                        </div>
                      ))}
                   </div>
                   <p style={{ marginTop: "2rem", opacity: 0.4, fontSize: "0.8rem", textAlign: "center" }}>Simulated Clinician View</p>
                </div>
                <div style={{ marginTop: "3rem", textAlign: "center" }}>
                   <p style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "1.5rem" }}>Download the Clinical Protocol Whitepaper</p>
                   <button className="btn-primary">Connect Your Practice</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
           <h2 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.4, maxWidth: "900px", margin: "0 auto" }}>
              "The Digital Guardian is the first app I've recommended that actually lowers patient cortisol levels in the grocery aisle. It performs the clinical thinking so They don't have to."
           </h2>
           <p style={{ marginTop: "3rem", fontSize: "1.2rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>- Dr. Sarah Klinic, GI Specialist</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
