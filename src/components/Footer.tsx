import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative text-[#F0E1CE] pt-24 pb-8 px-6 lg:px-12 overflow-hidden"
    >
      {/* =========================================================================
          1. BACKGROUND GRADIENT (Gradasi Halus dari Hitam ke Burgundy Gelap)
          ========================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#110509] via-[#110509] to-[#590909] opacity-90 z-0"></div>

      {/* =========================================================================
          2. MONOGRAM WATERMARK (Taste Shape 1c untuk ngisi space kanan)
          ========================================================================= */}
      <div className="absolute -right-20 -top-20 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.06] pointer-events-none z-0">
        <Image
          src="/images/shape/shape-dolw-1c.png"
          alt="D&O Watermark"
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* =========================================================================
            3. CTA Top Banner
            ========================================================================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 pb-12 border-b border-white/10 gap-8 relative z-10">
          {/* 🛠️ FIX: CTA text center di HP */}
          <div className="max-w-2xl relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-4 tracking-wide text-white uppercase">
              Secure Your Corporate Growth
            </h2>
            <p className="font-archivo font-light text-[#F0E1CE]/70 text-lg">
              Reach out to our partners for a private, tailored legal
              consultation.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#AC5335] text-white px-8 py-4 text-xs font-archivo font-bold tracking-widest uppercase rounded-sm hover:bg-[#F0E1CE] hover:text-[#590909] active:scale-95 transition-all duration-300 shadow-xl"
          >
            <span>CONTACT US TODAY</span>
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        {/* =========================================================================
            4. MIDDLE SECTION: FOOTER LINKS & INFO
            ========================================================================= */}
        {/* 🛠️ FIX: Main grid container dibikin text-center di HP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 text-center md:text-left">
          {/* Column 1: Brand Info */}
          {/* 🛠️ FIX: items-center di HP */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 flex justify-center md:justify-start w-full">
              <Image
                src="/images/logo/1a_1.png"
                alt="D&O Djemat & Odang Law Firm Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            <a
              href="#"
              className="font-archivo font-semibold text-[#AC5335] text-sm hover:text-white transition-colors"
            >
              @djematodanglaw
            </a>
          </div>

          {/* Column 2: Jakarta Office */}
          {/* 🛠️ FIX: items-center di HP */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-archivo font-bold text-[#AC5335] text-[10px] tracking-[0.2em] uppercase mb-6">
              Jakarta Office
            </h4>
            <p className="font-archivo font-light text-[#F0E1CE]/80 text-sm leading-relaxed">
              Indonesia Stock Exchange, <br />
              Tower 2, 17th Floor <br />
              Jl. Jend. Sudirman Kav 52-53, <br />
              Jakarta Selatan, 12190 <br />
              Indonesia
            </p>
          </div>

          {/* Column 3: Inquiries & Affiliates */}
          {/* 🛠️ FIX: items-center di HP */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-archivo font-bold text-[#AC5335] text-[10px] tracking-[0.2em] uppercase mb-6">
              Inquiries
            </h4>
            <div className="flex flex-col items-center md:items-start gap-2 mb-10">
              <a
                href="mailto:info@djematodanglaw.com"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors"
              >
                info@djematodanglaw.com
              </a>
              <a
                href="https://www.djematodanglaw.com"
                target="_blank"
                rel="noreferrer"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors"
              >
                www.djematodanglaw.com
              </a>
            </div>

            <h4 className="font-archivo font-bold text-[#AC5335] text-[10px] tracking-[0.2em] uppercase mb-6">
              Affiliates
            </h4>
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-archivo font-light text-[#F0E1CE]/80 text-sm">
                Deka Legal
              </span>
              <span className="font-archivo font-light text-[#F0E1CE]/80 text-sm">
                Deka Legal Yogyakarta
              </span>
            </div>
          </div>

          {/* Column 4: Explore */}
          {/* 🛠️ FIX: items-center di HP */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-archivo font-bold text-[#AC5335] text-[10px] tracking-[0.2em] uppercase mb-6">
              Explore
            </h4>
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link
                href="/"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors w-fit text-center md:text-left"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors w-fit text-center md:text-left"
              >
                About Firm
              </Link>
              <Link
                href="/practice-areas"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors w-fit text-center md:text-left"
              >
                Practice Areas
              </Link>
              <Link
                href="/team"
                className="font-archivo font-light text-[#F0E1CE]/80 text-sm hover:text-[#AC5335] transition-colors w-fit text-center md:text-left"
              >
                Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. BOTTOM SECTION: COPYRIGHT
            ========================================================================= */}
        <div className="flex flex-col justify-center items-center pt-8 border-t border-white/5 gap-4 text-center">
          <p className="font-archivo font-light text-[#F0E1CE]/40 text-xs">
            © {new Date().getFullYear()} Djemat &amp; Odang Law Firm. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
