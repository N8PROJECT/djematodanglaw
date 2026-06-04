"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek transparan ke solid saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll layar hp kalau menu mobile lagi aktif/kebuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Firm", href: "/#about" },
    { name: "Practice Areas", href: "/#practice" },
    { name: "Our Team", href: "/#team" },
  ];

  return (
    <>
      {/* INDUK NAV SET KE Z-[100] BIAR SELALU DI ATAS */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? "bg-[#110509] py-4 shadow-2xl" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* ================= LOGO UTAMA ================= */}
          <Link
            href="/"
            className="relative z-[110] flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/logo/D&O-Logo-Main.png"
              alt="D&O Logo"
              width={160}
              height={50}
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-archivo text-xs font-semibold tracking-widest text-[#F0E1CE] uppercase hover:text-[#AC5335] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="border border-[#F0E1CE]/30 px-6 py-2.5 font-archivo text-xs font-bold tracking-widest text-[#F0E1CE] uppercase hover:bg-[#F0E1CE] hover:text-[#110509] transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* ================= MOBILE HAMBURGER TO X BUTTON ================= */}
          <button
            className="lg:hidden relative z-[110] p-2 focus:outline-none text-[#F0E1CE]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="w-6 flex flex-col items-end gap-1.5">
              {/* Garis Atas */}
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"
                }`}
              ></span>
              {/* Garis Tengah */}
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              ></span>
              {/* Garis Bawah */}
              <span
                className={`block h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY MENU (Z-[90]) ================= */}
      <div
        className={`fixed inset-0 bg-[#110509] z-[90] flex flex-col justify-center px-10 transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Background Monogram Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Image
            src="/images/shape/shape-dolw-1c.png"
            alt="Watermark"
            fill
            className="object-contain scale-150"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-8 relative z-10 mt-10">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`transform transition-all duration-500 delay-${index * 100} ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-cormorant text-4xl font-bold text-[#F0E1CE] hover:text-[#AC5335] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            className={`transform transition-all duration-500 delay-500 mt-4 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-[#AC5335] px-8 py-4 font-archivo text-xs font-bold tracking-widest text-white uppercase"
            >
              Contact Us Today
            </Link>
          </li>
        </ul>

        {/* Footer Info Menu Mobile */}
        <div
          className={`absolute bottom-10 left-10 right-10 border-t border-white/10 pt-6 transform transition-all duration-500 delay-700 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-archivo text-[#F0E1CE]/50 text-xs tracking-widest uppercase mb-2">
            Jakarta Office
          </p>
          <a
            href="mailto:info@djematodanglaw.com"
            className="font-archivo text-[#F0E1CE]/80 text-sm"
          >
            info@djematodanglaw.com
          </a>
        </div>
      </div>
    </>
  );
}
