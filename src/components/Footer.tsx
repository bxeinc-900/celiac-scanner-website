"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-padding" style={{ backgroundColor: "var(--surface-container-low)", paddingBottom: "5rem" }}>
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
            <h4 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Platform</h4>
            <Link href="/" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Home</Link>
            <Link href="/how-it-works" style={{ fontSize: "0.875rem", opacity: 0.7 }}>How It Works</Link>
            <Link href="/features" style={{ fontSize: "0.875rem", opacity: 0.7 }}>Scanner Features</Link>
            <Link href="/for-clinicians" style={{ fontSize: "0.875rem", opacity: 0.7 }}>For Clinicians</Link>
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
             <h4 style={{ fontSize: "1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5rem" }}>Download</h4>
             <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "flex-start" }}>
                <Link href="#download">
                   <Image src="/app-store.svg" alt="Download on the App Store" width={140} height={40} style={{ height: "40px", width: "auto" }} />
                </Link>
                <Link href="#download">
                   <Image src="/google-play.svg" alt="Get it on Google Play" width={160} height={40} style={{ height: "40px", width: "auto" }} />
                </Link>
             </div>
          </div>
        </div>

        <div style={{ paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.75rem", opacity: 0.5 }}>
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
