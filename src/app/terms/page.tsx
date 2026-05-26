import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use | Celiac Scanner",
  description: "Read the Celiac Scanner Terms of Use, End User License Agreement (EULA), and medical disclaimer.",
};

export default function TermsOfUse() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>Effective: May 25, 2026</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Terms of <br /><span className="text-gradient">Use.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
            Please read these terms carefully before using Celiac Scanner. By downloading or using the app, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "4rem" }}>
            <div style={{ display: "grid", gap: "3.5rem" }}>

              {/* Medical Disclaimer */}
              <div style={{ padding: "2.5rem", backgroundColor: "rgba(180, 41, 0, 0.05)", borderRadius: "1.5rem", borderLeft: "5px solid var(--status-danger)" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--status-danger)" }}>Medical Disclaimer</h2>
                <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--on-surface)", lineHeight: "1.8" }}>
                  Celiac Scanner is an information tool — not a medical device and not a substitute for professional medical advice, diagnosis, or treatment. Ingredient formulations change without warning. AI analysis is not perfect. <strong>Always read the physical label yourself.</strong> If you have questions about a medical condition, consult your physician or a qualified health provider.
                </p>
              </div>

              {/* Acceptance */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>1. Acceptance of Terms</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  By downloading, installing, or using Celiac Scanner (the &quot;App&quot;), you agree to these Terms of Use (&quot;Terms&quot;) in full. If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and AntiGravity Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), the developer of Celiac Scanner.
                </p>
              </div>

              {/* License */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>2. License</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use the App on any Apple device that you own or control, as permitted by the App Store Terms of Service. You may not copy, modify, distribute, sell, or lease any part of the App, or reverse-engineer or attempt to extract its source code. This license does not transfer to you any ownership rights in the App.
                </p>
              </div>

              {/* User Responsibility */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>3. User Responsibility</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1rem" }}>
                  You agree to use the App only for lawful purposes. You acknowledge that:
                </p>
                <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
                  <li>Product ingredients change frequently and manufacturers may update their products without notice.</li>
                  <li>AI analysis may not be 100% accurate. Always verify against the physical product label.</li>
                  <li>The App&apos;s 30-source consensus is for guidance only and does not replace your own due diligence.</li>
                  <li>Restaurant safety ratings are based on publicly available data and user reviews. Conditions in a restaurant can change at any time.</li>
                  <li>You are solely responsible for any decisions you make based on information provided by the App.</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>4. Intellectual Property</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  The App, including its design, text, graphics, logos, and all underlying software, is owned by AntiGravity Labs and is protected by United States and international intellectual property laws. Nothing in these Terms gives you the right to use our trademarks, logos, or other brand features.
                </p>
              </div>

              {/* Subscriptions */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>5. Subscriptions &amp; Payments</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  Celiac Scanner offers optional premium features through a paid subscription. Subscriptions are billed through Apple&apos;s in-app purchase system and managed via Adapty. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription at any time through your Apple ID account settings. Prices are displayed in your local currency in the App Store and are subject to change. We do not process payment information directly and do not store your payment credentials.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>6. Disclaimer of Warranties</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the App will be error-free, uninterrupted, secure, or that any defects will be corrected. We do not warrant the accuracy, completeness, or reliability of any scan results, restaurant ratings, or other information provided by the App.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>7. Limitation of Liability</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  To the fullest extent permitted by law, AntiGravity Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to personal injury, property damage, loss of data, or financial loss — arising out of or related to your use of the App, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising out of or relating to these Terms or the App shall not exceed the amount you paid us in the 12 months preceding the claim, or $100 USD, whichever is greater.
                </p>
              </div>

              {/* Apple EULA — REQUIRED */}
              <div style={{ padding: "2.5rem", backgroundColor: "var(--surface-container-high)", borderRadius: "1.5rem" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>8. Apple App Store — Additional Terms</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1.25rem" }}>
                  These Terms apply to your use of the App obtained from the Apple App Store. You acknowledge and agree to the following:
                </p>
                <ul style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "2.2", paddingLeft: "1.5rem" }}>
                  <li>These Terms are between you and AntiGravity Labs only — not between you and Apple Inc. Apple is not a party to these Terms and has no responsibility for the App or its content.</li>
                  <li>Apple has no obligation whatsoever to provide any maintenance or support services for the App.</li>
                  <li>Apple is not responsible for any product liability claims, consumer protection claims, intellectual property infringement claims, or any other claim relating to the App. All such claims are the sole responsibility of AntiGravity Labs.</li>
                  <li>If the App fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any) to you. To the maximum extent permitted by law, Apple has no other warranty obligation regarding the App.</li>
                  <li>You must comply with applicable third-party terms of service when using the App (e.g., you must not be in violation of your wireless data service agreement when using the App).</li>
                  <li>Apple and Apple&apos;s subsidiaries are third-party beneficiaries of these Terms. Upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>9. Governing Law</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  These Terms are governed by the laws of the United States. Any dispute arising out of or relating to these Terms or the App shall be resolved through binding arbitration, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>10. Termination</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  We reserve the right to suspend or terminate your access to the App at any time, for any reason, with or without notice. You may stop using the App at any time by deleting it from your device. Sections 4, 6, 7, 8, and 9 of these Terms survive any termination.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>11. Changes to These Terms</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
                  We may update these Terms from time to time. When we do, we will update the effective date at the top of this page. Continued use of the App after changes are posted means you accept the updated Terms. If you do not agree to the updated Terms, stop using the App.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--on-surface)" }}>12. Contact</h2>
                <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8", marginBottom: "1rem" }}>
                  Questions about these Terms? Contact us:
                </p>
                <a href="mailto:legal@celiacscanner.com" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary)", textDecoration: "none", borderBottom: "2px solid var(--primary)", display: "inline-block" }}>
                  legal@celiacscanner.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
