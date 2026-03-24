import { motion } from "framer-motion";

const audience = [
  { icon: "🚀", title: "Founders & Business Owners", desc: "Building and scaling companies" },
  { icon: "💼", title: "Executives & Professionals", desc: "Leading teams and organisations" },
  { icon: "🏡", title: "Families", desc: "Managing household digital life" },
  { icon: "🎯", title: "Decision-Makers", desc: "Those who set the direction" },
];

export default function WhoIsThisFor() {
  return (
    <section className="bg-[#F5F7FA] py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#0E8E8E] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Audience</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0D1B2A] leading-tight">
            This Is Not<br />for Everyone
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {audience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white border border-[#1A4F8A]/10 rounded-2xl p-7 hover:border-[#C89B2A]/40 hover:shadow-lg transition-all duration-200 group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-3xl mb-4 block w-fit"
              >{item.icon}</motion.span>
              <h3 className="font-display font-black text-base text-[#1A4F8A] mb-2 leading-snug">{item.title}</h3>
              <p className="font-body text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-l-4 border-[#C89B2A] pl-8 py-2"
        >
          <p className="font-display font-black text-xl sm:text-2xl text-[#1A4F8A] leading-relaxed">
            If you are responsible for both a business and a household, this is for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
