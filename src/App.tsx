import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-500 text-white">
      <div className="bg-cyber-grid bg-dark-400 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 to-dark-500/95"></div>
        <Header />
        <HeroSection />
      </div>
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;