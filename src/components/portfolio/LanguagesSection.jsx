import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages as LanguagesIcon } from 'lucide-react'; // Using a generic Languages icon

const LanguagesSection = ({ languages }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
      className="py-12"
    >
      <Card className="glass-card shadow-xl border border-purple-500/30">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <LanguagesIcon className="w-8 h-8 text-accent" />
            <CardTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Languages
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="p-4 bg-slate-800/50 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-purple-300">{lang.name}</h3>
                <p className="text-gray-400">{lang.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default LanguagesSection;