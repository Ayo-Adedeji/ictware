import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile takeover panel is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `font-sans font-medium text-sm transition-colors cursor-pointer ${
      isActive ? "text-amber-500" : "!text-bone-50 hover:text-amber-500"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `font-heading font-semibold text-xl tracking-wide transition-colors cursor-pointer ${
      isActive ? "text-amber-500" : "!text-bone-50 hover:text-amber-500"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-navy-950 shadow-lg shadow-black/20" : "bg-navy-950"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo (left) */}
          <Logo />

          {/* Desktop nav (right) */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={navLinkClass}>
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" tone="navy" className="!px-5 !py-2.5 !text-sm">
              Request a Service
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-bone-50 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-bone-50 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-bone-50 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile takeover panel (80vh) — rendered outside the nav so the nav's
          transform/backdrop-filter cannot blur or clip it */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 bg-navy-950 border-t border-white/10 flex flex-col transition-[height] duration-300 ${
          menuOpen ? "h-[80vh] visible pointer-events-auto" : "h-0 invisible pointer-events-none overflow-hidden"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-start gap-4 text-center px-6 pt-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              {l.label}
            </NavLink>
          ))}
          <Button
            to="/contact"
            variant="primary"
            tone="navy"
            className="mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Request a Service
          </Button>
        </div>
      </div>
    </>
  );
}
