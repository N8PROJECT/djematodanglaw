"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Menggunakan gsap.context agar animasi mencari ID dengan aman setelah DOM terpasang
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setVisible(false),
      });

      tl.to("#preloader-logo", { y: 0, duration: 0.8, ease: "power4.out" })
        .to(
          "#preloader-line",
          { x: 0, duration: 0.8, ease: "power4.inOut" },
          "-=0.4",
        )
        .to("#preloader", {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.2,
        });
    });

    // 🛡️ SAFETY NET (Penting buat Agensi):
    // Jika GSAP gagal atau macet karena masalah jaringan/IP, paksa preloader hilang dalam 3 detik.
    // Jadi website lu gak akan pernah kesandera layar merah selamanya.
    const safetyTimeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      ctx.revert(); // Bersihkan memori GSAP biar gak memory leak
      clearTimeout(safetyTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] bg-do-burgundy flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden">
        <h1
          id="preloader-logo"
          className="font-cormorant text-5xl md:text-6xl text-do-terracotta tracking-widest translate-y-full font-bold"
        >
          D&amp;O
        </h1>
      </div>
      <div className="w-40 h-[1px] bg-do-terracotta/20 mt-6 overflow-hidden">
        <div
          id="preloader-line"
          className="w-full h-full bg-do-terracotta -translate-x-full"
        ></div>
      </div>
    </div>
  );
}
