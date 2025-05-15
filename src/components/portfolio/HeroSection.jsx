
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, MapPin, UserCircle } from 'lucide-react';

const HeroSection = ({ name, title, contact }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-24 text-center glass-card rounded-xl shadow-2xl overflow-hidden border border-purple-500/30"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-32 h-32 mb-6 border-4 border-primary shadow-lg">
            <AvatarImage src="https://example.com/your-profile-pic.jpg" alt={name} />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 font-medium">{title}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl mx-auto mb-10">
          <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
            <Mail className="w-5 h-5 text-accent" />
            <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-accent transition-colors text-sm">{contact.email}</a>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
            <Phone className="w-5 h-5 text-accent" />
            <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-accent transition-colors text-sm">{contact.phone}</a>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
            <Linkedin className="w-5 h-5 text-accent" />
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors text-sm">{contact.linkedin}</a>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-gray-300 text-sm">{contact.address}</span>
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl"
            onClick={() => window.location.href = `mailto:${contact.email}`}
          >
            <Mail className="mr-2 h-5 w-5" /> Contact Me
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
  