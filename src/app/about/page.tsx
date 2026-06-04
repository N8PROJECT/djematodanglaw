"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
  // State untuk melacak section mana yang sedang aktif di layar
  const [activeSection, setActiveSection] = useState("who-we-are");

  // Efek scroll spy untuk mendeteksi posisi membaca user
  useEffect(() => {
    const handleScroll = () => {
      const whoWeAreEl = document.getElementById("who-we-are");
      const visionMissionEl = document.getElementById("vision-mission");

      if (!whoWeAreEl || !visionMissionEl) return;

      // Ambil posisi scroll saat ini ditambah offset tinggi navbar + subnav (sekitar 160px)
      const scrollPosition = window.scrollY + 160;

      // Jika posisi scroll sudah melewati batas atas section vision-mission
      if (scrollPosition >= visionMissionEl.offsetTop) {
        setActiveSection("vision-mission");
      } else {
        setActiveSection("who-we-are");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================================
          1. HERO BANNER ABOUT (IMAGE + BURGUNDY GRADIENT OVERLAY)
          ========================================================================= */}
      <section
        className="relative pt-52 pb-40 px-8 lg:px-12 bg-cover bg-center bg-no-repeat flex items-center min-h-[55vh]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay Gradasi Estetik */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#590909]/95 via-[#110509]/80 to-[#110509]/50 z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#590909]/20 z-0 mix-blend-overlay"></div>

        {/* Konten Hero Rata Kiri (Button Download Sudah Dihapus) */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-left">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              About Us
            </span>

            <h1 className="font-cormorant text-4xl md:text-6xl text-[#F0E1CE] font-bold leading-[1.15] mb-6 tracking-wide uppercase">
              Get to Know More About <br />
              Djemat &amp; Odang Law Firm
            </h1>

            <p className="text-sm md:text-base text-[#F0E1CE]/80 font-archivo font-light max-w-xl leading-relaxed">
              Driven by Trust, Oriented to Solutions. Explore our core
              foundational values, long-term visions, and strategic advocacy
              blueprints.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. HORIZONTAL SUB-NAVIGATION TABS (DYNAMIC SCROLL SPY)
          ========================================================================= */}
      <div className="border-b border-gray-100 bg-white sticky top-[72px] z-40 hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex gap-12 font-archivo text-xs font-semibold uppercase tracking-wider">
            {/* Tab: Who We Are */}
            <a
              href="#who-we-are"
              className={`py-5 border-b-2 transition-all duration-300 ${
                activeSection === "who-we-are"
                  ? "border-[#AC5335] text-[#590909]"
                  : "border-transparent text-gray-400 hover:text-[#590909]"
              }`}
            >
              Who we are
            </a>

            {/* Tab: Our Vision & Mission */}
            <a
              href="#vision-mission"
              className={`py-5 border-b-2 transition-all duration-300 ${
                activeSection === "vision-mission"
                  ? "border-[#AC5335] text-[#590909]"
                  : "border-transparent text-gray-400 hover:text-[#590909]"
              }`}
            >
              Our Vision &amp; Mission
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. SECTION: WHO WE ARE (WHITE BACKGROUND)
          ========================================================================= */}
      <section
        id="who-we-are"
        className="py-28 px-6 lg:px-12 bg-white relative scroll-mt-36"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          {/* Kolom Kiri */}
          <div className="w-full md:w-1/3">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-3 block">
              THIS IS D&amp;O
            </span>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-[#110509] font-bold leading-tight uppercase">
              Corporate Overview
            </h2>
            <div className="w-12 h-[2px] bg-[#AC5335] mt-6"></div>
          </div>

          {/* Kolom Kanan */}
          <div className="w-full md:w-2/3 space-y-8 text-gray-600 font-archivo font-light text-base md:text-lg leading-relaxed max-w-2xl">
            <p className="text-2xl font-cormorant text-[#590909] font-medium leading-snug tracking-wide">
              Djemat &amp; Odang Law Firm is a Jakarta-based law firm committed
              to delivering practical and reliable legal services.
            </p>
            <p>
              Guided by its principle,{" "}
              <span className="font-semibold text-[#110509]">
                &quot;Driven by Trust, Oriented to Solutions,&quot;
              </span>{" "}
              Djemat &amp; Odang Law Firm advises clients across a broad range
              of legal matters, including corporate and commercial law,
              litigation and dispute resolution, mergers and acquisitions,
              employment law, regulatory compliance, licensing and permits, land
              and property matters, as well as corporate restructuring.
            </p>
            <p>
              Supported by a team of dedicated lawyers, Djemat &amp; Odang Law
              Firm adopts a client-oriented approach, providing responsive legal
              assistance and tailored solutions suited to each client&apos;s
              specific needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION: VISION & MISSION (WHITE BACKGROUND)
          ========================================================================= */}
      <section
        id="vision-mission"
        className="py-28 px-6 lg:px-12 bg-white relative border-t border-gray-100 scroll-mt-36 pb-36"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Sisi Kiri: Vision */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.2em] uppercase text-xs flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              OUR VISION
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-[#590909] font-bold leading-tight tracking-wide">
              To become a trusted and reliable law firm recognized for
              delivering practical, solution-oriented legal services.
            </h2>
            <p className="font-archivo font-light text-base md:text-lg text-gray-500 italic pl-4 border-l border-[#AC5335]/40">
              ...with professionalism, integrity, and a strong commitment to
              client success.
            </p>
          </div>

          {/* Sisi Kanan: 5 Misi Resmi */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.2em] uppercase text-xs flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              OUR MISSION
            </span>

            <ul className="space-y-10">
              <li className="flex items-start gap-6 group">
                <span className="font-cormorant text-3xl font-bold text-[#AC5335] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  01
                </span>
                <p className="font-archivo font-light text-base md:text-lg text-gray-600 leading-relaxed">
                  To provide strategic and commercially minded legal solutions
                  tailored to each client&apos;s needs.
                </p>
              </li>
              <li className="flex items-start gap-6 group">
                <span className="font-cormorant text-3xl font-bold text-[#AC5335] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  02
                </span>
                <p className="font-archivo font-light text-base md:text-lg text-gray-600 leading-relaxed">
                  To build long-term relationships through trust,
                  professionalism, and responsiveness.
                </p>
              </li>
              <li className="flex items-start gap-6 group">
                <span className="font-cormorant text-3xl font-bold text-[#AC5335] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  03
                </span>
                <p className="font-archivo font-light text-base md:text-lg text-gray-600 leading-relaxed">
                  To uphold the highest standards of ethics, integrity, and
                  legal excellence in every matter we handle.
                </p>
              </li>
              <li className="flex items-start gap-6 group">
                <span className="font-cormorant text-3xl font-bold text-[#AC5335] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  04
                </span>
                <p className="font-archivo font-light text-base md:text-lg text-gray-600 leading-relaxed">
                  To support businesses and individuals in navigating legal
                  challenges with clarity and confidence.
                </p>
              </li>
              <li className="flex items-start gap-6 group">
                <span className="font-cormorant text-3xl font-bold text-[#AC5335] leading-none transition-transform duration-300 group-hover:translate-x-1">
                  05
                </span>
                <p className="font-archivo font-light text-base md:text-lg text-gray-600 leading-relaxed">
                  To continuously develop a dynamic legal practice that is
                  adaptive to the evolving business and regulatory landscape.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
