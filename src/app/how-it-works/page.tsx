import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>
            How It Works
          </span>
          <h1 style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 800, marginBottom: "3rem", lineHeight: 1.1 }}>
            Your Pocket-Sized <br /><span className="text-gradient">Digital Guardian.</span>
          </h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.8, maxWidth: "800px", lineHeight: "1.8", marginBottom: "2rem" }}>
            Grocery shopping and dining out with Celiac Disease shouldn't feel like a stressful research project. We designed Celiac Scanner to be your casual, approachable, tech-savvy friend that takes the guesswork out of label reading.
          </p>
          <p style={{ fontSize: "1.2rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.7" }}>
            Here is how easy it is to use our app to protect your health and get instant peace of mind.
          </p>
        </div>
      </section>

      {/* Workflow Steps - 3 Simple Steps */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ marginBottom: "5rem" }}>
             <h2 style={{ fontSize: "3.5rem", fontWeight: 800 }}>📱 3 Simple Steps to Safety</h2>
          </div>
          
          <div className="responsive-grid-3" style={{ gap: "3rem" }}>
            {[
              { 
                step: "01", 
                title: "Point and Scan the Ingredients", 
                desc: "Traditional barcode scanners often rely on outdated databases. Celiac Scanner uses Gemini 3 Multimodal AI to actually \"read\" the physical ingredient list right on the package. Because it reads the text directly, it easily identifies hidden gluten sources like Malt, Brewer's Yeast, and Yeast Extract that often hide behind generic barcodes." 
              },
              { 
                step: "02", 
                title: "Instant Expert Cross-Referencing", 
                desc: "The second you scan a label, the app goes to work. It triggers a real-time cross-reference against our \"Trust 30\" Database Consensus. Your product is instantly checked against more than 30 authoritative medical sources—including the Celiac Disease Foundation and Mayo Clinic. You don't guess; you get a verdict backed by experts." 
              },
              { 
                step: "03", 
                title: "Get Your Traffic Light Verdict", 
                desc: "We keep things incredibly simple in a crowded grocery aisle. You instantly receive a color-coded alert: 🟢 SAFE (Green), 🟡 CAUTION (Amber) for ambiguous ingredients, or 🔴 GLUTEN FOUND (Red) identifying the specific prohibited grain." 
              }
            ].map((item, i) => (
              <div key={i} className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "3rem", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "6rem", fontWeight: 800, opacity: 0.05, display: "block", marginBottom: "-1.5rem", color: "var(--primary)", lineHeight: 1 }}>{item.step}</span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ opacity: 0.75, lineHeight: "1.7", fontSize: "1.05rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ marginBottom: "6rem", textAlign: "center" }}>
             <h2 style={{ fontSize: "3.5rem", fontWeight: 800 }}>🌟 The Benefits: <br/><span style={{ color: "var(--primary)" }}>What You Get</span></h2>
          </div>

          <div className="responsive-grid" style={{ gap: "6rem", alignItems: "center", marginBottom: "8rem" }}>
             <div className="card-lifted bg-brand-gradient" style={{ borderRadius: "3rem", padding: "4rem", color: "white" }}>
                <div style={{ padding: "1.5rem", backgroundColor: "white", borderRadius: "1.5rem", display: "inline-block", marginBottom: "2rem" }}>
                   <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "3rem", display: "block" }}>shopping_cart_checkout</span>
                </div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", marginBottom: "1.5rem", lineHeight: 1.2 }}>Find Safe Alternatives instantly with "Safe-Swap"</h3>
                <p style={{ fontSize: "1.15rem", opacity: 0.9, lineHeight: 1.7 }}>
                  Did you scan a product you really wanted, only to get a Red alert? We don't leave you hanging! The app's Amazon "Safe-Swap" Integration automatically finds a <strong>Certified Gluten-Free alternative</strong>. With just one tap, you can order a safe version of exactly what you were craving.
                </p>
             </div>
             
             <div className="card-lifted" style={{ borderRadius: "3rem", padding: "4rem", backgroundColor: "var(--surface-container-highest)" }}>
                <div style={{ padding: "1.5rem", backgroundColor: "var(--primary)", borderRadius: "1.5rem", display: "inline-block", marginBottom: "2rem" }}>
                   <span className="material-symbols-outlined" style={{ color: "white", fontSize: "3rem", display: "block" }}>restaurant</span>
                </div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.2 }}>Dine Out with Total Confidence</h3>
                <p style={{ fontSize: "1.15rem", opacity: 0.8, lineHeight: 1.7 }}>
                  Eating away from home shouldn't be a risk. Our <strong>Safe Dining Hub</strong> integrates with Google Maps and Yelp, using AI to scan thousands of restaurant reviews for crucial keywords like "cross-contamination" or "knowledgeable staff". You will instantly discover highly-vetted local spots and dedicated gluten-free kitchens in your area.
                </p>
             </div>
          </div>
          
          {/* Build Your Personal Safe List */}
          <div className="card-lifted" style={{ borderRadius: "3rem", overflow: "hidden", display: "flex", flexDirection: "column", backgroundColor: "var(--on-surface)", color: "white", textAlign: "center", padding: "5rem 2rem" }}>
             <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                 <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "4rem", marginBottom: "2rem", display: "block" }}>favorite</span>
                 <h3 style={{ fontSize: "3.5rem", fontWeight: 800, color: "white", marginBottom: "2rem", lineHeight: 1.1 }}>Build Your Personal Safe List</h3>
                 <p style={{ fontSize: "1.35rem", opacity: 0.85, lineHeight: 1.8 }}>
                   No more trying to remember which brand of crackers didn't make you sick. Celiac Scanner keeps a completely private digital log of your scan history. You can add personal notes to your scans, like <em>"Tastes great, found at Target,"</em> to easily keep track of your favorite safe foods.
                 </p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
