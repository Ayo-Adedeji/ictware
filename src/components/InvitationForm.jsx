import { useState } from "react";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function InvitationForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", role: "",
    managesBusiness: "", digitalLevel: "", interest: "",
    goals: "", referral: "",
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
      const res = await fetch("https://formsubmit.co/ajax/ictweare.support@ictweare.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "Private Invitation Request — Digital Bridges Summit",
          _captcha: "false",
          _template: "table",
        }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 font-body text-sm text-gray-800 placeholder-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-[#1A4F8A]/30 focus:border-[#1A4F8A] " +
    "transition-all duration-200 hover:border-gray-300";
  const labelClass = "block font-body text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide";

  return (
    <section id="invitation-form" className="bg-[#0D1B2A] py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#C89B2A] text-xs uppercase tracking-[0.25em] font-semibold mb-4">Final Step</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-tight tracking-tight mb-4">
            Request Private Invitation
          </h2>
          <p className="font-body text-white/50 text-base leading-relaxed">
            Once your request is reviewed, you will receive confirmation and full event details.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-[#C89B2A]/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#C89B2A" strokeWidth="2.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="font-display font-black text-2xl text-white mb-4">Your request has been received.</h3>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
              Due to the curated nature of this event, attendance is reviewed individually.<br /><br />
              Please check your WhatsApp within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name <span className="text-[#C89B2A]">*</span></label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number <span className="text-[#C89B2A]">*</span></label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Email Address <span className="text-[#C89B2A]">*</span></label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Your Role <span className="text-[#C89B2A]">*</span></label>
                <select name="role" required value={form.role} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select role...</option>
                  <option>Founder</option>
                  <option>Executive</option>
                  <option>Professional</option>
                  <option>Business Owner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Do you manage a business? <span className="text-[#C89B2A]">*</span></label>
                <select name="managesBusiness" required value={form.managesBusiness} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Digital Environment Level <span className="text-[#C89B2A]">*</span></label>
                <select name="digitalLevel" required value={form.digitalLevel} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select...</option>
                  <option>Basic — minimal digital tools</option>
                  <option>Moderate — some systems in place</option>
                  <option>Advanced — fully digital operations</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Primary Interest <span className="text-[#C89B2A]">*</span></label>
                <select name="interest" required value={form.interest} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select...</option>
                  <option>Business IT Governance</option>
                  <option>Personal Digital Security</option>
                  <option>Both</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>What do you want to gain? <span className="text-[#C89B2A]">*</span></label>
              <textarea name="goals" required value={form.goals} onChange={handleChange} rows={3} placeholder="Describe what you hope to achieve..." className={inputClass + " resize-none"} />
            </div>

            <div>
              <label className={labelClass}>How did you hear about us?</label>
              <select name="referral" value={form.referral} onChange={handleChange} className={inputClass}>
                <option value="">Select...</option>
                <option>WhatsApp</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or contact{" "}
                <a href="mailto:ictweare.support@ictweare.com" className="underline">ictweare.support@ictweare.com</a>
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 24px rgba(200,155,42,0.35)" } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full bg-[#C89B2A] text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-60 text-sm tracking-wide cursor-pointer"
            >
              {loading ? <><Spinner />Submitting...</> : "Submit Request →"}
            </motion.button>

            <p className="text-white/30 text-xs text-center">
              You will receive confirmation via WhatsApp if selected.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
