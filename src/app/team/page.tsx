"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers, TeamMember } from "@/data/team";

/* =========================================================================
   KOMPONEN KARTU TIM
   ========================================================================= */
const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col items-start bg-white">
      {/* Frame Foto Portrait - Background diubah ke bg-zinc-100 biar nge-blend */}
      <div className="relative w-full aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
        <div className="absolute inset-0 flex items-center justify-center text-[#AC5335]/20 font-cormorant font-bold text-5xl z-0">
          D&amp;O
        </div>

        {!imgError && (
          <Image
            src={member.imagePath || "/images/team/placeholder.jpg"}
            alt={member.name}
            fill
            onError={() => setImgError(true)}
            // FIX: Tambahin mix-blend-multiply
            className="relative z-10 object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
          />
        )}

        <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/10 transition-all duration-500 z-20 pointer-events-none"></div>
      </div>

      {/* Metadata & Bio */}
      <div className="w-full flex flex-col flex-grow">
        <span className="text-[#AC5335] font-archivo font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block">
          {member.role}
        </span>
        <h3 className="font-cormorant text-2xl md:text-3xl text-[#110509] font-bold mb-4 group-hover:text-[#590909] transition-colors">
          {member.name}
        </h3>
        <div className="w-10 h-[1px] bg-[#AC5335] mb-5 transition-all duration-500 group-hover:w-16 opacity-40"></div>

        {/* CONTAINER TEXT ANIMASI (ULTRA SMOOTH) */}
        <div className="relative overflow-hidden w-full mb-4">
          <div
            className="transition-all duration-700 ease-in-out font-archivo font-light text-sm leading-relaxed text-gray-500"
            style={{
              maxHeight: isExpanded ? "600px" : "76px",
            }}
          >
            <p>
              {member.bio ||
                "Experience in handling complex legal matters across various sectors, providing strategic advocacy and precise legal counsel tailored to corporate growth."}
            </p>
          </div>

          {/* Efek Gradasi Memudar (Fade-out) saat teks tertutup rapat */}
          <div
            className={`absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-500 ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* BUTTON TOGGLE SEE MORE / LESS */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto inline-flex items-center text-xs font-archivo font-bold uppercase tracking-widest text-[#110509] hover:text-[#AC5335] transition-colors pt-2 group/btn"
        >
          {isExpanded ? (
            <>
              See Less{" "}
              <span className="ml-2 transform -rotate-90 transition-transform duration-300 text-sm">
                →
              </span>
            </>
          ) : (
            <>
              See More{" "}
              <span className="ml-2 transform rotate-90 transition-transform duration-300 text-sm">
                →
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   HALAMAN UTAMA TEAM
   ========================================================================= */
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER TEAM */}
      <section
        className="relative pt-52 pb-40 px-8 lg:px-12 bg-cover bg-center bg-no-repeat flex items-center min-h-[55vh]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#590909]/95 via-[#110509]/85 to-[#110509]/60 z-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#590909]/20 z-0 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-left">
            <span className="text-[#AC5335] font-archivo font-semibold tracking-[0.25em] uppercase text-xs mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#AC5335]"></span>
              The Professionals
            </span>

            <h1 className="font-cormorant text-4xl md:text-6xl text-[#F0E1CE] font-bold leading-[1.15] mb-6 tracking-wide uppercase">
              Meet the Minds <br />
              Behind Our Success
            </h1>

            <p className="text-sm md:text-base text-[#F0E1CE]/80 font-archivo font-light max-w-xl leading-relaxed">
              Nationally established, internationally recognized. Our
              multidisciplinary team combines decades of jurisprudence with a
              forward-thinking commercial mindset.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM DIRECTORY GRID */}
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
          <div className="text-center mb-24">
            <h2 className="font-cormorant text-4xl md:text-5xl text-[#590909] font-bold uppercase">
              Our Professional Team
            </h2>
            <div className="w-20 h-[2px] bg-[#AC5335] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
