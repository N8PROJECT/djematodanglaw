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

      tl.to("#preloader-image-container", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      })
        // Efek nafas (pulse) tipis-tipis di logonya pas nunggu
        .to(
          "#preloader-logo-img",
          {
            scale: 1.05,
            opacity: 0.8,
            duration: 1,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut",
          },
          "-=0.2",
        )
        .to("#preloader", {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.2, // Jeda sebentar biar logonya kebaca
        });
    });

    // 🛡️ SAFETY NET (Penting buat Agensi):
    // Paksa preloader hilang dalam 3.5 detik.
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
      // Warna burgundy korporat sesuai request referensi
      className="fixed inset-0 z-[9999] bg-[#590909] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* CONTAINER LOGO yang bakal di-reveal (Disembunyikan dlu pakai y-full, opacity-0) */}
      <div
        id="preloader-image-container"
        className="relative z-10 flex flex-col items-center translate-y-20 opacity-0"
      >
        <div
          id="preloader-logo-img"
          className="relative w-64 h-32 md:w-80 md:h-40"
        >
          {/* MANGGIL LOGO FULL (COMBINED) */}
          <Image
            // ⚠️ Pastiin file ini ada di public/images/logo/
            src="/images/logo/2a_1.png"
            alt="D&O Djemat & Odang Law Firm Full Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
