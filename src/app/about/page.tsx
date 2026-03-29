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
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>The Digital Guardian</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Because safety should be silent.</h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            The Celiac Scanner didn't start as a business. It started as a necessity for a family that could no longer trust labels. We built the "Digital Guardian" to perform the invisible clinical labor that Celiac safety requires.
          </p>
        </div>
      </section>

      {/* Trust Engine Sources */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
            <div>
               <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "2rem" }}>Built on a Foundation of <span style={{ color: "var(--primary)" }}>30 Authoritative Sources.</span></h2>
               <p style={{ fontSize: "1.25rem", opacity: 0.7, marginBottom: "3rem" }}>Trust is earned through evidence. We audit every scan result against a curated list of global clinical leaders.</p>
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  {[
                    "Celiac.org Health Database",
                    "Mayo Clinic Dietetics",
                    "FDA Food Label Guidelines",
                    "WHO Safety Standards",
                    "GFCO Industry Reports",
                    "University Research Centers"
                  ].map((source, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.25rem" }}>verified</span>
                        <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>{source}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div style={{ backgroundColor: "var(--surface)", height: "600px", borderRadius: "3rem", padding: "4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div style={{ position: "relative" }}>
                 <div style={{ width: "300px", height: "300px", border: "2px dashed var(--primary)", borderRadius: "100%", animation: "spin 20s linear infinite" }}></div>
                 <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                   <span style={{ fontSize: "6rem", fontWeight: 800, color: "var(--on-surface)" }}>30+</span>
                   <span style={{ display: "block", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 800, opacity: 0.4 }}>Clinical Streams</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "5rem" }}>The Digital Guardian</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem" }}>
            <div className="card-lifted" style={{ padding: "4rem", backgroundColor: "white", borderRadius: "3rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Empathetic Precision</h3>
              <p style={{ opacity: 0.6 }}>We know the anxiety of grocery shopping with Celiac disease. Our scanner is designed to lower your cortisol levels by doing the clinical thinking for you.</p>
            </div>
            <div className="card-lifted" style={{ padding: "4rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "3rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem" }}>Authoritative Voice</h3>
              <p style={{ opacity: 0.8 }}>We don't "guess". If we don't have enough data to verify a source from our 30 streams, we tell you. No ambiguity, just safety.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
