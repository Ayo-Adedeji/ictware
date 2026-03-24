import { motion } from "framer-motion";

export default function EventDetails() {
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
          <p className="text-[#0E8E8E] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Next Steps & Details</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0D1B2A] leading-tight">
            Your First Step<br />to Control
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { label: "Personal", title: "Digital Life Review", org: "ServiceIS" },
            { label: "Business", title: "SME IT Health Check", org: "ictweare" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white border border-[#1A4F8A]/10 rounded-2xl p-8"
            >
              <p className="text-[#C89B2A] text-xs uppercase tracking-widest mb-3">{item.label}</p>
              <h3 className="font-display font-black text-2xl text-[#1A4F8A] mb-2">{item.title}</h3>
              <p className="font-body text-gray-400 text-sm">Powered by {item.org}</p>
            </motion.div>
          ))}
        </div>

        {/* Event card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#0D1B2A] rounded-2xl p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Event", value: "Digital Bridges Summit 2026" },
            { label: "Location", value: "Lagos — Premium venue shared after confirmation" },
            { label: "Date", value: "April 11, 2026" },
            { label: "Duration", value: "3 Hours" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2">{item.label}</p>
              <p className="font-display font-black text-white text-base leading-snug">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Exclusivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 border border-[#C89B2A]/30 rounded-2xl p-8 text-center"
        >
          <p className="text-[#C89B2A] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Exclusivity</p>
          <h3 className="font-display font-black text-3xl text-[#0D1B2A] mb-6">Attendance Is Limited</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {["Curated event", "No open registration", "Invitation only"].map((item) => (
              <p key={item} className="font-body text-gray-500 text-sm flex items-center gap-2 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B2A]" />
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
