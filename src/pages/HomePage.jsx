import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import BrandStrip from "../components/ui/BrandStrip";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceIcon from "../components/ui/ServiceIcon";
import {
  SERVICE_CATEGORIES,
  PROCESS_STEPS,
  TESTIMONIALS,
} from "../data/site";

const TRUST_POINTS = [
  "15+ years of combined ICT delivery experience",
  "Trusted by SMEs, retailers, and institutions",
  "One point of contact, zero vendor confusion",
  "Transparent pricing, no hidden costs",
];

// Hero scattered-element assemble positions (translate offsets + rotation/scale)
const heroElements = [
  { tx: "-12vw", ty: "-8vh", tr: "-6deg", ad: 80, content: "eyebrow" },
  { tx: "14vw", ty: "-10vh", tr: "5deg", ad: 160, content: "headline" },
  { tx: "-10vw", ty: "12vh", tr: "4deg", ad: 240, content: "subhead" },
  { tx: "12vw", ty: "14vh", tr: "-5deg", ad: 320, content: "ctas" },
  { tx: "0vw", ty: "-18vh", tr: "0deg", ad: 400, content: "badge" },
];

function HeroElement({ tx, ty, tr, ad, children }) {
  return (
    <div
      className="assemble"
      style={{
        "--tx": tx,
        "--ty": ty,
        "--tr": tr,
        "--ad": `${ad}ms`,
        "--td": "550ms",
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <motion.div
      className="overflow-x-hidden bg-bone-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden px-4 sm:px-6 pt-20 pb-16">
        {/* Ambient glow accents */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <HeroElement {...heroElements[4]}>
            <span className="inline-block border border-amber-500 text-amber-500 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Now serving the UK
            </span>
          </HeroElement>

          <HeroElement {...heroElements[1]}>
            <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-bone-50 leading-tight mb-6">
              One ICT Partner.
              <span className="block text-amber-500">Every Solution.</span>
            </h1>
          </HeroElement>

          <HeroElement {...heroElements[2]}>
            <p className="text-bone-50/75 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              From networking and security to procurement, custom software, and full IT support, Ictware
              handles the entire ICT lifecycle for individuals and businesses, without vendor confusion.
            </p>
          </HeroElement>

          <HeroElement {...heroElements[3]}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/contact" variant="primary" tone="navy">
                Request a Service
              </Button>
              <Button to="/services" variant="ghost" tone="navy">
                See What We Do
              </Button>
            </div>
          </HeroElement>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-navy-800 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center">
          {TRUST_POINTS.map((p, i) => (
            <Reveal
              key={p}
              index={i}
              className="flex items-center gap-2.5 justify-center"
            >
              <span className="text-amber-500 text-lg leading-none">✓</span>
              <p className="text-bone-50/85 font-sans text-sm">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <BrandStrip />

      {/* SERVICES OVERVIEW GRID */}
      <section className="bg-bone-50 py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Do"
            title="Six ways we take ICT off your plate"
          >
            Explore the full scope of our services, each one handled end to end under one agreement.
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {SERVICE_CATEGORIES.map((s, i) => (
              <Reveal key={s.id} index={i} as={Link} to={`/services#${s.id}`}>
                <div className="group h-full bg-white border border-slate-400/20 rounded-2xl p-7 hover:border-amber-500 hover:shadow-xl hover:shadow-navy-950/5 transition-all duration-300 cursor-pointer">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-950 text-amber-500 mb-5">
                    <ServiceIcon glyph={s.glyph} />
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-navy-950 mb-3 group-hover:text-amber-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-sm leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-block text-amber-500 font-sans text-sm font-semibold">
                    Learn more →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-navy-950 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="How We Work" title="A simple, accountable process" tone="navy">
            One request in, one team through to delivery, no chasing vendors.
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} index={i} className="relative">
                <div className="bg-navy-800 border border-white/10 rounded-2xl p-7 h-full">
                  <span className="font-heading font-bold text-4xl text-amber-500/80">{`0${i + 1}`}</span>
                  <h3 className="font-heading font-semibold text-lg text-bone-50 mt-3 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bone-50 py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="What Clients Say" title="Trusted to deliver, and to stay">
            Real feedback from the organisations we support.
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} index={i} className="bg-white border border-slate-400/20 rounded-2xl p-7">
                <span className="text-amber-500 text-3xl leading-none font-heading">“</span>
                <p className="text-navy-800 font-sans text-sm leading-relaxed mt-2 mb-5">{t.quote}</p>
                <p className="text-amber-500 font-sans text-xs font-semibold uppercase tracking-wide">
                  {t.author}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="bg-navy-800 py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-bone-50 leading-tight mb-4">
              Ready for ICT that just works?
            </h2>
            <p className="text-slate-400 font-sans mb-10 max-w-xl mx-auto">
              Two ways to get started. Tell us who you are and we'll route your request to the right team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact?type=individual" variant="primary" tone="navy">
                I'm an Individual
              </Button>
              <Button to="/contact?type=business" variant="primary" tone="navy">
                I'm a Business
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
