import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Network, Code, Database, Lock, FileWarning, AlertTriangle } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: ShieldCheck,
    title: "Vulnerability Assessment & Penetration Testing",
    description: "In-depth analysis of potential security risks affecting your applications. We identify, assess, and help mitigate vulnerabilities to ensure robust protection against cyber threats."
  },
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    description: "Manual penetration testing to uncover vulnerabilities in websites and web applications. Our thorough security assessment identifies weaknesses that automated tools often miss."
  },
  {
    icon: Network,
    title: "Network & Infrastructure Penetration Testing",
    description: "Detect and address security gaps in networks, systems, hosts, and devices. We help you fortify network defenses and prevent unauthorized access to critical systems."
  },
  {
    icon: Code,
    title: "Secure Code Review",
    description: "Comprehensive analysis of your application's source code to identify security flaws, vulnerabilities, and coding errors that could lead to potential breaches."
  },
  {
    icon: Database,
    title: "Database Security Assessment",
    description: "Evaluation of database configurations, access controls, and encryption to ensure your sensitive data remains protected from unauthorized access and breaches."
  },
  {
    icon: Lock,
    title: "Cloud Security Assessment",
    description: "Analysis of cloud infrastructure and configurations to identify misconfigurations, compliance issues, and security gaps in your cloud environment."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-dark-500 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
            <FileWarning size={16} className="mr-2" />
            <span>Expert Security Services</span>
          </div>
          <h2 className="mb-6">Comprehensive <span className="gradient-text">Security Solutions</span></h2>
          <p className="text-gray-400 text-lg">
            Our specialized security services help organizations detect, analyze, 
            and mitigate security risks before they can be exploited.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 rounded-xl bg-dark-300 border border-dark-200"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 w-16 h-16 flex items-center justify-center rounded-full bg-warning-500/20 text-warning-500">
              <AlertTriangle size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-2">Are Your Digital Assets Protected?</h3>
              <p className="text-gray-400 mb-4">
                Cyber threats are constantly evolving. Regular security assessments are essential to 
                identify new vulnerabilities and keep your defenses strong.
              </p>
              <a href="#contact" className="btn btn-primary">
                Get Your Security Assessment
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;