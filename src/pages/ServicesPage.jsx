import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import BrandStrip from "../components/ui/BrandStrip";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceIcon from "../components/ui/ServiceIcon";
import { SERVICE_CATEGORIES } from "../data/site";

const INDIVIDUAL = {
  title: "For Individuals",
  desc: "Device setup, repairs, upgrades, and personal workspace support. One request, handled start to finish.",
};
const BUSINESS = {
  title: "For Businesses",
  desc: "Full ICT partnership: procurement, installs, security, support, and software, managed centrally.",
};

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <motion.div
      className="overflow-x-hidden bg-bone-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      {/* Intro */}
      <section className="bg-navy-950 px-4 sm:px-6 pt-36 pb-24 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
              What We Do
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-bone-50 leading-tight mb-6">
              Whatever the ICT need, we scope it, source it, install it, and support it.
            </h1>
            <p className="text-bone-50/75 text-base sm:text-lg leading-relaxed">
              Under one agreement, one invoice, one point of contact.
            </p>
          </Reveal>
        </div>
      </section>

      <BrandStrip label="Certifications & partners" />

      {/* Six categories — each anchored for future per-category request flow.
          Icon on the left, details in the middle, Request button on the right. */}
      <section className="bg-bone-50 py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {SERVICE_CATEGORIES.map((s, i) => (
            <Reveal
              key={s.id}
              as="article"
              id={s.id}
              className="scroll-mt-24 bg-white border border-slate-400/20 rounded-3xl p-8 sm:p-12 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start md:items-center"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-950 text-amber-500 shrink-0">
                <ServiceIcon glyph={s.glyph} />
              </span>

              <div>
                <h2 className="font-heading font-semibold text-lg sm:text-2xl text-navy-950 mb-2">
                  {`0${i + 1}. ${s.title}`}
                </h2>
                <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
                  {s.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {s.includes.map((inc) => (
                    <li
                      key={inc}
                      className="text-xs font-sans text-navy-800 bg-bone-50 border border-slate-400/30 rounded-full px-3 py-1"
                    >
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                to={`/contact?category=${s.id}`}
                variant="ghost"
                tone="light"
                className="md:ml-auto shrink-0 !text-sm"
              >
                Request this
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Individuals vs Businesses */}
      <section className="bg-navy-950 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Who It's For" title="Built for both sides" tone="navy" />
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal className="bg-navy-800 border border-white/10 rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-xl text-amber-500 mb-3">{INDIVIDUAL.title}</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">{INDIVIDUAL.desc}</p>
            </Reveal>
            <Reveal index={1} className="bg-navy-800 border border-white/10 rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-xl text-amber-500 mb-3">{BUSINESS.title}</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">{BUSINESS.desc}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone-50 py-20 px-4 sm:px-6 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-6">
            Have a specific ICT need?
          </h2>
          <Button to="/contact" variant="primary" tone="light">
            Request a Service
          </Button>
        </Reveal>
      </section>

      <Footer />
    </motion.div>
  );
}
