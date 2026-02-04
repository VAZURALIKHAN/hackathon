import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function Coordinators() {
  const staffCoordinators = [
    { name: "Mr. K. Premkumar", designation: "AP/CSE", phone: "9943110035" },
    { name: "Ms. A. Beneta Mary", designation: "AP/CSE", phone: "9940010713" }
  ];

  const studentCoordinators = [
    { name: "Mr. B. Rahul", year: "IV / CSE", phone: "8122178878" },
    { name: "Mr. B. Mano", year: "III / CSE", phone: "9345011207" }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= ANIMATED BACKGROUND ================= */}
      <AnimatedBackground />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-32 px-4 sm:px-6">

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
            mb-20
          "
        >
          Coordinators
        </motion.h2>

        {/* STAFF COORDINATORS SECTION */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
          >
            Staff Coordinators
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {staffCoordinators.map((coord, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-black/45
                  backdrop-blur-xl
                  border border-white/15
                  rounded-2xl
                  p-8
                  text-center
                  shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                "
              >
                <p className="text-2xl text-gray-100 font-bold mb-2">
                  {coord.name}
                </p>
                <p className="text-lg text-cyan-400 mb-6">
                  {coord.designation}
                </p>

                {/* BUTTONS ROW */}
                <div className="flex gap-4 justify-center flex-wrap">
                  {/* WhatsApp Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${coord.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      min-w-[140px]
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-r from-green-500 to-green-600
                      text-white
                      font-bold
                      text-lg
                      tracking-wide
                      shadow-[0_0_25px_rgba(34,197,94,0.5)]
                      hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      cursor-pointer
                      no-underline
                    "
                  >
                    <span className="text-2xl">💬</span>
                    What's App
                  </motion.a>

                  {/* Call Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${coord.phone}`}
                    className="
                      min-w-[140px]
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-r from-blue-500 to-blue-600
                      text-white
                      font-bold
                      text-lg
                      tracking-wide
                      shadow-[0_0_25px_rgba(59,130,246,0.5)]
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      cursor-pointer
                      no-underline
                    "
                  >
                    <span className="text-2xl">📞</span>
                    Call
                  </motion.a>
                </div>
              </motion.div>

            ))}
          </div>
        </div>

        {/* STUDENT COORDINATORS SECTION */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
          >
            Student Coordinators
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {studentCoordinators.map((coord, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-black/45
                  backdrop-blur-xl
                  border border-white/15
                  rounded-2xl
                  p-8
                  text-center
                  shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                "
              >
                <p className="text-2xl text-gray-100 font-bold mb-2">
                  {coord.name}
                </p>
                <p className="text-lg text-purple-400 mb-6">
                  {coord.year}
                </p>

                {/* BUTTONS ROW */}
                <div className="flex gap-4 justify-center flex-wrap">
                  {/* WhatsApp Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${coord.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      min-w-[140px]
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-r from-green-500 to-green-600
                      text-white
                      font-bold
                      text-lg
                      tracking-wide
                      shadow-[0_0_25px_rgba(34,197,94,0.5)]
                      hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      cursor-pointer
                      no-underline
                    "
                  >
                    <span className="text-2xl">💬</span>
                    What's App
                  </motion.a>

                  {/* Call Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${coord.phone}`}
                    className="
                      min-w-[140px]
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-r from-blue-500 to-blue-600
                      text-white
                      font-bold
                      text-lg
                      tracking-wide
                      shadow-[0_0_25px_rgba(59,130,246,0.5)]
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      cursor-pointer
                      no-underline
                    "
                  >
                    <span className="text-2xl">📞</span>
                    Call
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
