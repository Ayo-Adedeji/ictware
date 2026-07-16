import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import { SERVICE_CATEGORIES, CONTACT } from "../data/site";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "", // Individual | Business
  serviceCategory: "", // one of SERVICE_CATEGORIES ids
  message: "",
};

const inputClass =
  "w-full font-sans text-sm bg-bone-50 border border-slate-400/40 rounded-xl px-4 py-3 text-navy-950 " +
  "placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-colors";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  // Lazy initializer: prefill from query params on first mount (and when key changes).
  const [form, setForm] = useState(() => ({
    ...EMPTY,
    inquiryType: type ? type.charAt(0).toUpperCase() + type.slice(1) : "",
    serviceCategory: category || "",
  }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <motion.div
      className="overflow-x-hidden bg-bone-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      {/* Headline */}
      <section className="bg-navy-950 px-4 sm:px-6 pt-32 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-amber-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
              Contact
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-bone-50 leading-tight">
              Tell us what you need. We'll take it from there.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Form + Direct contact */}
      <section className="bg-bone-50 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <Reveal className="bg-white border border-slate-400/20 rounded-3xl p-7 sm:p-10">
            <form
              action="https://formsubmit.co/info@ictweare.com"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New ICT request via Ictware" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://ictweare.com/contact" />
              <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+234 ... / +44 ..."
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inquiryType" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                      I am a…
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={update("inquiryType")}
                      className={inputClass}
                    >
                      <option value="">Select…</option>
                      <option value="Individual">Individual</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="serviceCategory" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                      Service needed
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={form.serviceCategory}
                      onChange={update("serviceCategory")}
                      className={inputClass}
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-navy-950 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us what you need…"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <Button type="submit" variant="primary" tone="light" className="w-full sm:w-auto">
                  Send Request
                </Button>
              </form>
          </Reveal>

          {/* Direct contact */}
          <Reveal index={1} className="bg-navy-950 rounded-3xl p-7 sm:p-10 h-fit">
            <h2 className="font-heading font-semibold text-xl text-bone-50 mb-6">Direct contact</h2>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Phone (UK)</p>
                <a href={`tel:${CONTACT.phoneUK.replace(/[^+\d]/g, "")}`} className="text-bone-50/85 font-sans text-sm hover:text-amber-500 transition-colors">
                  {CONTACT.phoneUK}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-bone-50/85 font-sans text-sm hover:text-amber-500 transition-colors">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Hours</p>
                <p className="text-bone-50/85 font-sans text-sm leading-relaxed">{CONTACT.hours}</p>
              </div>
            </div>
            <p className="mt-6 text-slate-400 font-sans text-xs">
              We respond to all requests within business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
