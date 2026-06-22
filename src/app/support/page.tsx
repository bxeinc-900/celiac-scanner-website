import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Support | Celiac Scanner",
  description: "Get help with Celiac Scanner, report an issue, or ask a question.",
};

export default function SupportPage() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "2rem" }}>
            How can we <br /><span className="text-gradient">help?</span>
          </h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", margin: "0 auto", lineHeight: "1.8" }}>
            Whether you have a question, found a bug, or need help managing your subscription, our team is here for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "4rem", display: "grid", gap: "3.5rem" }}>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>Contact Us</h2>
              <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
                The fastest way to reach us is by sending an email. We typically reply within 24 to 48 hours.
              </p>
              <a href="mailto:support@celiacscanner.com" style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary)", textDecoration: "none", borderBottom: "2px solid var(--primary)", display: "inline-block" }}>
                support@celiacscanner.com
              </a>
            </div>

            <hr style={{ border: "none", height: "1px", backgroundColor: "var(--outline)", opacity: 0.2 }} />

            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>Subscription & Billing</h2>
              <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                All subscription payments and billing are managed directly by Apple. If you need to cancel a subscription, request a refund, or update your payment method, you can do so directly in your Apple ID settings on your iPhone or iPad. 
              </p>
              <a 
                href="https://support.apple.com/en-us/HT202039" 
                target="_blank" 
                rel="noreferrer"
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", marginTop: "1rem", display: "inline-block" }}
              >
                Learn how to cancel a subscription &rarr;
              </a>
            </div>

            <hr style={{ border: "none", height: "1px", backgroundColor: "var(--outline)", opacity: 0.2 }} />

            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>FAQ</h2>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>How accurate is the scanner?</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
                We use advanced AI to read ingredient lists, but it is not infallible. The app should be used as a helpful guide, not a medical device. Always double-check labels yourself, especially for certified gluten-free seals or specific allergy warnings.
              </p>

              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Does the app work outside the US?</h3>
              <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                Yes! Because the scanner reads the actual text on the label rather than relying on a static barcode database, it works on international products. The Restaurant Finder relies on Google Maps, Yelp, and Find Me Gluten Free, which have global coverage.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
