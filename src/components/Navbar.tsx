"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "Our Story" },
    { href: "/legal", label: "Legal" },
  ];

  return (
    <>
      <nav className="glass" style={{ 
        position: "fixed", 
        top: 0, 
        width: "100%", 
        zIndex: 100, 
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} onClick={() => setIsOpen(false)}>
          <Image src="/logo.png" alt="Celiac Scanner" width={140} height={60} style={{ objectFit: "contain" }} priority />
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-menu-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <Link href="#download" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span style={{ transform: isOpen ? "rotate(45deg) translate(6px, 6px)" : "none" }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--surface)",
        zIndex: 99,
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        transition: "opacity 0.3s"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", alignItems: "center", textAlign: "center" }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              style={{ fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#download" 
            className="btn-primary" 
            style={{ padding: "1.25rem 3rem", fontSize: "1rem", marginTop: "2rem" }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
