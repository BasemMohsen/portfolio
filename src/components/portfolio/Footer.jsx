
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Github } from 'lucide-react'; // Added Github as an example

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="py-8 mt-12 border-t border-slate-700 text-center"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/basem-abdelkawi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:basemmohsen@outlook.com" className="text-gray-400 hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
          <a href="tel:+48511579964" className="text-gray-400 hover:text-accent transition-colors">
            <Phone size={24} />
          </a>
          {/* Example GitHub link, replace with actual if available */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
            <Github size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Built with React, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
  