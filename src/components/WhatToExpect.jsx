import { motion } from "framer-motion";

const items = [
  { icon: "🔍", title: "Hidden digital risks explained", desc: "Understand what's exposed and why it matters." },
  { icon: "🗺", title: "Practical framework for immediate action", desc: "A clear roadmap you can apply right away." },
  { icon: "🏢", title: "Business IT session (ictweare)", desc: "Structured IT governance for your organisation." },
  { icon: "👤", title: "Personal digital session (ServiceIS)", desc: "Clarity on your personal digital environment." },
  { icon: "🤝", title: "Combined closing session", desc: "Bringing it all together with next steps." },
];

const differences = [
  { icon: "🎯", title: "Curated executive session", desc: "Designed for decision-makers, not general audiences." },
  { icon: "🧭", title: "Focus on clarity and control", desc: "Every minute is structured for maximum insight." },
  { icon: "🔇", title: "No noise, no overload", desc: "Precise, relevant, and immediately actionable." },
  { icon: "⚡", title: "Immediate practical insight", desc: "You leave with tools, not just ideas." },
];

export default function WhatToExpect() {
  return (
    <>
      {/* What to Expect */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#0E8E8E] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Programme</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0D1B2A] leading-tight">
              What to Expect
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1A4F8A]/15 hidden sm:block" />
            <div className="space-y-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 sm:pl-16 relative"
                >
                  <div className="hidden sm:flex absolute left-0 top-4 w-12 h-12 rounded-full bg-[#F0F6FF] border border-[#1A4F8A]/15 items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex sm:hidden w-12 h-12 rounded-full bg-[#F0F6FF] border border-[#1A4F8A]/15 items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="bg-[#F5F7FA] rounded-2xl px-6 py-5 flex-1 border border-[#1A4F8A]/8 hover:border-[#1A4F8A]/20 transition-colors">
                    <p className="font-display font-black text-[#1A4F8A] text-base mb-1">{item.title}</p>
                    <p className="font-body text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-display font-black text-2xl sm:text-3xl text-[#C89B2A] mt-14"
          >
            You will leave with clarity.
          </motion.p>
        </div>
      </section>

      {/* Why Different */}
      <section className="bg-[#0D1B2A] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[#C89B2A] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Distinction</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight">
              Why This Is Different
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {differences.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#C89B2A]/30 hover:shadow-lg transition-all duration-200"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-3xl mb-4 block w-fit"
                >{item.icon}</motion.span>
                <h3 className="font-display font-black text-white text-lg mb-2">{item.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
