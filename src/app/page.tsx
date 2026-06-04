"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "../data/practice-areas";
import { teamMembers } from "../data/team";

export default function Home() {
  const partners = teamMembers.slice(0, 2);

  // Row 1 untuk jalan ke kiri
  const row1Logos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
  ];

  // Row 2 untuk jalan ke kanan
  const row2Logos = [
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
  ];

  // Badge/Pill untuk klien yang cuma teks
  const textClients = [
    "PT. Griya Sira Indah",
    "PT. 1010 Indonesia",
    "PT. Raket Berkah Indonesia",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section
        className="relative pt-40 pb-36 px-8 lg:px-12 bg-cover bg-center bg-no-repeat flex items-center min-h-[80vh]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#590909]/95 via-[#110509]/80 to-transparent z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#110509]/40 z-0"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-left mt-10 md:mt-0">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-3 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              DJEMAT &amp; ODANG LAW FIRM
            </span>

            <h1 className="font-cormorant text-5xl md:text-7xl text-[#F0E1CE] font-bold leading-[1.15] mb-4 tracking-wide uppercase">
              Driven by Trust, <br />
              Oriented to{" "}
              <span className="italic text-[#AC5335]">Solutions.</span>
            </h1>

            <p className="text-sm text-[#F0E1CE]/80 font-archivo font-light max-w-xl leading-relaxed">
              A Jakarta-based law firm committed to delivering practical and
              commercially minded legal services. We navigate your legal
              challenges with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. 4 PILLARS SECTION 
          ========================================================================= */}
      <section className="relative -mt-20 z-20 px-8 lg:px-12 max-w-7xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl">
          <div className="bg-white p-6 lg:p-8 border-r border-gray-100 flex flex-col justify-start">
            <span className="text-[#AC5335] font-archivo font-bold text-[10px] tracking-widest uppercase mb-2 block">
              OUR COMMITMENT
            </span>
            <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-[#110509] mb-3">
              Long-Term Trust
            </h3>
            <p className="font-archivo font-light text-xs lg:text-sm text-gray-500 leading-relaxed">
              Building enduring relationships through unwavering professionalism
              and responsive legal assistance.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 border-r border-gray-100 flex flex-col justify-start">
            <span className="text-[#AC5335] font-archivo font-bold text-[10px] tracking-widest uppercase mb-2 block">
              OUR APPROACH
            </span>
            <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-[#110509] mb-3">
              Strategic Precision
            </h3>
            <p className="font-archivo font-light text-xs lg:text-sm text-gray-500 leading-relaxed">
              Providing commercially minded legal solutions meticulously
              tailored to each client&apos;s specific needs.
            </p>
          </div>

          <div className="bg-[#AC5335] p-6 lg:p-8 flex flex-col justify-start">
            <span className="text-white/80 font-archivo font-bold text-[10px] tracking-widest uppercase mb-2 block">
              OUR FOUNDATION
            </span>
            <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-white mb-3">
              Uncompromising Integrity
            </h3>
            <p className="font-archivo font-light text-xs lg:text-sm text-white/90 leading-relaxed">
              Upholding the highest standards of ethics and legal excellence in
              every single matter we handle.
            </p>
          </div>

          <div className="bg-white p-6 lg:p-8 flex flex-col justify-start">
            <span className="text-[#AC5335] font-archivo font-bold text-[10px] tracking-widest uppercase mb-2 block">
              OUR EXPERTISE
            </span>
            <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-[#110509] mb-3">
              Adaptive Practice
            </h3>
            <p className="font-archivo font-light text-xs lg:text-sm text-gray-500 leading-relaxed">
              Continuously developing a dynamic approach to navigate the
              ever-evolving business and regulatory landscape.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR PROFILE SECTION 
          ========================================================================= */}
      <section className="py-24 px-8 lg:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 bg-gray-100 shadow-2xl overflow-hidden rounded-sm">
              <Image
                src="/images/team/full-team.jpeg"
                alt="Djemat & Odang Law Firm Team"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F0E1CE]/40 -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-[0.04] pointer-events-none z-0"
              style={{
                backgroundImage: "url('/images/shape/shape-dolw-1c.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="relative z-10">
              <span className="text-[#AC5335] font-archivo font-bold text-xs tracking-[0.25em] uppercase block mb-4">
                Our Profile
              </span>

              <h2 className="font-cormorant text-4xl lg:text-5xl text-[#110509] font-bold leading-[1.15] mb-8 uppercase">
                Delivering Practical &amp; <br />
                Reliable Legal Solutions
              </h2>

              <div className="space-y-6 font-archivo font-light text-gray-600 leading-relaxed text-sm lg:text-base">
                <p>
                  <strong className="font-semibold text-[#110509]">
                    Djemat &amp; Odang Law Firm
                  </strong>{" "}
                  is a Jakarta-based law firm committed to delivering practical
                  and reliable legal services. We advise clients across a broad
                  range of legal matters, including corporate and commercial
                  law, litigation and dispute resolution, mergers and
                  acquisitions, and regulatory compliance.
                </p>
                <p>
                  Supported by a team of dedicated lawyers, we adopt a
                  client-oriented approach, providing responsive legal
                  assistance and tailored solutions perfectly suited to each
                  client&apos;s specific needs and objectives.
                </p>
              </div>

              <div className="mt-10 border-l-4 border-[#AC5335] bg-[#F0E1CE]/20 py-4 pl-6 pr-4">
                <p className="font-cormorant italic text-xl lg:text-2xl text-[#590909] leading-snug">
                  &quot;Guided by our principle: Driven by Trust, Oriented to
                  Solutions—with absolute professionalism, integrity, and a
                  strong commitment to client success.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PRACTICE AREAS (STATIC 4 CARDS)
          ========================================================================= */}
      <section
        id="practice"
        className="py-28 px-6 lg:px-12 bg-[#F0E1CE] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none z-0"
          style={{
            backgroundImage: "url('/images/Pattern/pattern-dolw-b.png')",
            backgroundSize: "200%",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden xl:block w-40 h-auto z-0">
          <Image
            src="/images/Shape/shape-dolw-1d.png"
            alt=""
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden xl:block w-40 h-auto z-0">
          <Image
            src="/images/Shape/shape-dolw-1d.png"
            alt=""
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-16 text-left">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              WHAT WE DO
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-[#590909] font-bold uppercase">
              Our Practice Areas
            </h2>
          </div>

          <div className="-mx-6 px-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {practiceAreas.slice(0, 4).map((area, index) => (
                <div
                  key={`first-${index}`}
                  className="relative bg-white text-[#110509] p-8 rounded-sm group hover:-translate-y-1 transition-transform duration-300 border border-gray-100 shadow-sm flex flex-col min-h-[340px]"
                >
                  <Link
                    href="/practice-areas"
                    className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-14 h-14 bg-white rounded-full flex items-center justify-center border-[6px] border-[#F0E1CE] z-20 shadow-sm text-gray-400 group-hover:bg-[#AC5335] group-hover:text-white transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17L17 7M17 7H7M17 7V17"
                      ></path>
                    </svg>
                  </Link>

                  <div className="w-12 h-12 rounded-full bg-[#AC5335]/10 flex items-center justify-center mb-6 text-[#AC5335]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d={area.iconPath}
                      ></path>
                    </svg>
                  </div>

                  <h3 className="font-cormorant text-xl font-bold mb-3">
                    {area.title}
                  </h3>

                  <p className="text-gray-500 font-archivo font-light text-sm leading-relaxed pr-2">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 relative z-20">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-3 bg-[#590909] text-[#F0E1CE] px-8 py-4 text-xs font-archivo font-semibold tracking-widest uppercase rounded-sm hover:bg-[#AC5335] hover:text-white active:scale-95 transition-all duration-300 shadow-lg"
            >
              <span>See All Practice Areas</span>
              <svg
                className="w-4 h-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FOUNDING PARTNERS SECTION (CIRCULAR ZIG-ZAG DENGAN SOCIAL ICONS)
          ========================================================================= */}
      <section
        id="team"
        className="py-32 px-6 lg:px-12 bg-white relative overflow-hidden"
      >
        {/* Subtle Background Monogram */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none z-0"
          style={{
            backgroundImage: "url('/images/Logo/D&O-Monogram.png')",
            backgroundSize: "600px",
            backgroundRepeat: "space",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-32">
            {/* ================= PARTNER 1 (Othman) ================= */}
            {partners[0] && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                {/* Teks Kiri */}
                <div className="w-full md:w-5/12 text-center md:text-left">
                  <h3 className="font-cormorant text-4xl md:text-5xl text-[#110509] font-bold mb-2">
                    {partners[0].name.split(",")[0]}
                  </h3>
                  <span className="text-[#AC5335] font-archivo font-semibold text-xs tracking-[0.2em] uppercase mb-6 block">
                    {partners[0].role}
                  </span>
                  <p className="text-gray-500 font-archivo font-light leading-relaxed text-base">
                    {partners[0].bio}
                  </p>
                </div>

                {/* Bulatan Foto Kanan */}
                <div className="w-full md:w-6/12 flex justify-center relative">
                  <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] bg-zinc-100 rounded-full overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-[#AC5335]/20 font-cormorant font-bold text-4xl z-0">
                      D&amp;O
                    </div>
                    {/* 🛠️ FIX: object-top + scale-110 + translate-y-6 buat nurunin badan ke bawah */}
                    <Image
                      src={
                        partners[0].imagePath || "/images/team/placeholder.jpg"
                      }
                      alt={partners[0].name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      // FIX: translate-y dikurangin jadi 2, scale dinaikin jadi 115 biar rapet atasnya
                      className="relative z-10 object-cover object-top scale-[1.15] translate-y-2"
                    />
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 md:top-8 md:right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0A66C2] shadow-xl hover:scale-110 transition-transform cursor-pointer border border-gray-100"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 left-0 md:bottom-12 md:left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#E1306C] shadow-lg hover:scale-110 transition-transform cursor-pointer border border-gray-100"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.965 6.206-.058 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.76 6.78 6.206 6.965 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.76 6.965-6.206.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.778-6.782-6.206-6.965-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* ================= PARTNER 2 (Andhika) ================= */}
            {partners[1] && (
              <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
                {/* Teks Kanan */}
                <div className="w-full md:w-5/12 text-center md:text-left">
                  <h3 className="font-cormorant text-4xl md:text-5xl text-[#110509] font-bold mb-2">
                    {partners[1].name.split(" S.H.")[0]}
                  </h3>
                  <span className="text-[#AC5335] font-archivo font-semibold text-xs tracking-[0.2em] uppercase mb-6 block">
                    {partners[1].role}
                  </span>
                  <p className="text-gray-500 font-archivo font-light leading-relaxed text-base">
                    {partners[1].bio}
                  </p>
                </div>

                {/* Bulatan Foto Kiri */}
                <div className="w-full md:w-6/12 flex justify-center relative">
                  <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] bg-zinc-100 rounded-full overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-[#AC5335]/20 font-cormorant font-bold text-4xl z-0">
                      D&amp;O
                    </div>
                    {/* 🛠️ FIX: object-top + scale-110 + translate-y-6 buat nurunin badan ke bawah */}
                    <Image
                      src={
                        partners[1].imagePath || "/images/team/placeholder.jpg"
                      }
                      alt={partners[1].name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      // FIX: translate-y dikurangin jadi 2, scale dinaikin jadi 115 biar rapet atasnya
                      className="relative z-10 object-cover object-top scale-[1.15] translate-y-2"
                    />
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 left-4 md:top-8 md:left-8 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0A66C2] shadow-xl hover:scale-110 transition-transform cursor-pointer border border-gray-100"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-6 right-0 md:bottom-12 md:right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#E1306C] shadow-lg hover:scale-110 transition-transform cursor-pointer border border-gray-100"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.965 6.206-.058 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 1.76 6.78 6.206 6.965 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.76 6.965-6.206.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-1.778-6.782-6.206-6.965-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR CLIENTS SECTION (INFINITE MARQUEE)
          ========================================================================= */}
      <section className="relative w-full py-28 overflow-hidden border-t border-gray-100 bg-white">
        {/* INJECT CUSTOM CSS FOR MARQUEE ANIMATION */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-left { display: flex; width: max-content; animation: scroll-left 40s linear infinite; }
        .animate-marquee-right { display: flex; width: max-content; animation: scroll-right 40s linear infinite; }
        .animate-marquee-left:hover, .animate-marquee-right:hover { animation-play-state: paused; }
      `,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center relative z-10 flex flex-col items-center">
          <span className="text-[#AC5335] font-archivo font-bold text-[10px] md:text-xs tracking-[0.25em] uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-8 md:w-16 h-[1px] bg-[#AC5335]"></span>
            TRUSTED BY
            <span className="w-8 md:w-16 h-[1px] bg-[#AC5335]"></span>
          </span>
          {/* <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-[#110509]">
            List of Clients Previously Handled
          </h2> */}
        </div>

        <div className="relative z-10 flex flex-col gap-12">
          {/* =========================================================================
            ROW 1: BERJALAN KE KIRI
            ========================================================================= */}
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-marquee-left">
              {[...Array(2)].map((_, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex items-center gap-12 md:gap-20 px-6 md:px-10"
                >
                  {/* 2. KITA LOOPING ARRAY ROW 1 DI SINI */}
                  {row1Logos.map((fileName, index) => (
                    <div
                      key={`logo-r1-${index}`}
                      className="relative h-16 w-32 md:h-20 md:w-40 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <Image
                        src={`/images/clients/${fileName}`} // Manggil nama file dinamis dari array
                        alt={`Client ${fileName}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
            ROW 2: BERJALAN KE KANAN
            ========================================================================= */}
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-marquee-right">
              {[...Array(2)].map((_, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex items-center gap-12 md:gap-20 px-6 md:px-10"
                >
                  {/* 3. KITA LOOPING ARRAY ROW 2 DI SINI */}
                  {row2Logos.map((fileName, index) => (
                    <div
                      key={`logo-r2-${index}`}
                      className="relative h-16 w-32 md:h-20 md:w-40 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <Image
                        src={`/images/clients/${fileName}`}
                        alt={`Client ${fileName}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}

                  {/* 4. KITA LOOPING TEKS BADGE/PILL DI SINI */}
                  {textClients.map((clientName, index) => (
                    <div
                      key={`text-client-${index}`}
                      className="px-8 py-3 border border-gray-300 rounded-[40px] opacity-60 hover:opacity-100 hover:border-[#110509] transition-all duration-300 cursor-pointer flex-shrink-0"
                    >
                      <span className="font-archivo font-medium text-[#110509] text-sm md:text-base whitespace-nowrap">
                        {clientName}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
