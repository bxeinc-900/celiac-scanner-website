import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const authoritativeSources = [
    "Celiac.org", "Mayo Clinic", "Beyond Celiac", "Gluten-Free Drugs", 
    "Find Me Gluten Free", "FDA Database", "NHS Health", "Celiac Canada", 
    "Gluten Intolerance Group", "Schär Safety Lab", "GFCO", "AOECS",
    "USDA FoodData", "EFSA", "Coeliac UK", "National Institute of Health",
    "University of Chicago Celiac Center", "Children's National Hospital",
    "Harvard Health", "Massachusetts General Hospital", "Stanford Medicine",
    "Cleveland Clinic", "Johns Hopkins GI", "Columbia Celiac Center",
    "UCSD Celiac Program", "Vanderbilt Celiac Center", "EGA", "Health Canada",
    "FSANZ", "Codex Alimentarius", "Digestion SOS", "Kitchen Sanctuary"
  ];

  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - High-End Personal Concierge */}
      <section className="section-padding" style={{ paddingTop: "14rem", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div data-aos="fade-up">
              <span style={{ 
                fontSize: "1rem", 
                fontWeight: 800, 
                color: "var(--primary)", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em",
                display: "block",
                marginBottom: "1.5rem"
              }}>
                The Digital Guardian
              </span>
              <h1 style={{ 
                fontSize: "clamp(3rem, 6vw, 4.5rem)", 
                fontWeight: 800, 
                marginBottom: "2.5rem",
                color: "var(--on-surface)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05
              }}>
                Shop for food <br/>like you have <br/><span className="text-gradient">an expert in your pocket.</span> 
              </h1>
              <p style={{ 
                fontSize: "1.35rem", 
                color: "var(--on-surface)", 
                opacity: 0.85,
                maxWidth: "600px",
                marginBottom: "4.5rem",
                lineHeight: "1.7",
                fontWeight: 400
              }}>
                Hi! We made the Celiac Scanner to help you read food labels. You don't have to worry about "Natural Flavors" or hidden gluten anymore. Just scan the food, and our smart AI handles the hard part for you. 
              </p>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "3.5rem", alignItems: "center" }}>
                <Link href="#download">
                  <Image src="/app-store.svg" alt="Download on the App Store" width={160} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
                <Link href="#download">
                  <Image src="/google-play.svg" alt="Get it on Google Play" width={180} height={44} style={{ height: "44px", width: "auto" }} />
                </Link>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 700 }}>
                Try it free for 30 days. Your first 6 scans are totally free!
              </p>
            </div>
            
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
               <div className="card-lifted" style={{ 
                 position: "relative", 
                 width: "100%", 
                 maxWidth: "500px", 
                 borderRadius: "3rem", 
                 overflow: "hidden",
                 aspectRatio: "1/1",
               }}>
                 <Image src="/mockup.png" alt="Celiac Scanner App" fill style={{ objectFit: "cover" }} priority />
               </div>
               {/* Floating elements for high-end feel */}
               <div className="card-lifted glass" style={{ position: "absolute", bottom: "10%", left: "-10%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-danger)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Gluten Found</p>
                 </div>
               </div>
               <div className="card-lifted glass" style={{ position: "absolute", top: "15%", right: "-12%", padding: "1.5rem", borderRadius: "1.5rem", backdropFilter: "blur(12px)" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                   <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--status-safe)" }}></div>
                   <p style={{ fontWeight: 800, fontSize: "0.9rem" }}>Safe to Eat</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section - The 32 Clinical Streams */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2rem" }}>You deserve to feel safe.</h2>
            <p style={{ fontSize: "1.25rem", opacity: 0.7, maxWidth: "700px", margin: "0 auto" }}>
              Every time you scan, we check 30 different trusted sources. We make sure the best medical experts agree that your food is safe to eat.
            </p>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", 
            gap: "1.5rem",
            opacity: 0.8
          }}>
            {authoritativeSources.map((source, i) => (
              <div key={i} style={{ 
                padding: "1.5rem", 
                textAlign: "center", 
                backgroundColor: "var(--surface-container-lowest)", 
                borderRadius: "1rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--on-surface-variant)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80px"
              }}>
                {source}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logic Tiers - The 3-Tier System */}
      <section className="section-padding">
        <div className="container">
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8rem", alignItems: "center" }}>
              <div>
                 <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "3rem" }}>Three ways <br/>to feel <span style={{ color: "var(--primary)" }}>Safe.</span></h2>
                 <p style={{ fontSize: "1.3rem", opacity: 0.7, marginBottom: "4rem" }}>
                    We don't guess. We give you clear answers so you can buy food without any worry.
                 </p>
                 <div style={{ display: "grid", gap: "2rem" }}>
                    {[
                      { status: "Safe", color: "var(--status-safe)", text: "Our AI and experts found nothing to worry about. Enjoy your meal!" },
                      { status: "Caution", color: "var(--status-caution)", text: "This food might have some gluten from the factory. A dietitian hasn't cleared it yet." },
                      { status: "Gluten", color: "var(--status-danger)", text: "We found ingredients with gluten. Stay away from this one." }
                    ].map((step, i) => (
                      <div key={i} className="card-lifted" style={{ padding: "2.5rem", display: "flex", gap: "2rem", alignItems: "center" }}>
                        <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: step.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                           <span className="material-symbols-outlined" style={{ color: "white", fontSize: "2rem" }}>shield</span>
                        </div>
                        <div>
                           <h4 style={{ fontSize: "1.5rem", fontWeight: 800, color: step.color }}>{step.status}</h4>
                           <p style={{ opacity: 0.6 }}>{step.text}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="card-lifted bg-brand-gradient" style={{ borderRadius: "3rem", padding: "5rem", height: "100%", color: "white" }}>
                 <h3 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>AI that finds <br/>hidden gluten.</h3>
                 <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.8, marginBottom: "4rem", color: "white" }}>
                    Barcodes are just the start. If a food doesn't have a code, just take a picture of the label. Our AI reads everything to find hidden gluten in thickeners and other tricky ingredients.
                 </p>
                 <button className="btn-secondary" style={{ backgroundColor: "white", color: "var(--primary)" }}>
                    How our AI works
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Restaurant Finder Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "8rem", alignItems: "center" }}>
              <div className="card-lifted shadow-lg" style={{ borderRadius: "3rem", overflow: "hidden", position: "relative", height: "600px" }}>
                 <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(86,100,43,0.1) 0%, rgba(86,100,43,0.3) 100%)" }}></div>
                 <div style={{ position: "absolute", bottom: "10%", left: "10%", right: "10%", background: "rgba(255,255,255,0.9)", padding: "2rem", borderRadius: "1.5rem", backdropFilter: "blur(10px)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                       <h4 style={{ fontWeight: 800, fontSize: "1.2rem" }}>Luigi's Gluten-Free Pasta</h4>
                       <span style={{ backgroundColor: "var(--status-safe)", color: "white", padding: "0.25rem 0.75rem", borderRadius: "0.5rem", fontSize: "0.8rem", fontWeight: 800 }}>SAFE</span>
                    </div>
                    <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>"Amazing celiac protocols. The chef even came out to explain their separate kitchen area."</p>
                 </div>
              </div>
              <div>
                 <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "1.5rem" }}>New Feature</span>
                 <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "2.5rem", lineHeight: 1.1 }}>Dine Out <br/><span className="text-gradient">with No Doubt.</span></h2>
                 <p style={{ fontSize: "1.3rem", opacity: 0.7, lineHeight: 1.8, marginBottom: "3rem" }}>
                    We use live data from places like Google Maps and Yelp to help you find safe restaurants. But we do more than that. Our AI reads through recent reviews to find any hidden risks of cross-contact. 
                 </p>
                 <div style={{ display: "grid", gap: "1.5rem" }}>
                    {[
                      { icon: "map", text: "Finds the best-rated safe spots near you." },
                      { icon: "reviews", text: "AI checks reviews for real safety words." },
                      { icon: "verified", text: "We give every place a Green or Amber score." }
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                         <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(86, 100, 43, 0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span className="material-symbols-outlined" style={{ color: "var(--primary)", fontSize: "1.2rem" }}>{item.icon}</span>
                         </div>
                         <p style={{ fontWeight: 600, opacity: 0.8 }}>{item.text}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>
      <section className="section-padding" style={{ backgroundColor: "var(--on-surface)", color: "white" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
           <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "2.5rem", color: "white" }}>Why one crumb matters.</h2>
           <p style={{ fontSize: "1.4rem", opacity: 0.8, lineHeight: "1.8", color: "white" }}>
              For most people, a tiny crumb is nothing. But for someone with Celiac disease, even a tiny speck of gluten can cause a bad reaction. That's why we don't settle for "maybe." We built this scanner to make sure your food is truly safe for you.
           </p>
        </div>
      </section>

      {/* Disclaimers & Personal Note */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
           <div className="card-lifted" style={{ padding: "4rem", backgroundColor: "var(--surface-container-highest)" }}>
              <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>A quick note from our team.</h4>
              <p style={{ fontSize: "1.1rem", opacity: 0.7, lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Hi! Just a friendly reminder: we aren't doctors. We're app developers who really care about your safety. While our AI is very smart, it's not perfect. Always check the label yourself before you eat something. We built this tool to help you find things you might miss, but you are the final judge of what you eat.
              </p>
              <div style={{ opacity: 0.4, fontSize: "0.9rem" }}>
                This scanner is for information only. Always talk to a doctor for real medical advice.
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
