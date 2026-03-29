import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Legal & Safety Rules</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Our Safety and <br /><span className="text-gradient">Privacy Rules.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            The Celiac Scanner is a tool to help you stay safe. These rules show how we keep your information private and how we check our data.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gap: "6rem" }}>
            
            {/* Medical Disclaimer Section */}
            <div id="medical-disclaimer" className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)" }}>
                <div style={{ backgroundColor: "rgba(180, 41, 0, 0.05)", padding: "1.5rem 2.5rem", borderRadius: "1rem", marginBottom: "3rem", display: "inline-block" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "var(--status-danger)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Important Safety Notice</span>
                </div>
                <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem", color: "var(--on-surface)" }}>Health Warning</h2>
                <div style={{ fontSize: "1.2rem", opacity: 0.8, display: "grid", gap: "2rem", lineHeight: "1.8" }}>
                   <p><strong>What you should know:</strong> The Celiac Scanner is a helpful tool, but it is NOT a doctor or a lab. Our safety scores come from our AI checking 30 different trusted sources.</p>
                   <p>You should ALWAYS talk to a doctor before you change what you eat or make big health choices based on our app.</p>
                   <p>We try our best to be 100% correct by using data from the Mayo Clinic and Celiac.org. But we cannot promise that we will catch every single mistake on a food label.</p>
                </div>
            </div>
 
            <div style={{ padding: "0 2rem" }}>
               {/* Privacy Policy */}
               <div style={{ marginBottom: "5rem" }}>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>How We Keep Your Data Safe</h2>
                  <div style={{ fontSize: "1.1rem", opacity: 0.7, display: "grid", gap: "1.5rem", lineHeight: "1.7" }}>
                     <p>We keep your data private. Celiac Scanner does not sell your health or scan information to other companies like marketing or insurance firms.</p>
                     <p>Your scan history is locked away safely. We only use it to make our app better and to give you safety alerts that help you stay healthy.</p>
                  </div>
               </div>

               {/* Terms of Service */}
               <div>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "2rem" }}>How to Use Our App</h2>
                  <div style={{ fontSize: "1.1rem", opacity: 0.7, display: "grid", gap: "1.5rem", lineHeight: "1.7" }}>
                     <p>When you start your 30-day free trial, you agree to our rules. Your first 6 scans are free so you can see how well our app works. After that, you will need a subscription to keep using it.</p>
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
