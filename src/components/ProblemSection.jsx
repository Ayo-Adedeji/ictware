import { motion } from "framer-motion";

const digitalItems = [
  { icon: "🏢", text: "Business operations" },
  { icon: "💳", text: "Financial platforms" },
  { icon: "📱", text: "Personal devices" },
  { icon: "👨‍👩‍👧", text: "Family access" },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#0E8E8E] text-sm uppercase tracking-[0.25em] font-black mb-5">
            The Problem
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0D1B2A] leading-tight tracking-tight">
            Today your life runs on<br />
            <span className="text-[#1A4F8A]">digital systems</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {digitalItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
              className="flex items-center gap-5 bg-[#F5F7FA] rounded-2xl px-6 py-5 border border-[#1A4F8A]/8 hover:border-[#1A4F8A]/20 hover:shadow-md transition-all duration-200"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-3xl flex-shrink-0"
              >{item.icon}</motion.span>
              <span className="font-display font-black text-[#0D1B2A] text-lg">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
