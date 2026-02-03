import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function FAQ() {
  const faqs = [
    {
      q: "When is the registration deadline for Hackathon 2K26?",
      a: "The last date for registration is March 23, 2026. Make sure to register before this date via the QR code or registration link provided.",
    },

    {
      q: "What are the prize amounts for winners?",
      a: "1st Prize: ₹10,000, 2nd Prize: ₹7,500, 3rd Prize: ₹5,000. All cash prizes will be awarded to the winners.",
    },
    {
      q: "Will certificates be provided?",
      a: "Yes. Participation and winner certificates will be provided for all registered participants and winners.",
    },
    {
      q: "Where will the event be held?",
      a: "All events will be conducted at Charles Babbage Hall, St. Joseph College of Engineering on March 27, 2026.",
    },
    {
      q: "Do I need to bring my own laptop?",
      a: "For technical events, participants are strongly advised to bring their own laptops fully charged with necessary software pre-installed.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= ANIMATED BACKGROUND ================= */}
      <AnimatedBackground />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-28 px-4 sm:px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-center
            text-4xl sm:text-5xl md:text-6xl
            font-extrabold
            tracking-wide
            text-cyan-400
            mb-16
          "
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((item, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                group
                bg-black/45
                backdrop-blur-xl
                border border-white/15
                rounded-xl
                p-5
                shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  font-semibold
                  text-lg sm:text-xl
                  text-white
                  tracking-wide
                  flex justify-between items-center
                "
              >
                {item.q}
                <span className="
                  text-cyan-400
                  text-2xl
                  transform transition-transform
                  group-open:rotate-45
                ">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
