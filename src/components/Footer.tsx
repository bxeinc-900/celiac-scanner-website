"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-padding" style={{ backgroundColor: "white", paddingBottom: "5rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "5rem", marginBottom: "5rem" }}>
          <div>
            <Link href="/" style={{ display: "block", marginBottom: "2rem" }}>
              <Image src="/logo.png" alt="Celiac Scanner" width={160} height={70} style={{ objectFit: "contain" }} />
            </Link>
            <p style={{ opacity: 0.6, maxWidth: "300px", fontSize: "0.875rem" }}>
              The high-end digital concierge for Celiac safety. Built with 30 authoritative sources for clinical precision.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Connect</h4>
            <Link href="/" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Home</Link>
            <Link href="/about" style={{ fontSize: "0.875rem", opacity: 0.7 }}>About the Guardian</Link>
            <Link href="/legal" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Legal Center</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>App</h4>
            <Link href="#download" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Download App</Link>
            <Link href="#trial" style={{ fontSize: "0.875rem", opacity: 0.7 }}>30-Day Free Trial</Link>
            <Link href="#support" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Support</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
             <h4 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Download</h4>
             <button style={{ backgroundColor: "black", color: "white", padding: "0.75rem 1.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "1rem", border: "none" }}>
                <span className="material-symbols-outlined">apple</span>
                <div style={{ textAlign: "left" }}>
                   <div style={{ fontSize: "0.6rem", textTransform: "uppercase", opacity: 0.6 }}>Download on the</div>
                   <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>App Store</div>
                </div>
             </button>
             <button style={{ backgroundColor: "black", color: "white", padding: "0.75rem 1.5rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "1rem", border: "none" }}>
                <span className="material-symbols-outlined">android</span>
                <div style={{ textAlign: "left" }}>
                   <div style={{ fontSize: "0.6rem", textTransform: "uppercase", opacity: 0.6 }}>Get it on</div>
                   <div style={{ fontWeight: 800, fontSize: "0.9rem" }}>Google Play</div>
                </div>
             </button>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(178, 172, 136, 0.1)", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", opacity: 0.5 }}>
          <p>© 2026 Celiac Scanner. All rights reserved. Data verified by 30 authoritative sources.</p>
          <div style={{ display: "flex", gap: "2rem" }}>
             <Link href="/legal">Privacy</Link>
             <Link href="/legal">Terms</Link>
             <Link href="/legal">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
