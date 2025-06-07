import React from 'react';
import { Shield, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-display font-bold">LynuxSphere</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in cybersecurity. We provide comprehensive security solutions to protect your digital assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray-400 hover:bg-primary-500 hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Vulnerability Assessment</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Penetration Testing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Web Application Security</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Network Security</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-500 transition-colors">Secure Code Review</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Security Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LynuxSphere. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;