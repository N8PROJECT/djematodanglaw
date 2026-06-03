"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Menggunakan gsap.context agar animasi mencari ID dengan aman setelah DOM terpasang
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setVisible(false),
      });

      // 1. Monogram raksasa muncul pelan (Fade in)
      tl.to("#preloader-monogram", {
        opacity: 0.04,
        duration: 1,
        ease: "power2.out",
      })
        // 2. Teks D&O naik ke atas
        .to(
          "#preloader-logo",
          { y: 0, duration: 0.8, ease: "power4.out" },
          "-=0.6",
        )
        // 3. Nama lengkap firma nyusul naik (Staggered effect)
        .to(
          "#preloader-subtext",
          { y: 0, duration: 0.8, ease: "power4.out" },
          "-=0.6",
        )
        // 4. Garis aksen jalan dari kiri ke kanan
        .to(
          "#preloader-line",
          { x: 0, duration: 0.8, ease: "power4.inOut" },
          "-=0.4",
        )
        // 5. Seluruh layar Preloader keangkat ke atas (Slide up reveal)
        .to("#preloader", {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.3, // Jeda sebentar biar kebaca
        });
    });

    // 🛡️ SAFETY NET (Penting buat Agensi):
    // Sedikit gua naikin jadi 3.5 detik karena animasinya nambah komponen
    const safetyTimeout = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      ctx.revert(); // Bersihkan memori GSAP biar gak memory leak
      clearTimeout(safetyTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      // Tetep pake custom color class lu (do-burgundy)
      className="fixed inset-0 z-[9999] bg-do-burgundy flex flex-col items-center justify-center overflow-hidden"
    >
      {/* MONOGRAM BACKGROUND (Disembunyikan dlu pakai opacity-0, biar GSAP yang nampilin) */}
      <div
        id="preloader-monogram"
        className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none"
      >
        <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px]">
          <Image
            src="/images/shape/shape-dolw-1c.png"
            alt="Monogram Background"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* LOGO D&O */}
        <div className="overflow-hidden mb-2">
          <h1
            id="preloader-logo"
            // Pake do-terracotta sesuai setup Tailwind lu
            className="font-cormorant text-6xl md:text-7xl text-do-terracotta tracking-widest translate-y-[120%] font-bold"
          >
            D&amp;O
          </h1>
        </div>

        {/* NAMA LENGKAP FIRMA */}
        <div className="overflow-hidden mb-6">
          <p
            id="preloader-subtext"
            className="font-archivo text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] text-[#F0E1CE]/70 uppercase translate-y-[120%]"
          >
            Djemat &amp; Odang Law Firm
          </p>
        </div>

        {/* GARIS LOADING */}
        <div className="w-32 h-[1px] bg-do-terracotta/20 overflow-hidden">
          <div
            id="preloader-line"
            className="w-full h-full bg-do-terracotta -translate-x-full"
          ></div>
        </div>
      </div>
    </div>
  );
}
