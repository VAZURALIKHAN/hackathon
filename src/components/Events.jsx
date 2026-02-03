import { events } from "../data/events";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const videoRef = useRef(null);

  /* ================= EVENT DATE (MARCH 27) ================= */
  const eventDate = new Date("2026-03-27T09:00:00").getTime();

  /* ================= LIVE COUNTDOWN ================= */
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

  /* ================= PAUSE VIDEO WHEN MODAL OPENS ================= */
  useEffect(() => {
    if (!videoRef.current) return;

    if (selectedEvent) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => { });
    }
  }, [selectedEvent]);

  return (
    <section
      id="event"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* ================= ANIMATED BACKGROUND ================= */}
      <AnimatedBackground />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-24 px-4 sm:px-6">
        {/* TITLE */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-cyan-400 mb-16">
          Competitions
        </h2>

        {/* EVENT CARDS */}
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {events.map((e, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="
                relative
                flex flex-col sm:flex-row
                items-center
                gap-7
                p-7
                rounded-2xl
                bg-black/45
                backdrop-blur-xl
                border border-white/15
                shadow-[0_20px_50px_rgba(0,0,0,0.6)]
              "
            >
              {/* CATEGORY TAG */}
              {e.category && (
                <span
                  className="
                    absolute top-4 right-4
                    px-3 py-1
                    text-[11px] font-semibold uppercase tracking-wider
                    rounded-full
                    bg-cyan-400/90 text-black
                  "
                >
                  {e.category}
                </span>
              )}

              {/* ICON */}
              <div className="w-32 h-32 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/20 overflow-hidden">
                {e.image ? (
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover mix-blend-screen hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-7xl filter drop-shadow-lg">
                    {e.icon}
                  </span>
                )}
              </div>

              {/* DIVIDER */}
              <div className="hidden sm:block w-px h-28 bg-white/15" />

              {/* CONTENT */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
                  {e.title}
                </h3>

                <p className="text-gray-300 mt-3 leading-relaxed max-w-md text-lg">
                  {e.desc}
                </p>

                <button
                  onClick={() => setSelectedEvent(e)}
                  className="
                    mt-6
                    px-8 py-3
                    rounded-md
                    bg-cyan-400
                    text-black
                    text-lg
                    font-bold tracking-wide
                    hover:bg-cyan-300
                    transition
                  "
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="
                bg-slate-900/90
                backdrop-blur-xl
                border border-cyan-500/20
                rounded-2xl
                p-8
                max-w-lg w-full
                shadow-[0_0_50px_rgba(6,182,212,0.15)]
                relative
                overflow-hidden
              "
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

              <h3 className="text-3xl font-extrabold tracking-wide text-cyan-400 text-center mb-2">
                {selectedEvent.title}
              </h3>

              {/* DETAILS & TIMING */}
              <div className="text-center mb-6">
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {selectedEvent.desc}
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-cyan-300">
                  📅 March 27, 2026 &nbsp;|&nbsp; 🕘 09:00 AM
                </div>
              </div>

              {/* COUNTDOWN (Minimal) */}
              <div className="flex justify-center gap-4 mb-8 text-white">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className="text-center bg-black/40 rounded-lg p-2 min-w-[60px] border border-white/5">
                    <p className="text-lg font-bold text-cyan-400">{timeLeft[unit]}</p>
                    <p className="text-[9px] uppercase tracking-wider text-white/50">
                      {unit}
                    </p>
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdwd2xADoD9Eo5uIfzUPqG9Aym9-BcL6AjqJ-AYHORchkNXrA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full py-3 rounded-lg
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    text-white font-bold text-lg tracking-wide
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-transform
                    flex items-center justify-center gap-2
                    shadow-lg shadow-cyan-500/25
                  "
                >
                  <span>📝</span> Register Now
                </a>

                <button
                  onClick={() => setSelectedEvent(null)}
                  className="
                    w-full py-2.5 rounded-lg
                    border border-white/10
                    text-gray-400 hover:text-white
                    hover:bg-white/5
                    transition-colors
                    text-sm font-medium
                  "
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
