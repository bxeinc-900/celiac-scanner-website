import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy & Terms of Use | Celiac Scanner",
  description: "Celiac Scanner's legal hub — full privacy policy, terms of use, medical disclaimer, and Apple EULA-compliant end user license agreement.",
};

const privacyHighlights = [
  { label: "No personal data stored", detail: "We never store your name, email, or identity on our servers." },
  { label: "Camera used on-device", detail: "Ingredient scans are sent to Gemini AI for analysis — images are never saved by us." },
  { label: "Location not retained", detail: "Used in real-time to find restaurants. Discarded the moment your search completes." },
  { label: "No analytics tracking", detail: "No usage data, crash logs, or advertising identifiers are collected." },
  { label: "Payments via Apple", detail: "Subscription billing is handled by Apple and Adapty. We never see your card details." },
];

const termsHighlights = [
  { label: "Medical disclaimer", detail: "The app is an information tool only — always verify against the physical label." },
  { label: "Apple EULA compliant", detail: "This agreement is between you and AntiGravity Labs, not Apple. Apple is a third-party beneficiary." },
  { label: "Subscriptions auto-renew", detail: "Manage or cancel any time through your Apple ID settings." },
  { label: "Limitation of liability", detail: "AntiGravity Labs is not liable for consequential or indirect damages." },
  { label: "Governed by US law", detail: "These terms are governed by the laws of the United States." },
];

export default function Legal() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{
            fontSize: "0.875rem", fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1.25rem"
          }}>
            Legal &amp; Safety Rules
          </span>
          <h1 style={{ fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.05 }}>
            Our Legal &amp; <br /><span className="text-gradient">Privacy Rules.</span>
          </h1>
          <p style={{ fontSize: "1.35rem", opacity: 0.65, maxWidth: "640px", lineHeight: "1.8" }}>
            Everything you need to know about how Celiac Scanner works, what data we use, and your rights as a user — all in one place.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "960px", display: "grid", gap: "5rem" }}>

          {/* Medical Disclaimer */}
          <div
            id="medical-disclaimer"
            style={{
              backgroundColor: "rgba(180, 41, 0, 0.04)",
              borderRadius: "2rem",
              padding: "4rem",
              boxShadow: "var(--shadow-ambient)",
            }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              backgroundColor: "rgba(180, 41, 0, 0.08)",
              borderRadius: "2rem", padding: "0.5rem 1.25rem", marginBottom: "2rem"
            }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--status-danger)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                ⚠ Important Safety Notice
              </span>
            </div>

            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "var(--status-danger)", lineHeight: 1.1 }}>
              Health Warning
            </h2>

            <div style={{ display: "grid", gap: "1.5rem", fontSize: "1.15rem", color: "var(--on-surface)", lineHeight: "1.8", opacity: 0.85 }}>
              <p>
                <strong>Celiac Scanner is a helpful tool — not a doctor, not a lab, and not a medical device.</strong> Our safety ratings come from AI cross-referencing 30 trusted sources, including Celiac.org and the Mayo Clinic. But AI is not perfect, and ingredient labels change without notice.
              </p>
              <p>
                <strong>Always read the physical label yourself.</strong> Talk to your physician before making any significant dietary changes based on information from this app. Do not use scan results as the sole basis for a medical decision.
              </p>
            </div>
          </div>

          {/* Privacy Policy Card */}
          <div id="privacy" className="card-lifted">
            <div style={{ display: "grid", gap: "2.5rem" }}>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem" }}>
                <div>
                  <span style={{
                    fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase",
                    letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem"
                  }}>
                    Document 01
                  </span>
                  <h2 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>
                    Privacy <span className="text-gradient">Policy.</span>
                  </h2>
                  <p style={{ fontSize: "1.1rem", opacity: 0.65, maxWidth: "560px", lineHeight: "1.75" }}>
                    We built Celiac Scanner with your privacy as a priority. No accounts. No data sold. Here is exactly what the app accesses and why.
                  </p>
                </div>
                <Link href="/privacy" className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                  Read Full Policy →
                </Link>
              </div>

              <div style={{ backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", padding: "2.5rem" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.5, marginBottom: "1.75rem" }}>
                  Key Highlights
                </p>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {privacyHighlights.map((item) => (
                    <div key={item.label} className="responsive-legal-grid">
                      <div style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        backgroundColor: "var(--primary)", marginTop: "0.5rem", flexShrink: 0
                      }} />
                      <div>
                        <strong style={{ fontSize: "1rem", display: "block", marginBottom: "0.25rem" }}>{item.label}</strong>
                        <span style={{ fontSize: "0.95rem", opacity: 0.65, lineHeight: "1.6" }}>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Terms of Use Card */}
          <div id="terms" className="card-lifted">
            <div style={{ display: "grid", gap: "2.5rem" }}>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem" }}>
                <div>
                  <span style={{
                    fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase",
                    letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem"
                  }}>
                    Document 02
                  </span>
                  <h2 style={{ fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem" }}>
                    Terms of <span className="text-gradient">Use.</span>
                  </h2>
                  <p style={{ fontSize: "1.1rem", opacity: 0.65, maxWidth: "560px", lineHeight: "1.75" }}>
                    Our End User License Agreement (EULA), subscription terms, medical disclaimer, and your rights as a user — Apple App Store compliant.
                  </p>
                </div>
                <Link href="/terms" className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                  Read Full Terms →
                </Link>
              </div>

              <div style={{ backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", padding: "2.5rem" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.5, marginBottom: "1.75rem" }}>
                  Key Highlights
                </p>
                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {termsHighlights.map((item) => (
                    <div key={item.label} className="responsive-legal-grid">
                      <div style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        backgroundColor: "var(--primary)", marginTop: "0.5rem", flexShrink: 0
                      }} />
                      <div>
                        <strong style={{ fontSize: "1rem", display: "block", marginBottom: "0.25rem" }}>{item.label}</strong>
                        <span style={{ fontSize: "0.95rem", opacity: 0.65, lineHeight: "1.6" }}>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Contact strip */}
          <div style={{
            backgroundColor: "var(--surface-container-lowest)",
            borderRadius: "2rem",
            padding: "4rem",
            boxShadow: "var(--shadow-ambient)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}>
            <div>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>Legal questions?</h3>
              <p style={{ fontSize: "1.05rem", opacity: 0.65, lineHeight: "1.7" }}>
                Reach out any time. We respond within 5 business days.
              </p>
            </div>
            <a href="mailto:legal@celiacscanner.com" className="btn-primary">
              legal@celiacscanner.com →
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
