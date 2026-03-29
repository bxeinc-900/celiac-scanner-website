"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass" style={{ 
      position: "fixed", 
      top: 0, 
      width: "100%", 
      zIndex: 100, 
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(178, 172, 136, 0.1)"
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Image src="/logo.png" alt="Celiac Scanner" width={140} height={60} style={{ objectFit: "contain" }} priority />
      </Link>
      
      <div style={{ display: "flex", gap: "3rem", alignItems: "center", fontWeight: 600, fontSize: "0.9rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/legal">Legal Center</Link>
        <Link href="#download" className="btn-primary" style={{ padding: "0.6rem 1.5rem" }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
