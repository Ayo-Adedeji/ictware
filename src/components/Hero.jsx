import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const scrollToRegister = () =>
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES[index]})` }}
        />
      </AnimatePresence>

      {/* Overlay — lighter, less blue dominance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#1A4F8A]/40" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-24"
      >
        {/* Event badge */}
        <motion.div variants={fadeUp}>
          <span className="inline-block border border-[#C89B2A] text-[#C89B2A] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            April 11, 2026 · 10:30 AM · Lagos, Nigeria
          </span>
        </motion.div>

        {/* Free Entry badge */}
        <motion.div variants={fadeUp} className="mb-2">
          <span className="inline-flex items-center gap-2 bg-[#C89B2A] text-white text-xs sm:text-sm font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
            🎟️ Free Entry — Register Now
          </span>
        </motion.div>

        {/* Smart ICT label */}
        <motion.div variants={fadeUp}>
          <p className="text-white/70 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            Smart ICT for Individuals &amp; Organizations
          </p>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white mb-3 leading-tight"
        >
          Digital Bridges
          <span className="block text-[#C89B2A]">Summit</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-body font-light text-white/90 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Connecting Businesses, People, and Possibilities through Technology
        </motion.p>

        {/* Countdown */}
        <motion.div variants={fadeUp} className="mb-10">
          <CountdownTimer />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={scrollToRegister}
            className="bg-[#C89B2A] text-white font-bold px-8 py-3.5 rounded-full text-base hover:bg-[#b08a24] transition w-full sm:w-auto"
          >
            Register Interest →
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/50 text-white font-medium px-8 py-3.5 rounded-full text-base hover:bg-white/10 transition w-full sm:w-auto"
          >
            Learn More
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-[#C89B2A] rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
