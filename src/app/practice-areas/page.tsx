"use client";

import Image from "next/image";
import { practiceAreas } from "@/data/practice-areas";

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================================
          1. HERO BANNER PRACTICE AREAS
          ========================================================================= */}
      <section
        className="relative pt-52 pb-40 px-8 lg:px-12 bg-cover bg-center bg-no-repeat flex items-center min-h-[55vh]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#590909]/95 via-[#110509]/85 to-[#110509]/60 z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#590909]/20 z-0 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-left">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              What We Do
            </span>

            <h1 className="font-cormorant text-4xl md:text-6xl text-[#F0E1CE] font-bold leading-[1.15] mb-6 tracking-wide">
              Comprehensive Legal <br />
              Capabilities &amp; Expertise
            </h1>

            <p className="text-sm md:text-base text-[#F0E1CE]/80 font-archivo font-light max-w-xl leading-relaxed">
              Delivering strategic advocacy and precise legal counsel across the
              global regulatory and commercial landscape. We navigate complexity
              so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRACTICE AREAS GRID SECTION
          ========================================================================= */}
      <section className="py-28 px-6 lg:px-12 bg-white relative">
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0"
          style={{
            backgroundImage: "url('/images/Shape/shape-dolw-1d.png')",
            backgroundSize: "80px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-cormorant text-4xl md:text-5xl text-[#590909] font-bold">
              Our Specializations
            </h2>
            <div className="w-20 h-[2px] bg-[#AC5335] mx-auto mt-6"></div>
            <p className="mt-6 text-gray-500 font-archivo font-light max-w-2xl mx-auto">
              From high-stakes commercial litigation to complex cross-border
              M&A, our specialized practice groups are tailored to safeguard
              your most critical business assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="relative bg-white text-[#110509] p-10 rounded-sm group hover:-translate-y-2 transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-2xl flex flex-col min-h-[360px] overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#F0E1CE]/30 rounded-full group-hover:scale-[2.5] transition-transform duration-700 ease-out z-0"></div>

                <div className="relative z-10 w-14 h-14 rounded-full bg-[#AC5335]/10 flex items-center justify-center mb-8 text-[#AC5335] group-hover:bg-[#AC5335] group-hover:text-white transition-colors duration-500">
                  <svg
                    className="w-7 h-7"
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

                <h3 className="relative z-10 font-cormorant text-2xl font-bold mb-4 group-hover:text-[#590909] transition-colors">
                  {area.title}
                </h3>
                <p className="relative z-10 text-gray-500 font-archivo font-light text-sm leading-relaxed mb-8 flex-grow">
                  {area.description}
                </p>

                {/* 🛠️ REVISED: Direct to Dynamic WhatsApp Link */}
                <div className="relative z-10 mt-auto pt-4 border-t border-gray-100 group-hover:border-[#F0E1CE] transition-colors">
                  <a
                    href={`https://wa.me/6281234567890?text=Hello%20D%26O%20Law%20Firm,%20I%20am%20interested%20in%20consulting%20regarding%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-archivo font-bold uppercase tracking-widest text-[#110509] hover:text-[#AC5335] transition-colors"
                  >
                    Consult via WhatsApp{" "}
                    <span className="ml-2 text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
