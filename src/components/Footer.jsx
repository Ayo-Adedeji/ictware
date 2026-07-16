import { Link } from "react-router-dom";
import Logo from "./ui/Logo";
import { CONTACT, SOCIALS } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-bone-50 py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          {/* Logo + mission */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo withText />
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              One accountable ICT partner for individuals and businesses — from procurement and
              installation to support and custom software.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Quick Links</p>
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-bone-50/80 hover:text-amber-500 transition-colors w-fit font-sans text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Contact</p>
            {/* <a
              href={`tel:${CONTACT.phoneNigeria}`}
              className="text-bone-50/80 hover:text-amber-500 transition-colors w-fit font-sans text-sm"
            >
              Nigeria: {CONTACT.phoneNigeriaDisplay}
            </a> */}
            <a
              href={`tel:${CONTACT.phoneUK.replace(/[^+\d]/g, "")}`}
              className="text-bone-50/80 hover:text-amber-500 transition-colors w-fit font-sans text-sm"
            >
              UK: {CONTACT.phoneUK}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-bone-50/80 hover:text-amber-500 transition-colors w-fit font-sans text-sm"
            >
              {CONTACT.email}
            </a>
            <p className="text-slate-400 font-sans text-sm">{CONTACT.hours}</p>
          </div>
        </div>

        {/* Socials + copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 font-sans text-xs text-center sm:text-left">
            © {year} Ictware. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors font-sans text-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
