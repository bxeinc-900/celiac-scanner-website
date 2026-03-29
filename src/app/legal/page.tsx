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

      {/* Legal Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gap: "6rem" }}>
            
            {/* Medical Disclaimer Section */}
            <div id="medical-disclaimer" className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
                <div style={{ backgroundColor: "rgba(180, 41, 0, 0.05)", padding: "1.5rem 2.5rem", borderRadius: "1rem", marginBottom: "3rem", display: "inline-block" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--status-danger)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Important Safety Notice</span>
                </div>
                <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem", color: "var(--on-surface)" }}>Medical Disclaimer</h2>
                <div style={{ fontSize: "1.2rem", opacity: 0.8, display: "grid", gap: "2rem", lineHeight: "1.8" }}>
                   <p><strong>Clinical Standard:</strong> The Celiac Scanner is an informational concierge, NOT a medical diagnostic tool or laboratory service. All safety scores and clinical insights are generated through AI-driven auditing of 30+ authoritative data streams.</p>
                   <p>Users are strictly advised to ALWAYS consult with a qualified healthcare professional before altering their diet or making health-critical safety decisions based on digital scan results.</p>
                   <p>While we strive for absolute precision using real-time data from the Mayo Clinic, Celiac.org, and FDA manufacturing audits, the Celiac Scanner does not guarantee 100% protection against cross-contamination or labeling errors.</p>
                </div>
            </div>
 
            <div style={{ padding: "0 2rem" }}>
               {/* Privacy Policy */}
               <div style={{ marginBottom: "5rem" }}>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>Privacy Policy</h2>
                  <div style={{ fontSize: "1.1rem", opacity: 0.7, display: "grid", gap: "1.5rem", lineHeight: "1.7" }}>
                     <p>We believe in data sanctuary. Celiac Scanner does not sell your biometric, dietary, or scan history data to third-party marketing firms or insurance providers.</p>
                     <p>Your scan history is encrypted and used solely to audit the accuracy of our clinical "Trust Engine" and provide personalized safety alerts tailored to your health profile.</p>
                  </div>
               </div>

               {/* Terms of Service */}
               <div>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>Terms of Service</h2>
                  <div style={{ fontSize: "1.1rem", opacity: 0.7, display: "grid", gap: "1.5rem", lineHeight: "1.7" }}>
                     <p>By initializing a 30-day free trial, you accept our clinical protocols. Your first 6 scans are complimentary to demonstrate the accuracy of the Digital Guardian. Continued usage requires an active safety subscription.</p>
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
