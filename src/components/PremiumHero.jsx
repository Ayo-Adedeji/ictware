import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountdownTimer from "./CountdownTimer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function PremiumHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const scrollToForm = () =>
    document.getElementById("invitation-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80)",
          y: bgY,
        }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#0D1B2A]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A4F8A]/20 via-transparent to-[#0E8E8E]/10" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#C89B2A]/5 blur-[120px] pointer-events-none" />

      {/* Content with subtle parallax */}
      <motion.div
        style={{ y: contentY }}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-20"
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          className="text-[#C89B2A] text-xs uppercase tracking-[0.35em] font-semibold mb-6"
        >
          Digital Bridges Summit · April 11, 2026 · Lagos
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6"
        >
          Take Control of Your<br />
          <span className="text-[#C89B2A]">Digital Life —</span><br />
          In Business and At Home
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A private executive summit for founders, professionals, and families ready to eliminate digital chaos, reduce risk, and operate with clarity.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} className="flex flex-col items-center gap-3">
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(200,155,42,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-[#C89B2A] text-white font-bold px-10 py-4 rounded-full text-base tracking-wide cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10">Request Private Invitation</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.button>
          <p className="text-white/30 text-xs uppercase tracking-widest">
            Limited Seats · Curated Attendance Only
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div custom={4} variants={fadeUp} className="mt-10 flex flex-col items-center gap-3">
          <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-semibold">Event begins in</p>
          <CountdownTimer />
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
