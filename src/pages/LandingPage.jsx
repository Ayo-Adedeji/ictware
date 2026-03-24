import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import PremiumHero from "../components/PremiumHero";
import ProblemSection from "../components/ProblemSection";
import RealityShift from "../components/RealityShift";
import SolutionPillars from "../components/SolutionPillars";
import WhoIsThisFor from "../components/WhoIsThisFor";
import WhatToExpect from "../components/WhatToExpect";
import EventDetails from "../components/EventDetails";
import ProductShowcase from "../components/ProductShowcase";
import InvitationForm from "../components/InvitationForm";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#C89B2A] origin-left z-[100]"
    />
  );
}

export default function LandingPage() {
  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ScrollProgress />
      <Navbar />
      <PremiumHero />
      <ProblemSection />
      <RealityShift />
      <SolutionPillars />
      <WhoIsThisFor />
      <WhatToExpect />
      <EventDetails />
      <ProductShowcase />
      <InvitationForm />
      <Footer />
      <FloatingButtons />
    </motion.div>
  );
}
