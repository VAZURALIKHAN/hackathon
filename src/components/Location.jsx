import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BUS_ROUTES = [
    {
        route: "Route 1",
        name: "Ennore",
        from: "Ennore",
        via: "Burma Nagar, Lift Gate, ITC, Wimco, Ajax, Thiruvottiyur, Raja Kadai, Toll Gate, N4, Kasimedu, Rayapuram, Beach Station, Parish Corner, Central, Egmore, Aminjikarai, Arumbakkam, Koyambedu, Poonamallee",
        time: "5:30 AM",
        driver: "Mr. Kumaran",
        driverContact: "9841465153"
    },
    {
        route: "Route 2",
        name: "IOC",
        from: "Ennore",
        via: "Bharathiyar Nagar, Toll Gate, Lakshmi Kovil, Thandayarpetti, Manikoondu, Maharani Theoter, Mint, Basin Bridge, Pulianthoppu, Otteri, Iyanavaram, Villivakkam, Anna Nagar, VR Mahal, Rohini Theoter, Poonamallee",
        time: "5:30 AM",
        driver: "Mr. Rabin Antony",
        driverContact: "7448952803"
    },
    {
        route: "Route 3",
        name: "Manali",
        from: "Ennore",
        via: "Sathyamoorthy Nagar, MFL, Manali, Thabal Petti, Moolakadai, Kalpana, Madhavaram, Retteri, Senthil Nagar, Anna Nagar, Collector Nagar, Maduravoyal, Poonamallee",
        time: "5:30 AM",
        driver: "D. James",
        driverContact: "8682893705"
    },
    {
        route: "Route 4",
        name: "Velachery",
        from: "Velachery",
        via: "Baby Nagar, Tharamani, Tidel Park, Adayar, Thiruvanmiyur, Guindy, Ambal Nagar, Ekkattuthangal, Kasi Theoter, Ashok Piller, Vadapalani, Koyambedu, Maduravoyal, Thiruverkadu, Poonamallee",
        time: "5:55 AM",
        driver: "Mr. Pandurangam",
        driverContact: "9629409957"
    },
    {
        route: "Route 5",
        name: "Tambaram",
        from: "Bharathi College",
        via: "Indira Nagar, Camp Road, Tambaram, Chrompet, Pallavaram, Meenambakkam, Aalandhur, Butroad, Ramapuram, Mugalivakkam, Porur, Poonamallee",
        time: "5:35 AM",
        driver: "Mr. Kalidass",
        driverContact: "8939560628"
    },
    {
        route: "Route 6",
        name: "Redhills/Avadi",
        from: "Gandhi Nagar",
        via: "Redhills Bus Stand, Puzhal Camp, Kallikuppam, Ambattore, Set Board, Thirumullaivoyal, Avadi, Avadi Market, Kaaduvetti, S.A. College, Vethalai Thottam, Poonamallee, Nazareth Pettai, Pappan Chathram, Thandalam",
        time: "6:00 AM",
        driver: "Mr. Charles",
        driverContact: "7200421804"
    },
    {
        route: "Route 7",
        name: "Kancheepuram",
        from: "Ayyankarkulam",
        via: "Sevilimedu, Housing Board, Collector Office, Mettutheru, Kancheepuram Bus Stand, Pookadai Chathram, Railway Gate, Vella Gate, Ponneri Karai, Meenakshi Hospital, Raja Kulam",
        time: "5:55 AM",
        driver: "Mr. Justin",
        driverContact: "9786931433"
    },
    {
        route: "Route 10",
        name: "Thiruvallur",
        from: "Erayur",
        via: "Othikadu, Kandigai, Ekadu Church, DRVC, Thiruthani Road, Thiruvallur G.H, Thiruvallur Ralway Bridge, Manavala Nagar, Patrai, Gatore Pillar, TCL, Kattu Kootroad, Mappedu, Pannur, Sunguvarchathram",
        time: "6:00 AM",
        driver: "Mr. Ramesh",
        driverContact: "9629320035"
    }
];

const Location = () => {
    const [showAllRoutes, setShowAllRoutes] = useState(false);
    const collegeAddress = "St. Joseph College of Engineering, Sriperumbudur, Chennai, Tamil Nadu";
    // Using direct place search for better compatibility
    const googleMapsEmbedUrl = "https://www.google.com/maps?q=St.+Joseph+College+of+Engineering+Sriperumbudur&output=embed";

    const visibleRoutes = showAllRoutes ? BUS_ROUTES : BUS_ROUTES.slice(0, 5);

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* LEFT COLUMN: Find Us & Map */}
                    <div className="flex flex-col">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2"
                        >
                            Find Us
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-300 mb-6"
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
                                h-[350px]
                                rounded-2xl
                                overflow-hidden
                                border-2 border-cyan-400/30
                                shadow-[0_0_50px_rgba(34,211,238,0.3)]
                                bg-black/50
                                backdrop-blur-xl
                                mb-6
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
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeAddress)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex-1
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
                                    flex-1
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

                    {/* RIGHT COLUMN: Bus Routes */}
                    <div className="flex flex-col">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-1 mb-6"
                        >
                            <span className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                                <span
                                    className="cursor-pointer hover:text-cyan-400 transition-colors"
                                    onClick={() => setShowAllRoutes(!showAllRoutes)}
                                >
                                    🚌 Bus Routes
                                </span>
                            </span>
                            <span className="text-sm text-gray-400 flex items-center gap-2">
                                <span>Transport Office:</span>
                                <a href="tel:9047820104" className="text-cyan-400 hover:text-cyan-300">9047820104</a>
                            </span>
                        </motion.h3>

                        <div className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {visibleRoutes.map((bus, index) => (
                                    <motion.div
                                        key={bus.route}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="
                                            group
                                            p-4
                                            rounded-xl
                                            bg-white/5
                                            border border-white/10
                                            hover:bg-white/10
                                            hover:border-cyan-400/30
                                            transition-all duration-300
                                            flex flex-col gap-3
                                        "
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-0.5 rounded text-sm whitespace-nowrap">
                                                        {bus.route}
                                                    </span>
                                                    <span className="font-semibold text-white">
                                                        {bus.from}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-500 mb-1">
                                                    {bus.name && <span className="text-gray-300 mr-2">[{bus.name}]</span>}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-cyan-300 font-mono font-bold whitespace-nowrap">
                                                    {bus.time}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-sm text-gray-400 leading-relaxed">
                                            <span className="text-gray-500 font-semibold">Via:</span> {bus.via}
                                        </div>

                                        <div className="pt-3 mt-1 border-t border-white/5 flex flex-wrap gap-4 text-sm">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <span className="text-cyan-500">👤</span>
                                                <span>{bus.driver}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <span className="text-cyan-500">📞</span>
                                                <a href={`tel:${bus.driverContact}`} className="hover:text-cyan-400 transition-colors">
                                                    {bus.driverContact}
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* View All / Show Less Button */}
                        <motion.button
                            onClick={() => setShowAllRoutes(!showAllRoutes)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                mt-6 
                                px-6 py-2 
                                rounded-lg 
                                bg-cyan-500/20 
                                border border-cyan-500/50 
                                text-cyan-300 
                                font-semibold 
                                hover:bg-cyan-500/30 
                                transition-all
                                mx-auto block
                            "
                        >
                            {showAllRoutes ? "Show Less" : "View All Routes"}
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
