import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Our Story</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Safety should be <br /><span className="text-gradient">easy for everyone.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            The Celiac Scanner didn't start as a business. It started because our family couldn't find food labels we could trust. We built this tool to do the hard work of checking labels for you.
          </p>
        </div>
      </section>

      {/* Trust Engine Sources */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10rem", alignItems: "center" }}>
            <div>
               <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.05 }}>We Check <span style={{ color: "var(--primary)" }}>30 Trusted Sources.</span></h2>
               <p style={{ fontSize: "1.35rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "3.5rem" }}>We earn your trust by showing you the facts. Every scan is checked against a list of world-class medical experts.</p>
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
                  {[
                    "Celiac.org Expert List",
                    "Mayo Clinic Diet Experts",
                    "FDA Label Rules",
                    "Global Health Standards",
                    "GFCO Food Reports",
                    "Trusted Research Centers"
                  ].map((source, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(86, 100, 43, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1rem", fontWeight: 800 }}>check</span>
                        </div>
                        <span style={{ fontSize: "1rem", fontWeight: 600, opacity: 0.9 }}>{source}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", height: "600px", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ position: "relative" }}>
                 <div style={{ width: "320px", height: "320px", border: "2px dashed var(--outline-variant)", borderRadius: "100%", animation: "spin 20s linear infinite", opacity: 0.3 }}></div>
                 <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                   <span style={{ fontSize: "6.5rem", fontWeight: 800, color: "var(--on-surface)", letterSpacing: "-0.05em" }}>30+</span>
                   <span style={{ display: "block", textTransform: "uppercase", fontSize: "0.9rem", fontWeight: 800, opacity: 0.5, letterSpacing: "0.1em" }}>Trusted Sources</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "6rem", letterSpacing: "-0.03em" }}>A few more reasons <span style={{ color: "var(--primary)" }}>to trust us</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem" }}>
            <div className="card-lifted" style={{ padding: "5rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>We understand you</h3>
              <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>We know how stressful it is to shop for food when you have Celiac disease. Our scanner helps you feel less worried by doing the hard thinking for you.</p>
            </div>
            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--primary)", color: "white", textAlign: "left" }}>
              <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>We are honest</h3>
              <p style={{ opacity: 0.8, fontSize: "1.15rem", lineHeight: 1.7 }}>We never guess. If we aren't 100% sure about a food, we will tell you right away. We only want you to eat what is safe.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
