import { motion } from "framer-motion";

const services = [
  "Device Repairs",
  "Network Setup",
  "CCTV Installation",
  "IT Support",
  "Device Pickup & Delivery",
];

const experiences = [
  { icon: "🛒", title: "Device Marketplace", desc: "On-site discounted sales of quality, limited-stock ICT devices." },
  { icon: "🤝", title: "One-on-One Consultations", desc: "Private sessions with ICT experts tailored to your business needs." },
  { icon: "☕", title: "Meals & Refreshments", desc: "Coffee breaks, light meals, and refreshments throughout the day." },
  { icon: "🎵", title: "Entertainment & Networking", desc: "Connect with professionals, entrepreneurs, and tech enthusiasts." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function IctWeareSection() {
  return (
    <section className="bg-[#1A1A2E] py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="text-[#C89B2A] font-semibold text-xs uppercase tracking-widest">
            The Platform
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-2 mb-5">
            One Platform. Every IT Need.
          </h2>
          <p className="font-body text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            ictweare is a structured IT service platform that connects businesses
            and individuals with reliable technology support — from device repairs
            to full network setups, all in one place.
          </p>
        </motion.div>

        {/* Service pills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {services.map((s) => (
            <motion.span
              key={s}
              variants={pill}
              className="flex items-center gap-2 border border-[#0E8E8E]/50 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#C89B2A] flex-shrink-0" />
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Experience cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {experiences.map((e) => (
            <motion.div
              key={e.title}
              variants={pill}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl mb-3">{e.icon}</div>
              <h3 className="font-display font-bold text-white text-base mb-1">{e.title}</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
