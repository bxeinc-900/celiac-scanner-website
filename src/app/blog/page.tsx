"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <Navbar />

      {/* Header Banner */}
      <section className="section-padding" style={{ paddingTop: "12rem", backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <span style={{ 
            fontSize: "0.875rem", 
            fontWeight: 800, 
            color: "var(--primary)", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em",
            display: "block",
            marginBottom: "1rem"
          }}>
            Celiac Scanner Editorial & Guides
          </span>
          <h1 style={{ 
            fontSize: "clamp(2.75rem, 5vw, 4.25rem)", 
            fontWeight: 800, 
            marginBottom: "1.5rem",
            color: "var(--on-surface)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
            Gluten-Free Safety, <br />
            <span className="text-gradient">Tax Savings & Wellness</span>
          </h1>
          <p style={{ 
            fontSize: "1.2rem", 
            color: "var(--on-surface)", 
            opacity: 0.8,
            maxWidth: "700px",
            lineHeight: "1.7"
          }}>
            Expert insights on navigating Celiac Disease, claiming IRS and CRA gluten-free tax deductions, and avoiding hidden gluten pitfalls.
          </p>
        </div>
      </section>

      {/* Featured Article & Search Section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Search & Category Bar */}
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "space-between", 
            alignItems: "center", 
            gap: "1.5rem", 
            marginBottom: "4rem" 
          }}>
            {/* Category Pills */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.6rem 1.25rem",
                    borderRadius: "1rem",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: "none",
                    backgroundColor: selectedCategory === cat ? "var(--primary)" : "var(--surface-container-highest)",
                    color: selectedCategory === cat ? "white" : "var(--on-surface)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", minWidth: "280px" }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 1.25rem 0.75rem 2.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  backgroundColor: "var(--surface-container-highest)",
                  color: "var(--on-surface)",
                  fontSize: "0.9rem"
                }}
              />
              <span 
                className="material-symbols-outlined" 
                style={{ 
                  position: "absolute", 
                  left: "0.75rem", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  fontSize: "1.25rem", 
                  opacity: 0.5 
                }}
              >
                search
              </span>
            </div>
          </div>

          {/* Featured Post Card (When no category filter or when matching) */}
          {selectedCategory === "All" && !searchQuery && (
            <div style={{ marginBottom: "4rem" }}>
              <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-lifted bg-brand-gradient" style={{ borderRadius: "2.5rem", padding: "3.5rem", color: "white", cursor: "pointer" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
                    <span style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "0.35rem 0.85rem", borderRadius: "0.75rem", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase" }}>
                      Featured Guide
                    </span>
                    <span style={{ fontSize: "0.85rem", opacity: 0.9 }}>{featuredPost.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.15, color: "white" }}>
                    {featuredPost.title}
                  </h2>
                  <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: 1.7, maxWidth: "800px", marginBottom: "2rem", color: "white" }}>
                    {featuredPost.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 800, fontSize: "1rem" }}>
                    Read Complete Guide <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="responsive-grid-3" style={{ gap: "2.5rem" }}>
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-lifted" style={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between", 
                  backgroundColor: "var(--surface-container-lowest)",
                  padding: "2.5rem",
                  borderRadius: "2rem"
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                      <span style={{ 
                        fontSize: "0.75rem", 
                        fontWeight: 800, 
                        color: "var(--primary)", 
                        textTransform: "uppercase", 
                        letterSpacing: "0.05em",
                        backgroundColor: "rgba(178, 172, 136, 0.15)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.5rem"
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>{post.readTime}</span>
                    </div>

                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.3, color: "var(--on-surface)" }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.95rem", opacity: 0.7, lineHeight: 1.6, marginBottom: "2rem" }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid var(--surface-container-low)" }}>
                    <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>{post.date}</span>
                    <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>chevron_right</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 2rem", opacity: 0.6 }}>
              <h3>No articles found matching "{searchQuery}"</h3>
              <p>Try searching for tax deductions, receipts, or gluten features.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding" style={{ backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <div className="card-lifted" style={{ padding: "4rem", borderRadius: "2.5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>
              Scan Receipts & Track Tax Savings
            </h2>
            <p style={{ fontSize: "1.15rem", opacity: 0.8, lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Download Celiac Scanner today to automatically scan ingredient labels, spot hidden gluten, and calculate your IRS or CRA gluten-free tax deductions.
            </p>
            <Link 
              href="https://apps.apple.com/us/app/celiac-scanner/id6761954577" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ padding: "1.25rem 3rem", fontSize: "1.05rem" }}
            >
              Get Celiac Scanner on iOS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
