import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import HeroScene from './HeroScene';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroScene />
        </Suspense>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-dark-300/50 backdrop-blur-sm border border-primary-500/30"
          >
            <Shield className="w-4 h-4 mr-2 text-primary-500" />
            <span className="text-sm font-medium">Your Trusted Cybersecurity Partner</span>
          
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 max-w-4xl"
          >
            Advanced <span className="gradient-text">Cyber Security</span> Solutions for the Digital Age
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-2xl text-lg text-gray-300"
          >
            LynuxSphere provides comprehensive security services including vulnerability
            assessment, penetration testing, and infrastructure security to protect your
            business from evolving cyber threats.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="btn btn-primary px-8 py-4"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="btn btn-secondary group"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;