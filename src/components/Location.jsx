import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Location = () => {
    const collegeAddress = "St. Joseph College of Engineering, Sriperumbudur, Chennai, Tamil Nadu";
    // Using direct place search for better compatibility
    const googleMapsEmbedUrl = "https://www.google.com/maps?q=St.+Joseph+College+of+Engineering+Sriperumbudur&output=embed";

    return (
        <section className="relative min-h-[600px] w-full overflow-hidden py-24 px-4 sm:px-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-cyan-400 mb-12"
                >
                    📍 Location & Transport
                </motion.h2>

                {/* Map Section - Centered */}
                <div className="flex flex-col w-full max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2"
                    >
                        Find Us
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-300 mb-6 text-center"
                    >
                        {collegeAddress}
                    </motion.p>

                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="
                                relative
                                w-full
                                h-[450px]
                                rounded-2xl
                                overflow-hidden
                                border-2 border-cyan-400/30
                                shadow-[0_0_50px_rgba(34,211,238,0.3)]
                                bg-black/50
                                backdrop-blur-xl
                                mb-8
                            "
                    >
                        <iframe
                            src={googleMapsEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="St. Joseph College of Engineering Location"
                            className="rounded-2xl"
                        />
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeAddress)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    min-w-[200px]
                                    px-6 py-3
                                    rounded-xl
                                    bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500
                                    text-white
                                    font-bold
                                    text-center
                                    shadow-[0_0_20px_rgba(34,211,238,0.4)]
                                    hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
                                    transition-all duration-300
                                    hover:scale-[1.02]
                                "
                        >
                            📱 Open Maps
                        </a>

                        <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(collegeAddress)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                    min-w-[200px]
                                    px-6 py-3
                                    rounded-xl
                                    bg-white/5
                                    backdrop-blur-md
                                    border border-cyan-400/50
                                    text-cyan-400
                                    font-bold
                                    text-center
                                    hover:bg-cyan-400/20
                                    transition-all duration-300
                                    hover:scale-[1.02]
                                "
                        >
                            🧭 Get Directions
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
