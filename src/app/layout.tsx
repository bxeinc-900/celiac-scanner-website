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
  title: "Celiac Scanner | Scan with Confidence. Live Gluten-Free.",
  description: "Official Celiac barcode scanner and gluten-free ingredient checker. Stop guessing with 'Natural Flavors'. Access 30+ authoritative sources.",
  keywords: ["Celiac barcode scanner", "Gluten-free ingredient checker", "Hidden gluten app", "gluten-free diet", "celiac disease safety"],
  openGraph: {
    title: "Celiac Scanner | Your Digital Guardian",
    description: "Your Clinical Sanctuary for Celiac safety. Precise, sterile, and warm.",
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
