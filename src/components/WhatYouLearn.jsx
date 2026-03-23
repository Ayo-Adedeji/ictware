import { motion } from "framer-motion";

const cards = [
  {
    icon: "💡",
    title: "Why Most ICT Investments Fail",
    desc: "Keynote address unpacking the root causes of failed tech investments — and what to do differently.",
    accent: "border-[#1A4F8A]",
  },
  {
    icon: "📊",
    title: "Staff Monitoring Solutions",
    desc: "Live showcase of tools to optimize workforce productivity and accountability in your organization.",
    accent: "border-[#0E8E8E]",
  },
  {
    icon: "👔",
    title: "ICT Concierge Service",
    desc: "Exclusive tech management for busy executives, expats, and professionals who need it handled.",
    accent: "border-[#C89B2A]",
  },
  {
    icon: "🖥️",
    title: "Smart IT Systems for Businesses",
    desc: "Explore modern IT infrastructure strategies that scale with your business needs.",
    accent: "border-[#1A4F8A]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhatYouLearn() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-widest">
            What to Expect
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-primary mt-2">
            Sessions Designed to Empower You
          </h2>
          <p className="font-body text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Connecting Business, People, and Possibilities through Technology
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(26,79,138,0.12)" }}
              className={`bg-white rounded-2xl p-6 sm:p-8 border-l-4 ${card.accent} shadow-sm cursor-default transition-all duration-300`}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                {card.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
