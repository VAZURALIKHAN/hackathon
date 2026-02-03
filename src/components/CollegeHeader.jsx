import React from "react";

const CollegeHeader = () => {
  return (
    <header className="relative top-0 left-0 z-50 w-full">
      {/* FULL WIDTH GLASS BAR */}
      <div
        className="
          w-full
          bg-black/40
          bg-gradient-to-r from-white/15 to-white/5
          backdrop-blur-xl
          border-b border-white/20
          shadow-xl shadow-black/30
        "
      >
        {/* CONTENT CONTAINER */}
        <div
          className="
            max-w-7xl mx-auto
            px-3 sm:px-4 md:px-8
            py-3 md:py-4
            text-white
            grid grid-cols-[auto_1fr_auto]
            items-center
            gap-3 md:gap-4
          "
        >
          {/* LEFT LOGO */}
          <div className="w-24 sm:w-28 md:w-36 flex justify-start">
            <img
              src="/collegeleft.png"
              alt="St. Joseph College Logo"
              className="h-16 sm:h-20 md:h-28 w-auto object-contain"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="text-center leading-tight overflow-hidden flex flex-col items-center">



            {/* COLLEGE NAME – SINGLE LINE, NO DOTS */}
            <h1
              className="
                text-[11px] xs:text-sm sm:text-lg md:text-3xl
                font-serif font-bold
                tracking-tight sm:tracking-wide
                whitespace-nowrap
                drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)]
              "
            >
              St. Joseph College of Engineering
            </h1>

            {/* AFFILIATION – SINGLE LINE, NO DOTS */}
            <p
              className="
                mt-0.5
                text-[9px] xs:text-[10px] sm:text-xs md:text-sm
                font-medium
                text-white/90
                whitespace-nowrap
              "
            >
              Approved by AICTE · Affiliated to Anna University
            </p>

            {/* UGC */}
            <p className="text-[9px] sm:text-xs md:text-sm font-medium text-white/90">
              Under Section 2(f) & 12(B) of UGC Act 1956
            </p>

            {/* LOCATION */}
            <p className="mt-0.5 text-[8px] sm:text-[10px] md:text-xs font-light text-white/80">
              Sriperumbudur, Chennai, Tamil Nadu
            </p>

            {/* PARTNER LOGOS - ROW BELOW TEXT */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2">
              {[5, 2, 1, 3, 4].map((num) => (
                <div key={num} className="p-1.5 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform">
                  <img src={`/logos/logo${num}.png`} alt={`Partner ${num}`} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT LOGO */}
          <div className="w-24 sm:w-28 md:w-36 flex justify-end">
            <img
              src="/college-right.png"
              alt="Accreditation Logo"
              className="h-16 sm:h-20 md:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
