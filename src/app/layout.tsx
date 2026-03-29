import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celiac Scanner | Your High-End Health Concierge",
  description: "A clinical sanctuary for Celiac safety. Precise, sterile, and warm. Download the Celiac Safe Scanner app today.",
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
      <body className={`${manrope.variable} ${inter.variable}`} style={{ 
        fontFamily: "var(--font-inter), sans-serif",
      }}>
        <style dangerouslySetInnerHTML={{ __html: `
          h1, h2, h3, h4, h5, h6 { font-family: var(--font-manrope), sans-serif; }
        `}} />
        {children}
      </body>
    </html>
  );
}
