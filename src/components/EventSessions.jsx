import { motion } from "framer-motion";

const sessions = [
  {
    num: "01",
    title: "ICT Concierge & Managed IT Services",
    desc: "Introducing Secure, Seamless Access to Concierge & Managed IT Services.",
  },
  {
    num: "02",
    title: "Why Most ICT Investments Fail — Keynote",
    desc: "Keynote address: understanding the root causes and what to do about it.",
  },
  {
    num: "03",
    title: "Data Privacy and Security",
    desc: "How to protect sensitive data, stay compliant, and build customer trust.",
  },
  {
    num: "04",
    title: "RFID Staff Monitoring Solutions",
    desc: "Powering Team Productivity Through RFID-Enabled Staff Monitoring Solutions.",
  },
  {
    num: "05",
    title: "Device Marketplace — Exclusive Deals",
    desc: "Exclusive Discounts on Top-Tier Devices — Dell Laptops, MacBooks, iPhones & Accessories for Work and Everyday Life.",
  },
];

export default function EventSessions() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-teal font-semibold text-xs uppercase tracking-widest">
            Agenda
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-primary mt-2">
            Event Sessions
          </h2>
          <p className="font-body text-gray-500 mt-3 text-sm">
            Connecting Business, People, and Possibilities through Technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#1A4F8A]/15" />

          <div className="space-y-6">
            {sessions.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-start gap-6 pl-14 relative"
              >
                {/* Dot */}
                <div className="absolute left-3.5 top-4 w-3 h-3 rounded-full bg-[#1A4F8A] border-2 border-white ring-2 ring-[#1A4F8A]/30" />

                <div className="bg-[#F5F7FA] rounded-xl px-6 py-4 flex-1 border border-[#1A4F8A]/10 hover:border-[#1A4F8A]/30 transition-colors">
                  <span className="font-display font-bold text-[#C89B2A] text-xs uppercase tracking-widest">
                    Session {s.num}
                  </span>
                  <p className="font-body font-bold text-primary mt-1 text-base sm:text-lg">
                    {s.title}
                  </p>
                  <p className="font-body text-gray-500 text-sm mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
