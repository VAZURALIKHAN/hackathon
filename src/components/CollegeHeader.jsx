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
            px-4 py-3
            text-white
            flex flex-col md:grid md:grid-cols-[auto_1fr_auto]
            items-center
            gap-4
          "
        >
          {/* MOBILE ONLY: Top Row with Logos */}
          <div className="flex w-full justify-between items-center md:hidden mb-1">
            <img
              src={`${import.meta.env.BASE_URL}collegeleft.png`}
              alt="St. Joseph College Logo"
              className="h-14 w-auto object-contain"
            />
            <img
              src={`${import.meta.env.BASE_URL}college-right.png`}
              alt="Accreditation Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* DESKTOP ONLY: LEFT LOGO */}
          <div className="hidden md:flex w-28 md:w-36 justify-start">
            <img
              src={`${import.meta.env.BASE_URL}collegeleft.png`}
              alt="St. Joseph College Logo"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="text-center w-full flex flex-col items-center">

            {/* COLLEGE NAME */}
            <h1
              className="
                text-lg xs:text-xl sm:text-2xl md:text-3xl
                font-serif font-bold
                leading-tight
                tracking-tight sm:tracking-wide
                drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)]
                text-center
              "
            >
              St. Joseph College of Engineering
            </h1>

            {/* AFFILIATION */}
            <p
              className="
                mt-1
                text-[10px] sm:text-xs md:text-sm
                font-medium
                text-white/90
                text-center
                leading-snug
              "
            >
              Approved by AICTE · Affiliated to Anna University
            </p>

            {/* UGC */}
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white/90 leading-snug">
              Under Section 2(f) & 12(B) of UGC Act 1956
            </p>

            {/* LOCATION */}
            <p className="mt-0.5 text-[9px] sm:text-[10px] md:text-xs font-light text-white/80">
              Sriperumbudur, Chennai, Tamil Nadu
            </p>

            {/* PARTNER LOGOS */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-3">
              {[5, 2, 1, 3, 4].map((num) => (
                <div key={num} className="p-1 bg-white rounded-md sm:rounded-lg shadow-sm">
                  <img src={`${import.meta.env.BASE_URL}logos/logo${num}.png`} alt={`Partner ${num}`} className="w-8 h-8 xs:w-10 xs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP ONLY: RIGHT LOGO */}
          <div className="hidden md:flex w-28 md:w-36 justify-end">
            <img
              src={`${import.meta.env.BASE_URL}college-right.png`}
              alt="Accreditation Logo"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
