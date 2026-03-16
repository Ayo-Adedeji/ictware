import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { value: "1", label: "Day Event" },
  { value: "5+", label: "Sessions" },
  { value: "Live", label: "Auction" },
];

export default function AboutEvent() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-widest">
            About the Summit
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-primary mt-2 mb-5 leading-snug">
            Where Technology Meets Opportunity
          </h2>
          <p className="font-body text-gray-600 text-base leading-relaxed mb-4">
            Digital Bridges Summit introduces ictweare — a structured IT service
            platform that helps businesses and individuals manage technology
            requests easily.
          </p>
          <p className="font-body text-gray-600 text-base leading-relaxed">
            Join us for a full day of insights, live demos, keynote addresses,
            and real conversations about how smart ICT can transform the way
            you work — in Lagos, Nigeria.
          </p>

          {/* Venue note */}
          <div className="mt-6 flex items-center gap-3 bg-[#F0F6FF] rounded-xl px-4 py-3 border border-[#1A4F8A]/10">
            <span className="text-xl">📍</span>
            <div>
              <p className="font-semibold text-primary text-sm">Lagos, Nigeria</p>
              <p className="text-gray-500 text-xs">Venue to be announced soon</p>
            </div>
          </div>
        </motion.div>

        {/* Right — stat card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl p-8 shadow-sm border border-[#1A4F8A]/10 bg-gradient-to-br from-[#1A4F8A] to-[#0E8E8E]"
        >
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#C89B2A]">
                  {s.value}
                </span>
                <span className="font-body text-white/70 text-sm mt-1">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-6 space-y-3">
            {[
              "☕ Meals & Refreshments",
              "🎵 Entertainment & Networking",
              "🤝 One-on-One Consultations",
              "🛒 Device Marketplace",
            ].map((item) => (
              <p key={item} className="font-body text-white/80 text-sm flex items-center gap-2">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-6 border-t border-white/20 pt-4">
            <p className="font-body text-white/50 text-xs text-center">
              Powered by ictweare
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
