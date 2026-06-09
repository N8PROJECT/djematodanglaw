import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Definisi Font Resmi D&O
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Djemat & Odang Law Firm",
  description: "Driven by Trust, Oriented to Solutions",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${archivo.variable} font-archivo bg-do-canvas text-do-obsidian antialiased`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
