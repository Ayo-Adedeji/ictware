import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutEvent from "../components/AboutEvent";
import WhatYouLearn from "../components/WhatYouLearn";
import IctWeareSection from "../components/IctWeareSection";
import WhoShouldAttend from "../components/WhoShouldAttend";
import EventSessions from "../components/EventSessions";
import ProductShowcase from "../components/ProductShowcase";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutEvent />
      <WhatYouLearn />
      <IctWeareSection />
      <WhoShouldAttend />
      <EventSessions />
      <ProductShowcase />
      <RegisterForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
