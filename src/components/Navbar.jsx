import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/ICT-WEARE--V2-TRT-b.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToRegister = () => {
    setMenuOpen(false);
    document.getElementById("invitation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {!logoError ? (
            <img
              src={logo}
              alt="Digital Bridges Summit"
              className="h-10 w-auto"
              style={{ maxWidth: "220px", display: "block" }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-display font-bold text-xl text-primary">
              Digital Bridges Summit
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/live-sales"
            className="text-secondary font-medium hover:text-teal transition-colors text-sm"
          >
            Live Sale
          </Link>
          <button
            onClick={scrollToRegister}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-teal transition-colors text-sm"
          >
            Register Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link
            to="/live-sales"
            onClick={() => setMenuOpen(false)}
            className="text-secondary font-medium hover:text-teal transition-colors text-sm"
          >
            Live Sale
          </Link>
          <button
            onClick={scrollToRegister}
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-teal transition-colors w-full text-sm"
          >
            Register Now
          </button>
        </div>
      )}
    </motion.nav>
  );
}


