import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blogPosts";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | Celiac Scanner",
    };
  }
  return {
    title: `${post.title} | Celiac Scanner Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Celiac Scanner",
      "url": "https://celiacscanner.com",
    },
  };

  return (
    <main style={{ backgroundColor: "var(--surface)", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Article Header */}
      <section className="section-padding" style={{ paddingTop: "12rem", backgroundColor: "var(--surface-container-low)" }}>
        <div className="container" style={{ maxWidth: "850px" }}>
          
          <Link href="/blog" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            fontSize: "0.9rem", 
            fontWeight: 700, 
            color: "var(--primary)",
            marginBottom: "2rem",
            textDecoration: "none"
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>arrow_back</span> Back to Blog
          </Link>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ 
              fontSize: "0.75rem", 
              fontWeight: 800, 
              color: "var(--primary)", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              backgroundColor: "rgba(178, 172, 136, 0.2)",
              padding: "0.35rem 0.85rem",
              borderRadius: "0.5rem"
            }}>
              {post.category}
            </span>
            <span style={{ fontSize: "0.875rem", opacity: 0.7 }}>{post.date}</span>
            <span style={{ fontSize: "0.875rem", opacity: 0.7 }}>•</span>
            <span style={{ fontSize: "0.875rem", opacity: 0.7 }}>{post.readTime}</span>
          </div>

          <h1 style={{ 
            fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)", 
            fontWeight: 800, 
            lineHeight: 1.15, 
            marginBottom: "2rem",
            color: "var(--on-surface)",
            letterSpacing: "-0.03em"
          }}>
            {post.title}
          </h1>

          <p style={{ 
            fontSize: "1.3rem", 
            lineHeight: "1.7", 
            opacity: 0.85, 
            fontWeight: 500,
            borderLeft: "4px solid var(--primary)",
            paddingLeft: "1.5rem"
          }}>
            {post.excerpt}
          </p>

        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "850px" }}>
          
          <div style={{ fontSize: "1.15rem", lineHeight: "1.8", opacity: 0.9 }}>
            <p style={{ marginBottom: "2.5rem", fontSize: "1.2rem" }}>
              {post.content.introduction}
            </p>

            {/* Key Takeaways Box */}
            {post.content.takeaways && post.content.takeaways.length > 0 && (
              <div className="card-lifted" style={{ 
                backgroundColor: "var(--surface-container-highest)", 
                padding: "2.5rem", 
                borderRadius: "1.75rem", 
                marginBottom: "3rem",
                borderLeft: "4px solid var(--primary)"
              }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="material-symbols-outlined" style={{ color: "var(--primary)" }}>lightbulb</span> Key Takeaways
                </h3>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {post.content.takeaways.map((item, index) => (
                    <li key={index} style={{ fontWeight: 600, fontSize: "1.05rem" }}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {post.content.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: "3rem" }}>
                <h2 style={{ 
                  fontSize: "2rem", 
                  fontWeight: 800, 
                  marginBottom: "1.25rem", 
                  color: "var(--on-surface)",
                  lineHeight: 1.25
                }}>
                  {sec.heading}
                </h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  {sec.body}
                </p>
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul style={{ 
                    backgroundColor: "var(--surface-container-low)", 
                    padding: "2rem 2rem 2rem 3rem", 
                    borderRadius: "1.5rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "1rem",
                    marginBottom: "1.5rem"
                  }}>
                    {sec.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} style={{ fontSize: "1.05rem" }}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Download Banner Card */}
          <div className="card-lifted bg-brand-gradient" style={{ 
            padding: "3.5rem", 
            borderRadius: "2.5rem", 
            color: "white", 
            marginTop: "5rem",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "1.25rem", color: "white" }}>
              Start Scanning Receipts & Saving on Taxes
            </h3>
            <p style={{ fontSize: "1.15rem", opacity: 0.9, marginBottom: "2.5rem", color: "white", maxWidth: "650px", margin: "0 auto 2.5rem auto" }}>
              Try Celiac Scanner for free. Auto-detect hidden gluten, find safe restaurants, and compute US (IRS) & Canada (CRA) tax deductions effortlessly.
            </p>
            <Link 
              href="https://apps.apple.com/us/app/celiac-scanner/id6761954577" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ padding: "1.25rem 3rem", fontSize: "1.05rem", border: "2px solid rgba(255,255,255,0.3)" }}
            >
              Download Celiac Scanner
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
