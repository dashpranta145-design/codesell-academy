import React from "react";
import FloatingBackground from "./components/FloatingBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Team from "./components/Team";
import Founder from "./components/Founder";
import FAQ from "./components/FAQ";
import WhyCodeSell from "./components/WhyCodeSell";

import CourseDetail from "./components/CourseDetail";
import TeamPage from "./components/TeamPage";
import Coding from "./components/Coding";
import DigitalMarketing from "./components/DigitalMarketing";
import Spoken from "./components/Spoken";
import ContactPage from "./components/ContactPage";
import ChatBot from "./components/ChatBot";

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-black relative">
      <FloatingBackground />
      <main className="relative z-10">
        <Hero />
        <Courses />
        <Founder />
        <Team />
        <FAQ />
        <WhyCodeSell />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseDetail />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/blog/coding" element={<Coding />} />
        <Route path="/blog/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/blog/spoken-english" element={<Spoken />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <ChatBot />
    </Router>
  );
};

export default App;
