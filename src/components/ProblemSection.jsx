import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const digitalItems = [
  { icon: "🏢", text: "Business operations" },
  { icon: "💳", text: "Financial platforms" },
  { icon: "📱", text: "Personal devices" },
  { icon: "👨‍👩‍👧", text: "Family access" },
];

const riskItems = [
  { icon: "❓", text: "Don't know what they own" },
  { icon: "🔓", text: "Don't know who has access" },
  { icon: "⚠️", text: "Don't know where the risks are" },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p custom={0} variants={fadeUp} className="text-[#0E8E8E] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            The Problem
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="font-display font-black text-4xl sm:text-5xl text-[#0D1B2A] leading-tight mb-16">
            The Hidden Risk<br />You're Not Managing
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-gray-400 text-xs uppercase tracking-widest mb-6">Today, your life runs on digital systems:</p>
            <div className="space-y-4">
              {digitalItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-[#F5F7FA] rounded-xl px-5 py-4 border border-[#1A4F8A]/8 hover:border-[#1A4F8A]/20 hover:shadow-sm transition-all duration-200 group/card"
                >
                  <motion.span whileHover={{ scale: 1.2, rotate: 3 }} transition={{ type: "spring", stiffness: 400 }} className="text-2xl">{item.icon}</motion.span>
                  <span className="font-body text-[#0D1B2A] text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body text-gray-400 text-xs uppercase tracking-widest mb-6">Yet most people:</p>
            <div className="space-y-4">
              {riskItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                  className="flex items-center gap-4 bg-red-50 rounded-xl px-5 py-4 border border-red-100 hover:border-red-200 hover:shadow-sm transition-all duration-200"
                >
                  <motion.span whileHover={{ scale: 1.2, rotate: -3 }} transition={{ type: "spring", stiffness: 400 }} className="text-2xl">{item.icon}</motion.span>
                  <span className="font-body text-[#0D1B2A] text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-4 border-[#C89B2A] pl-8 py-2"
        >
          <p className="font-display font-black text-2xl sm:text-3xl text-[#0D1B2A]">
            Silent exposure. Inefficiency. Loss of control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
