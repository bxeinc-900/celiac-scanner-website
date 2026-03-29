import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding" style={{ paddingTop: "14rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "1rem" }}>What the app can do</span>
          <h1 style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "3rem" }}>Smart Features <br /><span className="text-gradient">for Your Safety.</span></h1>
          <p style={{ fontSize: "1.4rem", opacity: 0.7, maxWidth: "700px", lineHeight: "1.8" }}>
             We built the Celiac Scanner to keep you safe. Each feature is made to do the hard work of checking labels so you can shop without any worry. 
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6rem" }}>
            
            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>verified_user</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Trusted Food List</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>We check 30 different medical groups, like the Mayo Clinic and Celiac.org. We don't guess—we make sure your food is safe before you buy it.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>sync_alt</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Find Better Choices</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>If a food is not safe to eat, the app will show you other safe choices in the same store aisle. You will always find something great to buy.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--primary)", color: "white" }}>
               <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "white" }}>photo_camera</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>Smart Safety AI</h3>
               <p style={{ opacity: 0.85, fontSize: "1.15rem", lineHeight: 1.7 }}>Take a picture of the ingredients for any food without a label code. Our AI reads the list to find hidden gluten that might be hard for you to see.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>family_restroom</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Share with Family</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>You can share your safe food lists and favorite items with your family. Everyone can see what is safe to buy, so everyone in your home stays healthy.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>restaurant</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Dine Out with No Doubt</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>We use live data to help you find safe restaurants. Our AI reads through recent reviews to find any hidden risks of cross-contact. We give every place a simple Green (Safe) or Amber (Caution) score.</p>
            </div>

            <div className="card-lifted" style={{ padding: "5rem", backgroundColor: "var(--surface-container-lowest)" }}>
               <div style={{ backgroundColor: "rgba(86, 100, 43, 0.05)", width: "80px", height: "80px", borderRadius: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--primary)" }}>medical_services</span>
               </div>
               <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2rem" }}>Check Your Meds</h3>
               <p style={{ opacity: 0.7, fontSize: "1.15rem", lineHeight: 1.7 }}>Gluten can hide in medicines too. We check your prescriptions against the best medical lists to make sure they are safe for you to take. It's one more way we keep you healthy every day.</p>
            </div>

          </div>
        </div>
      </section>

      {/* App Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "8rem" }}>
            <h2 style={{ fontSize: "4.5rem", fontWeight: 800, marginBottom: "2rem" }}>A Peek Inside the App</h2>
            <p style={{ fontSize: "1.2rem", opacity: 0.6, maxWidth: "600px", margin: "0 auto" }}>See how we make safety simple, beautiful, and effortless.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem" }}>
            {[
              { src: "/mockups/welcome.png", alt: "Welcome Screen", title: "Warm Welcome", desc: "Start your journey to safety with ease." },
              { src: "/mockups/scanner.png", alt: "Scanner Screen", title: "Instant Protection", desc: "Scan any product in seconds to verify safety." },
              { src: "/mockups/profile.png", alt: "Profile Screen", title: "Personalized Care", desc: "Your safety profile, tailored to your needs." },
              { src: "/mockups/quiz.png", alt: "Quiz Screen", title: "Expert Knowledge", desc: "Learn about celiac safety with interactive quizes." }
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

      {/* Comparison Section (Sanitized for Branding) */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
           <h2 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "6rem", letterSpacing: "-0.03em" }}>Why Use <span style={{ color: "var(--primary)" }}>Celiac Scanner?</span></h2>
           <div className="card-lifted" style={{ backgroundColor: "var(--surface-container-lowest)", padding: "5rem", display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: "4rem" }}>
              <div style={{ textAlign: "left" }}>
                 <h4 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "3rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5 }}>App Features</h4>
                 <div style={{ display: "grid", gap: "1.5rem" }}>
                    {["Checks 30+ Medical Sources", "Reads Ingredient Photos", "Finds Safe Alternatives", "Trusted by many users", "Referred by Experts"].map((f, i) => (
                      <div key={i} style={{ padding: "1.5rem 2.5rem", background: "var(--surface-container-low)", borderRadius: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                         <span style={{ fontWeight: 700, fontSize: "1.1rem", opacity: 0.9 }}>{f}</span>
                         <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                           <span className="material-symbols-outlined" style={{ color: "white", fontSize: "1.25rem" }}>check</span>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div style={{ padding: "4rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                 <span style={{ fontSize: "5rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.05em", color: "white" }}>6/6</span>
                 <p style={{ fontSize: "1.25rem", opacity: 0.8, color: "white", fontWeight: 600 }}>Total Safety <br />Score</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
