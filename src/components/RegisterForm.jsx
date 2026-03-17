import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    attending: "",
    inviteVia: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      // FormSubmit AJAX — sends to support@ictweare.com
      const res = await fetch("https://formsubmit.co/ajax/ictweare.support@ictweare.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company || "N/A",
          attending: form.attending,
          invite_via: form.inviteVia,
          _subject: "New Registration — Digital Bridges Summit",
          _captcha: "false",
          _template: "table",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A4F8A]/30 focus:border-[#1A4F8A] transition";

  return (
    <section id="register" className="bg-[#F5F7FA] py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center mb-10">
            <span className="text-teal font-semibold text-xs uppercase tracking-widest">
              Registration is Open
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-primary mt-2">
              Reserve Your Seat
            </h2>
            <div className="mt-3 mb-1">
              <span className="inline-flex items-center gap-2 bg-[#C89B2A] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                🎟️ Free Entry
              </span>
            </div>
            <p className="font-body text-gray-500 mt-3 text-sm">
              Secure your spot at the Digital Bridges Summit — Lagos, Nigeria · April 11, 2026
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:ictweare.support@ictweare.com"
              className="flex items-center gap-2 text-primary font-medium text-sm hover:text-teal transition-colors justify-center"
            >
              <span>✉️</span> ictweare.support@ictweare.com
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href="tel:+2349133706582"
              className="flex items-center gap-2 text-primary font-medium text-sm hover:text-teal transition-colors justify-center"
            >
              <span>📞</span> +234 913 370 6582
            </a>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 text-center shadow-sm border border-green-100"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display font-black text-2xl text-primary mb-2">
                Registration Received!
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                Thank you for registering for the Digital Bridges Summit.<br />
                We'll be in touch with event details. See you on <strong>April 11, 2026</strong> in Lagos.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[#1A4F8A]/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    Full Name <span className="text-[#1A4F8A]">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    Email Address <span className="text-[#1A4F8A]">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    WhatsApp Number <span className="text-[#1A4F8A]">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="WhatsApp Number"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    Company <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    Attending As <span className="text-[#1A4F8A]">*</span>
                  </label>
                  <select
                    name="attending"
                    required
                    value={form.attending}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="Individual">Individual</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-body text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wide">
                    Where should your invite be sent to? <span className="text-[#1A4F8A]">*</span>
                  </label>
                  <select
                    name="inviteVia"
                    required
                    value={form.inviteVia}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Email">Email</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl text-center">
                  <p className="text-red-600 text-sm font-medium">
                    Something went wrong. Please try again or contact us at{" "}
                    <a href="mailto:ictweare.support@ictweare.com" className="underline">ictweare.support@ictweare.com</a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-[#1A4F8A] text-white font-bold py-3.5 rounded-xl hover:bg-[#0E8E8E] transition-colors disabled:opacity-60 text-sm tracking-wide"
              >
                {loading ? "Submitting..." : "Reserve My Seat →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
