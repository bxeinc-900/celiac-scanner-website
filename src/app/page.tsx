import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="glass" style={{ 
        position: "fixed", 
        top: 0, 
        width: "100%", 
        zIndex: 50, 
        padding: "1.25rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Image 
            src="/logo.png" 
            alt="Celiac Scanner Logo" 
            width={160} 
            height={70} 
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#download" className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}>
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "12rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)", 
            fontWeight: 800, 
            marginBottom: "1.5rem",
            color: "var(--on-surface)"
          }}>
            Your High-End <span className="text-gradient">Health Editorial.</span> 
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "var(--on-surface)", 
            opacity: 0.8,
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
            lineHeight: "1.6"
          }}>
            Experience the "Clinical Sanctuary"—a design philosophy that blends medical precision with the warmth of wellness. Scan, verify, and live with confidence.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <button className="btn-primary">
              <span className="material-symbols-outlined">apple</span>
              Download for iOS
            </button>
            <button className="btn-secondary">
              <span className="material-symbols-outlined">android</span>
              Get for Android
            </button>
          </div>

          {/* Hero App Mockup */}
          <div style={{ 
            position: "relative",
            margin: "0 auto",
            maxWidth: "800px",
            borderRadius: "3rem",
            overflow: "hidden",
            boxShadow: "var(--shadow-ambient)",
            backgroundColor: "var(--surface-container-lowest)",
            padding: "2rem"
          }}>
             {/* Mocking the App UI inside the mockup */}
             <div className="surface-alt" style={{ borderRadius: "2rem", padding: "3rem", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
                  <div style={{ position: "relative", textAlign: "center" }}>
                    <svg style={{ width: "240px", height: "120px" }} viewBox="0 0 100 50">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--surface-container-highest)" strokeLinecap="round" strokeWidth="8" />
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--primary)" strokeDasharray="125.6" strokeDashoffset="0" strokeLinecap="round" strokeWidth="8" />
                    </svg>
                    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "10px" }}>
                      <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "3rem", fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.5rem", color: "var(--primary)", textTransform: "uppercase" }}>Safe to Eat</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>Artisan Almond Crackers</h3>
                    <p style={{ opacity: 0.6, marginBottom: "2rem" }}>Nature's Harvest Co.</p>
                    <div style={{ backgroundColor: "var(--primary-fixed-dim)", padding: "1.5rem", borderRadius: "1.5rem", display: "inline-block" }}>
                      <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--on-surface)", display: "block" }}>100%</span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Safety Score</span>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "var(--surface-container-lowest)", padding: "2rem", borderRadius: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>menu_book</span>
                      <h4 style={{ fontWeight: 700 }}>Clinical Insights</h4>
                    </div>
                    <p style={{ fontSize: "0.875rem", fontStyle: "italic", opacity: 0.8 }}>
                      "Ingredients like Almond Flour and Sea Salt are naturally gluten-free and safe for individuals with Celiac disease."
                    </p>
                    <p style={{ fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase", marginTop: "1rem", color: "var(--primary)" }}>— Source: Celiac.org Health Database</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="surface-alt section-padding">
        <div className="container">
          <div style={{ marginBottom: "5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1.5rem" }}>The Sanctuary Standard</h2>
            <p style={{ opacity: 0.7, maxWidth: "600px", margin: "0 auto" }}>Built on three pillars of trust: Precision, Warmth, and Authority.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {[
              { 
                icon: "barcode_scanner", 
                title: "Precision Scanning", 
                desc: "AI-powered analysis that detects hidden gluten in seconds. No more guesswork at the grocery store." 
              },
              { 
                icon: "verified_user", 
                title: "Clinical Trust", 
                desc: "Every result is backed by the Celiac.org health database and real-time clinical insights." 
              },
              { 
                icon: "history", 
                title: "Personal History", 
                desc: "Keep a curated 'Safe List' of your favorite finds and cross-contamination notes." 
              }
            ].map((feature, i) => (
              <div key={i} className="card card-lifted">
                <div style={{ 
                  backgroundColor: "var(--primary-fixed-dim)", 
                  width: "60px", 
                  height: "60px", 
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem"
                }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.8rem" }}>{feature.icon}</span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>{feature.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: "1.7" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--on-surface)", color: "var(--surface)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "2rem", lineHeight: "1.1" }}>Medical Laboratory, <br/>Wellness Warmth.</h2>
            <p style={{ fontSize: "1.25rem", opacity: 0.7, marginBottom: "3rem", lineHeight: "1.8" }}>
              We believe health data shouldn't feel scary. Our "No-Line" design philosophy uses background color shifts instead of harsh borders, creating a breathing space that feels like a high-end wellness editorial.
            </p>
            <div style={{ display: "flex", gap: "3rem" }}>
              <div>
                <span style={{ fontSize: "3rem", fontWeight: 900, display: "block" }}>10k+</span>
                <span style={{ opacity: 0.5, textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em" }}>Weekly Scans</span>
              </div>
              <div>
                <span style={{ fontSize: "3rem", fontWeight: 900, display: "block" }}>99%</span>
                <span style={{ opacity: 0.5, textTransform: "uppercase", fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em" }}>Accuracy Rate</span>
              </div>
            </div>
          </div>
          <div style={{ 
            backgroundColor: "var(--surface-container-highest)", 
            height: "500px", 
            borderRadius: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(3deg)",
            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)"
          }}>
             <span className="material-symbols-outlined" style={{ fontSize: "10rem", color: "var(--primary)", opacity: 0.2 }}>spa</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="section-padding" style={{ textAlign: "center" }}>
        <div className="container">
          <div className="card-lifted bg-signature-gradient" style={{ 
            padding: "5rem", 
            borderRadius: "4rem",
            color: "white"
          }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Ready to find your sanctuary?</h2>
            <p style={{ fontSize: "1.25rem", marginBottom: "3.5rem", opacity: 0.9 }}>Join the community of Celiac warriors scanning for a safer life.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <button className="btn-secondary" style={{ backgroundColor: "white", color: "black", border: "none" }}>
                App Store
              </button>
              <button className="btn-secondary" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="surface-alt" style={{ padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
            <Image 
              src="/logo.png" 
              alt="Celiac Scanner Logo" 
              width={140} 
              height={60} 
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "3rem", opacity: 0.6, fontSize: "0.875rem", fontWeight: 600 }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Clinical Support</a>
          </div>
          <p style={{ opacity: 0.4, fontSize: "0.75rem" }}>© 2026 Celiac Sanctuary. All rights reserved. Data provided by Celiac.org Health Database.</p>
        </div>
      </footer>
    </main>
  );
}
