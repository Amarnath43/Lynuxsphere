import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const partners = [
  {
    name: "PSTM",
    fullName: "Progressive Staffing And Talent Management",
    logo: "pstm.png",
    description: "Expert staffing solutions and talent management services"
  },
  {
    name: "Gen Savvy",
    fullName: "Gen Savvy",
    logo: "gensavy.logo1.jpg",
    description: "Innovative technology solutions and digital transformation"
  }
];

const PartnersSection: React.FC = () => {
  return (
    <section className="section bg-dark-400 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
            <Users size={16} className="mr-2" />
            <span>Our Clients</span>
          </div>
          <h2 className="mb-6">Our Trusted <span className="gradient-text">Partners</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We take pride in serving organizations that trust us with their cybersecurity needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card p-8 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <div className="w-full max-w-md h-40 mb-6 relative flex items-center justify-center bg-white rounded-lg p-6">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.fullName}</h3>
              <p className="text-gray-400">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;