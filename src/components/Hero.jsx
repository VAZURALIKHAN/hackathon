import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const eventDate = new Date("2026-03-27T09:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(eventDate - now, 0);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const scrollToEvent = () => {
    document
      .getElementById("event")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* ================= HERO ANIMATED BACKGROUND ================= */}
      <AnimatedBackground />

      {/* ================= CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 w-full flex justify-center px-4"
      >
        <div
          className="
            w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl
            bg-black/45
            backdrop-blur-2xl
            border border-white/25
            rounded-2xl sm:rounded-3xl
            px-5 py-5 sm:px-8 sm:py-6 md:px-14 md:py-8
            text-center
            shadow-[0_25px_80px_rgba(0,0,0,0.6)]
            overflow-hidden
          "
        >



          {/* MAIN HEADING - HACKATHON */}
          <h1 className="
            text-center
            mb-2 sm:mb-3
          ">
            <div className="relative inline-block">
              <span
                className="
                  bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
                  bg-clip-text text-transparent
                  font-black
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  tracking-wide
                  drop-shadow-[0_0_40px_rgba(219,39,119,0.6)]
                  block
                  px-2
                "
                style={{
                  textShadow: '0 0 30px , 0 0 60px rgba(217, 255, 147, 0.7), 0 0 90px rgba(56,189,248,0.5)',
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  WebkitTextStroke: '1px rgba(210, 249, 12, 0.04)'
                }}
              >
                HACKATHON'26
              </span>

              {/* Hanging animated logo (at the '6') */}
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: [-5, 5, -3, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-1 top-[85%] flex flex-col items-center pointer-events-none"
                style={{ transformOrigin: "top center" }}
              >
                {/* String */}
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/40 to-white/60" />

                {/* Trophy Icon */}
                <div className="
                  w-14 h-14 
                  flex items-center justify-center 
                  filter drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]
                ">
                  <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">
                    🏆
                  </span>
                </div>
              </motion.div>
            </div>
          </h1>

          {/* HACKATHON LOGO */}
          <div className="flex justify-center mb-4">
            <img
              src="/hackathon-logo.png"
              alt="Hackathon 2026 Logo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>

          {/* ORGANISED BY TEXT */}
          <p className="
            text-center
            text-base sm:text-xl md:text-2xl
            font-semibold
            text-cyan-200
            mb-2 sm:mb-3
          ">
            organised by
          </p>

          {/* DEPARTMENT */}
          <h2 className="
            text-center
            text-lg sm:text-2xl md:text-3xl
            font-serif font-bold
            text-white/95
            leading-snug
          ">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </h2>







          {/* COUNTDOWN TIMER */}
          <div className="mt-6 mb-4 grid grid-cols-4 gap-3 max-w-md mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-br from-cyan-500/20 to-purple-500/20
                  backdrop-blur-sm
                  border border-cyan-400/30
                  rounded-xl
                  p-3
                  text-center
                "
              >
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-cyan-200 uppercase tracking-wider mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* TAGLINE */}
          <p className="
            mt-2
            text-[11px] sm:text-sm
            uppercase
            tracking-[0.25em]
            font-semibold
            text-cyan-200
          ">

          </p>

          {/* BUTTON */}
          <motion.button
            onClick={scrollToEvent}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="
              mt-7 sm:mt-9
              px-8 sm:px-10
              py-2.5 sm:py-3
              rounded-full
              bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500
              text-sm sm:text-base
              text-white
              font-bold
              tracking-widest
              shadow-[0_0_35px_rgba(168,85,247,0.8)]
              transition-all duration-300
            "
          >
            REGISTER NOW
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
