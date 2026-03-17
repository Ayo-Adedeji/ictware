import { motion } from "framer-motion";

const groups = [
  {
    title: "Businesses",
    icon: "🏢",
    items: ["Offices", "Hotels", "SMEs", "Startups", "Organizations"],
    bg: "from-[#1A4F8A] to-[#1A4F8A]/80",
  },
  {
    title: "Individuals",
    icon: "👤",
    items: ["Professionals", "Entrepreneurs", "Expats", "Remote Workers", "Gadget Users"],
    bg: "from-[#0E8E8E] to-[#0E8E8E]/80",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhoShouldAttend() {
  return (
    <section className="bg-[#F0F6FF] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#0E8E8E] font-semibold text-xs uppercase tracking-widest">
            Who Should Attend
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A4F8A] mt-2">
            This Summit is For You
          </h2>
          <p className="font-body text-gray-500 mt-3 text-sm max-w-lg mx-auto">
            Whether you run a business or are an individual looking to leverage technology, there is a seat for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-gradient-to-br ${group.bg} rounded-2xl p-8 shadow-sm`}
            >
              <h3 className="font-display font-black text-xl text-white mb-5 flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-white/80 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#C89B2A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
