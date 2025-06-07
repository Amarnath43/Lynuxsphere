import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Users, Award } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Manual Security Assessments",
    description: "We go beyond automated testing to identify both technical vulnerabilities and business logic flaws."
  },
  {
    icon: Shield,
    title: "Comprehensive VAPT Services",
    description: "Our thorough vulnerability assessment and penetration testing helps organizations detect and mitigate security risks."
  },
  {
    icon: Users,
    title: "Experienced Security Team",
    description: "Our team of security professionals brings years of experience in identifying and resolving complex security challenges."
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-dark-400 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
              <Users size={16} className="mr-2" />
              <span>About LynuxSphere</span>
            </div>
            <h2 className="mb-6">Your Trusted Partner in <span className="gradient-text">IT Security</span></h2>
            <p className="text-gray-300 text-lg mb-6">
              LynuxSphere is a leading Information Security Consulting firm specializing in manual 
              security assessments for web and mobile applications. We help organizations enhance their
              cybersecurity posture, comply with industry regulations, and safeguard their critical assets.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="mr-4 w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/10 rounded-lg"></div>
              
              <div className="relative z-10 bg-dark-300 rounded-xl overflow-hidden p-6 border border-dark-200">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-500/20">
                    <Shield className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-center mb-6">Our Expertise</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1" />
                    <p>Comprehensive Vulnerability Assessments & Penetration Testing (VAPT)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1" />
                    <p>Web & Mobile Application Security Testing</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1" />
                    <p>Network & Infrastructure Security Assessments</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1" />
                    <p>Secure Code Reviews</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-500 mr-3 mt-1" />
                    <p>Compliance with Industry Regulations</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-dark-400 rounded-lg">
                  <div className="flex items-center">
                    <Award className="w-10 h-10 text-accent-500 mr-4" />
                    <div>
                      <h4 className="font-semibold">Certified Professionals</h4>
                      <p className="text-sm text-gray-400">Our team holds industry-leading certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;