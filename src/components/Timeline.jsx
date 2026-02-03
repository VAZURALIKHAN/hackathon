import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function Timeline() {
  const steps = [
    {
      title: "Registration & Check-in",
      subtitle: "Participant registration, ID verification, and welcome kit distribution",
      icon: "📝",
      time: "9:00 AM - 9:30 AM"
    },
    {
      title: "Inauguration Ceremony",
      subtitle: "Opening ceremony, keynote speech, and event guidelines",
      icon: "🎤",
      time: "9:30 AM - 10:00 AM"
    },
    {
      title: "Event Briefing",
      subtitle: "Detailed explanation of rules, judging criteria, and Q&A session",
      icon: "📋",
      time: "10:00 AM - 10:30 AM"
    },
    {
      title: "Main Events Start",
      subtitle: "All technical and non-technical competitions begin simultaneously",
      icon: "🚀",
      time: "10:30 AM - 1:00 PM"
    },
    {
      title: "Lunch Break",
      subtitle: "Refreshments and networking session",
      icon: "🍽️",
      time: "1:00 PM - 2:00 PM"
    },
    {
      title: "Events Continue",
      subtitle: "Competitions resume, final submissions, and last-minute improvements",
      icon: "⚡",
      time: "2:00 PM - 4:00 PM"
    },
    {
      title: "Judging & Evaluation",
      subtitle: "Expert panel reviews all submissions and selects winners",
      icon: "👨‍⚖️",
      time: "4:00 PM - 4:30 PM"
    },
    {
      title: "Valediction & Prize Distribution",
      subtitle: "Winners announcement, certificates, cash prizes, and closing ceremony",
      icon: "🏆",
      time: "4:30 PM - 5:30 PM"
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= ANIMATED BACKGROUND ================= */}
      <AnimatedBackground />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-32 px-4 sm:px-6">

        {/* DATE BADGE */}
        <div className="flex justify-center mb-8">
          <span className="
            px-8 py-3 rounded-full
            bg-cyan-400/10
            border-2 border-cyan-400/40
            text-cyan-300
            text-xl font-bold tracking-wide
          ">
            📅 March 27, 2026 (Thursday)
          </span>
        </div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-center
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold tracking-wide
            text-cyan-400
            mb-24
          "
        >
          Event Schedule
        </motion.h2>

        {/* ================= TIMELINE ================= */}
        <div className="max-w-5xl mx-auto relative">

          {/* VERTICAL LINE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originY: 0, backgroundImage: 'linear-gradient(135deg, rgba(59,130,246,0.28) 25%, transparent 25%, transparent 50%, rgba(168,85,247,0.28) 50%, rgba(168,85,247,0.28) 75%, transparent 75%, transparent)', backgroundSize: '12px 18px' }}
            className="
              absolute left-8 md:left-1/2 top-0 bottom-0
              w-1
              md:-ml-0.5
            "
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <TimelineItem
                key={index}
                step={step}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= TIMELINE ITEM ================= */
function TimelineItem({ step, index, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`
        relative flex items-center gap-6
        ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
        ${index % 2 === 0 ? 'md:-translate-y-8' : 'md:translate-y-8'}
      `}
    >
      {/* MOBILE/TABLET: Simple Left-Aligned Layout */}
      <div className="md:hidden w-full pl-20">
        {/* DOT */}
        <div className={`
          absolute left-[26px] top-6
          w-6 h-6
          rounded-full
          ${isLeft ? 'bg-cyan-400' : 'bg-purple-400'}
          shadow-[0_0_0_10px_rgba(34,211,238,0.2)]
          border-4 border-black
        `} />

        {/* CARD */}
        <div className={`
          px-6 py-5
          rounded-2xl
          backdrop-blur-xl
          border
          shadow-[0_20px_50px_rgba(0,0,0,0.7)]
          ${isLeft
            ? 'bg-cyan-900/30 border-cyan-400/40'
            : 'bg-purple-900/30 border-purple-400/40'
          }
        `}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{step.icon}</span>
            <div className="flex-1">
              <p className="text-lg font-bold text-white">{step.title}</p>
              <p className={`text-base font-semibold ${isLeft ? 'text-cyan-300' : 'text-purple-300'}`}>{step.time}</p>
            </div>
          </div>
          <p className="text-base text-gray-300 leading-relaxed">
            {step.subtitle}
          </p>
        </div>
      </div>

      {/* DESKTOP: Alternating Zig-Zag Layout */}
      <div className="hidden md:flex w-full items-center justify-center gap-12">

        {/* LEFT CONTAINER */}
        <div className="flex-1 flex justify-end">
          {isLeft && (
            <div className="
              px-8 py-6
              rounded-2xl
              bg-cyan-900/40
              backdrop-blur-xl
              border-2 border-cyan-400/50
              shadow-[0_20px_50px_rgba(6,182,212,0.3)]
              w-full max-w-md
              hover:border-cyan-400/70
              hover:shadow-[0_20px_60px_rgba(6,182,212,0.5)]
              transition-all duration-300
              relative
            ">
              {/* Arrow Indicator */}
              <div className="absolute top-1/2 -right-3 w-4 h-4 bg-cyan-900/40 border-t-2 border-r-2 border-cyan-400/50 rotate-45 transform -translate-y-1/2 backdrop-blur-xl"></div>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl">{step.icon}</span>
                <div className="flex-1 text-left">
                  <p className="text-2xl font-bold text-white mb-1">{step.title}</p>
                  <p className="text-lg text-cyan-300 font-semibold">{step.time}</p>
                </div>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed text-left">
                {step.subtitle}
              </p>
            </div>
          )}
        </div>

        {/* CENTER DOT & LINE */}
        <div className="relative flex-shrink-0 z-10">
          <div className={`
            w-8 h-8
            rounded-full
            ${isLeft ? 'bg-cyan-400' : 'bg-purple-400'}
            ${isLeft
              ? 'shadow-[0_0_0_8px_rgba(6,182,212,0.3)]'
              : 'shadow-[0_0_0_8px_rgba(168,85,247,0.3)]'
            }
            border-4 border-black
            transition-all duration-300 hover:scale-110
          `} />
        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex-1 flex justify-start">
          {!isLeft && (
            <div className="
              px-8 py-6
              rounded-2xl
              bg-purple-900/40
              backdrop-blur-xl
              border-2 border-purple-400/50
              shadow-[0_20px_50px_rgba(168,85,247,0.3)]
              w-full max-w-md
              hover:border-purple-400/70
              hover:shadow-[0_20px_60px_rgba(168,85,247,0.5)]
              transition-all duration-300
              relative
            ">
              {/* Arrow Indicator */}
              <div className="absolute top-1/2 -left-3 w-4 h-4 bg-purple-900/40 border-l-2 border-b-2 border-purple-400/50 rotate-45 transform -translate-y-1/2 backdrop-blur-xl"></div>

              <div className="flex items-center gap-4 mb-3">
                <span className="text-5xl">{step.icon}</span>
                <div className="flex-1 text-left">
                  <p className="text-2xl font-bold text-white mb-1">{step.title}</p>
                  <p className="text-lg text-purple-300 font-semibold">{step.time}</p>
                </div>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed text-left">
                {step.subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
