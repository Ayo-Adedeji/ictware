import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET = new Date("2026-04-11T10:30:00");

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function FlipBox({ value, label }) {
  const display = String(value).padStart(2, "0");
  const prevRef = useRef(display);
  const changed = prevRef.current !== display;
  useEffect(() => { prevRef.current = display; });

  return (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 sm:px-5 sm:py-3 min-w-[60px] sm:min-w-[80px] overflow-hidden">
      <div className="relative h-8 sm:h-12 flex items-center justify-center w-full">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={changed ? { y: -20, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display font-black text-2xl sm:text-4xl text-[#C89B2A] leading-none absolute"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-white/70 text-xs sm:text-sm mt-1 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      <FlipBox value={time.days} label="Days" />
      <FlipBox value={time.hours} label="Hours" />
      <FlipBox value={time.minutes} label="Mins" />
      <FlipBox value={time.seconds} label="Secs" />
    </div>
  );
}
