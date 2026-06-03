"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Hook buat deteksi route aktif

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Dapetin URL sekarang (misal: '/about' atau '/team')

  // Listener untuk mendeteksi pergerakan scroll di browser
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi kecil buat nentuin warna menu aktif vs tidak aktif
  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `transition-colors duration-200 ${
      isActive ? "text-[#AC5335]" : "text-[#F0E1CE]/80 hover:text-[#AC5335]"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#110509]/95 backdrop-blur-md shadow-lg border-b border-[#590909]/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto w-full px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Kiri: Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/Logo/2a_1.png"
            alt="Djemat &amp; Odang Law Firm Logo"
            width={160}
            height={40}
            priority
            className="h-9 w-auto object-contain brightness-110 drop-shadow-sm"
          />
        </Link>

        {/* Kanan: Menu Navigasi + CTA */}
        <div className="hidden md:flex items-center gap-10 font-archivo text-xs font-semibold tracking-wider text-[#F0E1CE] uppercase">
          <div className="flex items-center gap-8 normal-case font-medium text-sm">
            <Link href="/" className={getLinkStyle("/")}>
              Home
            </Link>
            <Link href="/about" className={getLinkStyle("/about")}>
              About Firm
            </Link>
            <Link
              href="/practice-areas"
              className={getLinkStyle("/practice-areas")}
            >
              Practice Areas
            </Link>
            <Link href="/team" className={getLinkStyle("/team")}>
              Our Team
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="border border-[#F0E1CE] text-[#F0E1CE] px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#110509] transition-all duration-300 rounded-none ml-2"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
