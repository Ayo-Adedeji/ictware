// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import BrandStrip from "../components/ui/BrandStrip";
import { BRANDS } from "../data/site";

const WHY = [
  "One accountable partner for every ICT need, not a patchwork of vendors",
  "Clear, transparent pricing agreed before work begins",
  "Support that continues after delivery, not just at the point of sale",
  "Deep bench across networking, security, software, and hardware, one team, full stack",
];

export default function AboutPage() {
  return (
    <motion.div
      className="overflow-x-hidden bg-bone-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      {/* Headline */}
      <section className="bg-navy-950 px-4 sm:px-6 pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
              About Ictware
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-bone-50 leading-tight">
              Built to be the last ICT vendor you ever need to look for.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bone-50 py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-navy-950 mb-6">
              Our Story
            </h2>
            <p className="text-slate-400 font-sans text-base leading-relaxed mb-5">
              Ictware started in Nigeria delivering end-to-end ICT service, procurement, installation,
              support, and custom software, for individuals and businesses tired of juggling multiple
              vendors and unreliable technicians. We are now bringing that same single-point-of-accountability
              model to the UK.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="bg-navy-950 py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
              Why Businesses Choose Us
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-bone-50 leading-tight">
              Four reasons teams stay with us
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {WHY.map((w, i) => (
              <Reveal key={w} index={i} className="bg-navy-800 border border-white/10 rounded-2xl p-7 flex gap-4">
                <span className="text-amber-500 text-xl leading-none mt-0.5">✓</span>
                <p className="text-bone-50/85 font-sans text-sm leading-relaxed">{w}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BrandStrip />

      {/* CTA */}
      <section className="bg-bone-50 py-20 px-4 sm:px-6 text-center">
          <Reveal className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy-950 mb-6">
              Let's talk about your ICT.
            </h2>
            <Button to="/contact" variant="primary" tone="light">
              Get in Touch
            </Button>
          </Reveal>
      </section>

      <Footer />
    </motion.div>
  );
}
