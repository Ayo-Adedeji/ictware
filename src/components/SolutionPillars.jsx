import { motion } from "framer-motion";

const pillars = [
  { icon: "👁", title: "Visibility", desc: "Know what exists across your digital environment." },
  { icon: "🔑", title: "Control", desc: "Manage who has access and what they can do." },
  { icon: "🛡", title: "Protection", desc: "Reduce exposure and eliminate silent risks." },
  { icon: "⚡", title: "Optimization", desc: "Eliminate waste and operate with efficiency." },
];

export default function SolutionPillars() {
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
          <p className="text-[#0E8E8E] text-xs uppercase tracking-[0.25em] font-semibold mb-4">The Solution</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0D1B2A] leading-tight max-w-2xl">
            Introducing a New Standard:<br />
            <span className="text-[#1A4F8A]">Personal & Business IT Governance</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-[#1A4F8A]/15 rounded-2xl p-7 hover:border-[#C89B2A]/50 hover:shadow-lg transition-all duration-200 group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-3xl mb-5 block w-fit"
              >{p.icon}</motion.span>
              <h3 className="font-display font-black text-xl text-[#1A4F8A] mb-3 group-hover:text-[#C89B2A] transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
