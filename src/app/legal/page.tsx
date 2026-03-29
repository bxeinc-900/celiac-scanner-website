import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Legal Sanctuary</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Legal & Health Transparency Center.</h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            The Celiac Scanner is an informational tool built for safety. Our legal structure reflects our commitment to clinical transparency and user privacy.
          </p>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ display: "grid", gap: "5rem" }}>
            
            {/* Medical Disclaimer Section */}
            <div id="medical-disclaimer" className="card-lifted" style={{ padding: "4.5rem", borderRadius: "3rem", border: "2px solid var(--primary)", backgroundColor: "var(--surface)" }}>
                <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "var(--primary)" }}>Medical Disclaimer</h2>
                <div style={{ fontSize: "1rem", opacity: 0.8, display: "grid", gap: "1.5rem", lineHeight: "1.8" }}>
                   <p><strong>Crucial Rule:</strong> The Celiac Scanner is NOT a medical diagnostic tool. All safety scores and clinical insights are for informational purposes only.</p>
                   <p>Users should ALWAYS consult with a healthcare professional before altering their diet or making safety decisions based on AI-generated scans.</p>
                   <p>Results are generated using 30 authoritative sources (Mayo Clinic, Celiac.org, etc.); however, no tool can replace personal medical advice or laboratory testing.</p>
                </div>
            </div>

            {/* Privacy Policy */}
            <div>
               <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Privacy Policy</h2>
               <div style={{ fontSize: "1rem", opacity: 0.7, display: "grid", gap: "1rem" }}>
                  <p>We respect your biometric and dietary data. Celiac Scanner does not sell your scan history to third-party marketing firms.</p>
                  <p>Your scan data is used solely to improve the accuracy of our "Trust Engine" and provide personalized safety insights.</p>
               </div>
            </div>

            {/* Terms of Service */}
            <div>
               <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Terms of Service</h2>
               <div style={{ fontSize: "1rem", opacity: 0.7, display: "grid", gap: "1rem" }}>
                  <p>By using the Celiac Scanner, you agree to our 30-day free trial terms. Your first 6 scans are on us. Subsequent scanning requires an active subscription.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
