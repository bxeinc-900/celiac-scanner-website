import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celiac Scanner | AI-Powered Gluten-Free Label Review & Safety",
  description: "The ultimate Celiac Safe Scanner. Use AI to scan ingredient labels for hidden gluten and cross-contact risks. No barcode required. Trusted by clinicians and the Celiac community.",
  keywords: ["celiac scanner", "gluten free app", "gluten free scanner", "celiac safe food", "hidden gluten finder", "ai food scanner", "cross-contamination warning", "gluten free label reader"],
  openGraph: {
    title: "Celiac Scanner | Scan with Confidence. Live Gluten-Free.",
    description: "Instantly verify if products are safe for Celiacs using advanced AI label analysis. Beyond barcodes.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSerif.variable} ${inter.variable}`} style={{ 
        fontFamily: "var(--font-inter), sans-serif",
      }}>
        <style dangerouslySetInnerHTML={{ __html: `
          h1, h2, h3, h4, h5, h6 { font-family: var(--font-dm-serif), serif; }
        `}} />
        {children}
      </body>
    </html>
  );
}
