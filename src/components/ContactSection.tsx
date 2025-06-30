import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    try {
      setLoading(true)
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    toast.error(`Failed to send. ${error?.text || 'Try again later.'}`);
  } finally {
    setLoading(false);
  }

    
    
  };

  return (
    <section id="contact" className="section bg-dark-500 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center mb-4 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
            <Mail size={16} className="mr-2" />
            <span>Get In Touch</span>
          </div>
          <h2 className="mb-6">Ready to Secure Your <span className="gradient-text">Digital Assets</span>?</h2>
          <p className="text-gray-400 text-lg">
            Contact us today to discuss your cybersecurity needs and learn how our expertise 
            can help protect your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-400 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-400 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-400 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                  >
                    <option value="">Select a service</option>
                    <option value="VAPT">Vulnerability Assessment & Penetration Testing</option>
                    <option value="WAPT">Web Application Penetration Testing</option>
                    <option value="Network">Network & Infrastructure Security</option>
                    <option value="Other">Other Services</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-400 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ?'Loading...': 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:info@lynuxsphere.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                      info@lynuxsphere.com
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+916305431089" className="text-gray-400 hover:text-primary-500 transition-colors">
                      +91 630 543 1089
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Hyderabad, India <br />
                      (Services available worldwide)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-dark-400 rounded-lg">
                <h4 className="text-lg font-medium mb-3">Working Hours</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;