import { motion } from "framer-motion";

const oldMindset = [
  { icon: "🚪", text: "Locking doors" },
  { icon: "🚗", text: "Securing cars" },
  { icon: "🏠", text: "Protecting physical assets" },
];

const newReality = [
  { icon: "💾", text: "Digital assets" },
  { icon: "👻", text: "Invisible risks" },
  { icon: "🔑", text: "Unknown access points" },
];

export default function RealityShift() {
  return (
    <section className="bg-[#0D1B2A] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C89B2A] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Reality Shift</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
            Security Is No Longer<br />Just Physical
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Old */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-8">Old Mindset</p>
            <div className="space-y-4">
              {oldMindset.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body text-white/60 text-base">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* New */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#1A4F8A]/20 border border-[#1A4F8A]/40 rounded-2xl p-8"
          >
            <p className="text-[#C89B2A] text-xs uppercase tracking-widest mb-8">New Reality</p>
            <div className="space-y-4">
              {newReality.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body text-white text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center bg-[#C89B2A]/10 border border-[#C89B2A]/30 rounded-2xl px-8 py-8"
        >
          <p className="font-display font-black text-xl sm:text-2xl text-[#C89B2A] leading-relaxed">
            "It's not just about locking doors — it's about knowing how many doors exist."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
