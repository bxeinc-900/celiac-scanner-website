import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Celiac Scanner",
  description: "Learn how Celiac Scanner protects your data and privacy while helping you stay safe on a gluten-free diet.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Celiac Scanner is a tool that helps you identify gluten in food products and find safe restaurants. We built this app with privacy in mind. We do not create user accounts, we do not store your personal information on our servers, and we do not sell your data — ever. This policy explains what information the app uses, why, and who it is shared with when necessary to make the app work.
      </p>
    ),
  },
  {
    id: "collection",
    title: "Information We Collect (and Why)",
    content: (
      <div style={{ display: "grid", gap: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>📷 Camera &amp; Ingredient Text</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            When you scan a product label, the app reads the ingredient text and sends it to Google&apos;s Gemini AI service for analysis. This is how we determine whether a product is gluten-safe. We do not store the camera image or the scanned text on our servers. The data is processed in real time and the result is returned to your device.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>📍 Location</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            If you use the Restaurant Finder, the app uses your device&apos;s location to find gluten-safe restaurants near you. This location data is sent in real time to Google Maps, Yelp, and Find Me Gluten Free to retrieve search results. We do not store your location on our servers after your search is complete.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.75rem" }}>💳 Payments</h3>
          <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            Premium subscriptions are processed entirely by Apple via in-app purchase. Subscription billing is managed through our partner, Adapty. We never see your credit card number, bank details, or any payment credentials. All subscription management is handled through your Apple ID settings.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "not-collected",
    title: "What We Do NOT Collect",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          We want to be clear about what we do not do:
        </p>
        <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
          <li>We do not collect your name, email address, or phone number.</li>
          <li>We do not create or store user accounts on our servers.</li>
          <li>We do not collect health records or medical information.</li>
          <li>We do not collect usage analytics or behavioral tracking data.</li>
          <li>We do not collect crash reports or diagnostic logs.</li>
          <li>We do not use advertising identifiers (IDFA).</li>
          <li>We do not share or sell your data to advertisers or data brokers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          To deliver core features, certain data is shared with the following third-party services. Each of these services operates under their own privacy policies.
        </p>
        <div style={{ display: "grid", gap: "1.25rem" }}>
          {[
            { name: "Google LLC (Gemini AI)", desc: "Receives scanned ingredient text to analyze gluten content. Governed by Google's Privacy Policy." },
            { name: "Google LLC (Google Maps)", desc: "Receives your location to show nearby restaurant results. Governed by Google's Privacy Policy." },
            { name: "Yelp Inc.", desc: "Receives your location to provide restaurant reviews and ratings. Governed by Yelp's Privacy Policy." },
            { name: "Find Me Gluten Free", desc: "Provides celiac-safe restaurant listings based on your location. Governed by Find Me Gluten Free's Privacy Policy." },
            { name: "Adapty", desc: "Manages subscription billing through Apple's in-app purchase system. Governed by Adapty's Privacy Policy." },
          ].map((svc) => (
            <div key={svc.name} style={{ padding: "1.25rem 1.5rem", backgroundColor: "var(--surface-container-high)", borderRadius: "1rem" }}>
              <strong style={{ display: "block", marginBottom: "0.4rem" }}>{svc.name}</strong>
              <span style={{ fontSize: "1rem", opacity: 0.75, lineHeight: "1.7" }}>{svc.desc}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Celiac Scanner is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a> and we will take steps to delete that information promptly.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          Depending on where you live, you may have certain rights regarding your personal information. Because we do not store personal data on our servers, most of these rights are satisfied automatically. However, you have the right to:
        </p>
        <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
          <li><strong>Know</strong> what data is collected about you (described in this policy).</li>
          <li><strong>Request deletion</strong> of any data associated with you.</li>
          <li><strong>Opt out</strong> of location access at any time via your device settings.</li>
          <li><strong>Opt out</strong> of camera access at any time via your device settings.</li>
        </ul>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginTop: "1.5rem" }}>
          These rights apply to users in California (CCPA) and the European Economic Area (GDPR), as well as other jurisdictions with similar laws. To exercise any of these rights, contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        Because Celiac Scanner does not store personal data on our servers, there is no retention period to describe for personal information. Scanned ingredient text and location data are processed in real time and are not retained by us after the result is delivered to your device. Subscription and purchase records are retained by Apple and Adapty in accordance with their own policies.
      </p>
    ),
  },
  {
    id: "deletion",
    title: "Data Deletion Requests",
    highlight: true,
    content: (
      <>
        <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.5rem" }}>
          You have the right to request deletion of any data associated with your use of the app at any time. To submit a deletion request, contact us at:
        </p>
        <a href="mailto:legal@celiacscanner.com" style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary)", textDecoration: "none", borderBottom: "2px solid var(--primary)", display: "inline-block" }}>
          legal@celiacscanner.com
        </a>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically. Your continued use of the app after any changes means you accept the updated policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:legal@celiacscanner.com" style={{ color: "var(--primary)", fontWeight: 700 }}>legal@celiacscanner.com</a>. We will do our best to respond within 5 business days.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Last Updated: May 25, 2026</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Privacy <br /><span className="text-gradient">Policy.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            We believe privacy is a right, not a feature. Here is exactly what Celiac Scanner collects, what it does not collect, and how your data is used.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "4rem" }}>
            <div style={{ display: "grid", gap: "3.5rem" }}>
              {sections.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  style={
                    s.highlight
                      ? { padding: "2.5rem", backgroundColor: "var(--surface-container-high)", borderRadius: "1.5rem" }
                      : undefined
                  }
                >
                  <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>{s.title}</h2>
                  {s.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
