import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Features() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section - Sales Copy Focus */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>
            The Digital Guardian
          </span>
          <h1 style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 800, marginBottom: "3rem", lineHeight: 1.1 }}>
            Built for Celiac. <br /><span className="text-gradient">Not Just a Trend.</span>
          </h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.8, maxWidth: "800px", lineHeight: "1.8", marginBottom: "2.5rem" }}>
            Living with Celiac Disease or severe gluten sensitivity isn't a "lifestyle choice"—it’s a daily medical necessity. While the app stores are flooded with generic apps designed for casual dieters, Celiac Scanner was built for the high-stakes reality of a strict, lifelong medical diet. 
          </p>
          <p style={{ fontSize: "1.25rem", color: "var(--primary)", fontWeight: 700, letterSpacing: "0.02em" }}>
            For us, food safety isn't optional—it's essential.
          </p>
        </div>
      </section>

      {/* The AI Edge & Database Consensus */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div className="responsive-grid" style={{ gap: "4rem", marginBottom: "4rem" }}>
            
            <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", display: "flex", flexDirection: "column" }}>
               <div style={{ backgroundColor: "rgba(178, 172, 136, 0.15)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>auto_awesome</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", lineHeight: 1.2 }}>Gemini 3 Multimodal <br/>AI Label Intelligence</h3>
               <div style={{ marginBottom: "2rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--status-danger)", display: "block", marginBottom: "0.5rem" }}>The Gap</span>
                  <p style={{ opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.6 }}>Traditional barcode scanners rely on outdated, user-uploaded databases with missing or incorrect information.</p>
               </div>
               <div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--status-safe)", display: "block", marginBottom: "0.5rem" }}>Our Solution</span>
                  <p style={{ opacity: 0.9, fontSize: "1.15rem", lineHeight: 1.7, fontWeight: 600 }}>Celiac Scanner uses Gemini 3 Multimodal AI to actually "read" the physical ingredient list right on the package. It easily spots what manufacturers hide—like Malt, Brewer's Yeast, and Yeast Extract.</p>
               </div>
            </div>

            <div className="card-lifted bg-brand-gradient" style={{ color: "white", display: "flex", flexDirection: "column" }}>
               <div style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "white" }}>health_and_safety</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", lineHeight: 1.2, color: "white" }}>The "Trust 30" <br/>Database Consensus</h3>
               <div style={{ marginBottom: "2rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--surface)", display: "block", marginBottom: "0.5rem" }}>The Gap</span>
                  <p style={{ opacity: 0.8, fontSize: "1.1rem", lineHeight: 1.6, color: " सफेद(White)" }}>Most apps rely on crowdsourced opinions or unverified internet forums to determine if an ingredient is safe.</p>
               </div>
               <div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--surface)", display: "block", marginBottom: "0.5rem", opacity: 0.9 }}>Our Solution</span>
                  <p style={{ opacity: 1, fontSize: "1.15rem", lineHeight: 1.7, fontWeight: 700, color: "white" }}>We don't guess with your health. Every scan triggers a real-time cross-reference against 30+ authoritative medical sources, including Mayo Clinic and Columbia University.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Traffic Light & Amazon Swap */}
      <section className="section-padding">
        <div className="container">
          <div className="responsive-grid" style={{ gap: "6rem", alignItems: "center" }}>
            
            <div>
              <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.1 }}>
                Stop Guessing. <br/><span style={{ color: "var(--primary)" }}>Start Knowing.</span>
              </h2>
              <p style={{ fontSize: "1.25rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "3.5rem" }}>
                Deciphering vague terms like "natural flavors" or "spices" is a frustrating, time-consuming guessing game. We deliver a simple, immediate verdict while you stand in the grocery aisle.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ padding: "1.5rem 2rem", backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                   <span style={{ fontSize: "2.5rem" }}>🟢</span>
                   <div>
                     <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--status-safe)" }}>SAFE (Green)</h4>
                     <p style={{ opacity: 0.8, fontSize: "1rem" }}>Confirmed safe by official medical databases.</p>
                   </div>
                </div>
                <div style={{ padding: "1.5rem 2rem", backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                   <span style={{ fontSize: "2.5rem" }}>🟡</span>
                   <div>
                     <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--status-caution)" }}>CAUTION (Amber)</h4>
                     <p style={{ opacity: 0.8, fontSize: "1rem" }}>Flags ambiguous ingredients and suggests verifying certification.</p>
                   </div>
                </div>
                <div style={{ padding: "1.5rem 2rem", backgroundColor: "var(--surface-container-low)", borderRadius: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                   <span style={{ fontSize: "2.5rem" }}>🔴</span>
                   <div>
                     <h4 style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--status-danger)" }}>GLUTEN FOUND (Red)</h4>
                     <p style={{ opacity: 0.8, fontSize: "1rem" }}>Immediate alert pinpointing the specific prohibited grain.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-highest)", padding: "4rem" }}>
                <div style={{ backgroundColor: "var(--primary)", width: "70px", height: "70px", borderRadius: "1.5rem", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "white" }}>shopping_bag</span>
                </div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.1 }}>Amazon "Safe-Swap" Integration</h3>
                <p style={{ fontSize: "1.15rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "2.5rem" }}>
                  Scanning an item you really wanted to eat and getting a "Red" alert is disappointing, leaving you back at square one.
                </p>
                <p style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--primary)", lineHeight: 1.7 }}>
                  Celiac Scanner doesn't leave you hanging. If a product is unsafe, the app automatically searches for a Certified Gluten-Free alternative on Amazon. With just one tap, order exactly what you were craving.
                </p>
            </div>

          </div>
        </div>
      </section>

      {/* Wanderlust Without Worry */}
      <section className="section-padding" style={{ backgroundColor: "var(--on-surface)", color: "white" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
           <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--primary)", marginBottom: "2rem" }}>flight_takeoff</span>
           <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.1, color: "white" }}>Wanderlust Without <span style={{ color: "var(--primary)" }}>the Worry.</span></h2>
           <p style={{ fontSize: "1.3rem", opacity: 0.85, lineHeight: 1.8, marginBottom: "2.5rem", color: "white" }}>
             Have you ever spent hours before a trip meticulously combing through conflicting internet reviews just to find <em>one</em> safe place to eat? For individuals with celiac disease, traveling often feels less like a vacation and more like a high-stakes research project.
           </p>
           <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary)", marginBottom: "4rem" }}>
             Your phone quickly becomes a chaotic mess of open browser tabs. But what if your trusted scanner was also your ultimate travel guide?
           </p>
           
           <div className="card-lifted" style={{ backgroundColor: "rgba(255,255,255,0.05)", textAlign: "left", display: "grid", gap: "2.5rem", padding: "4rem" }}>
              <div>
                 <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "white" }}>The Safe Dining Hub</h3>
                 <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: 1.7, color: "white" }}>
                   Generic restaurant apps happily point you to places with "gluten-free options," but they completely miss the life-saving details you need. 
                 </p>
              </div>
              <div style={{ padding: "2rem", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.5rem", borderLeft: "4px solid var(--primary)" }}>
                 <p style={{ fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.6, color: "white" }}>
                   Our Safe Dining Hub utilizes advanced AI to actively scan thousands of Google and Yelp customer reviews, hunting for crucial keywords that matter to your health—like <strong>"cross-contamination"</strong> and <strong>"knowledgeable staff"</strong>.
                 </p>
              </div>
              <ul style={{ listStyle: "none", display: "grid", gap: "1.5rem", margin: 0, padding: 0 }}>
                 <li style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2rem" }}>star</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "white" }}>Discover hidden gems and dedicated GF kitchens instantly.</span>
                 </li>
                 <li style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "2rem" }}>shield_locked</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "white" }}>Get a realistic picture of safety protocols before walking in.</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* App Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "8rem" }}>
            <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "-0.02em" }}>See Your Guardian in Action</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.6, maxWidth: "600px", margin: "0 auto" }}>One app. Total protection. Complete peace of mind.</p>
          </div>
          
          <div className="responsive-grid" style={{ gap: "4rem" }}>
            {[
              { src: "/mockups_person/welcome.png", alt: "Welcome Screen", title: "Warm Welcome", desc: "Start your journey to safety with ease." },
              { src: "/mockups_person/scanner.png", alt: "Scanner Screen", title: "Instant Protection", desc: "Scan any product in seconds to verify safety." },
              { src: "/mockups_person/restaurant.png", alt: "Restaurant Finder", title: "Dine with No Doubt", desc: "Find safe restaurants using real-time reviews." },
              { src: "/mockups_person/profile.png", alt: "Profile Screen", title: "Personal History & Privacy", desc: "Keep a private log of safe foods and personal notes, secured with 2026-standard encryption." }
            ].map((img, i) => (
              <div key={i} className="card-lifted" style={{ padding: "0", overflow: "hidden", backgroundColor: "var(--surface-container-lowest)" }}>
                <div style={{ position: "relative", height: "550px", width: "100%" }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "3.5rem" }}>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>{img.title}</h3>
                  <p style={{ opacity: 0.6, fontSize: "1.1rem" }}>{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)", textAlign: "center" }}>
        <div className="container">
           <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem" }}>Ready to Stop Stressing over Every Meal?</h2>
           <Link href="#download" className="btn-primary" style={{ padding: "1.5rem 3.5rem", fontSize: "1.15rem" }}>
             Get the Ultimate Digital Guardian
           </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
