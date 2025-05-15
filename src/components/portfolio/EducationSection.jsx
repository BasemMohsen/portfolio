import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, Milestone } from 'lucide-react';

const EducationSection = ({ education, certifications }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      className="py-12"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="glass-card shadow-xl border border-purple-500/30">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-accent" />
              <CardTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="mb-4 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h3 className="text-xl font-semibold text-purple-300">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass-card shadow-xl border border-purple-500/30">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-accent" />
              <CardTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Certifications
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            {certifications.map((cert, index) => (
               <motion.div 
                key={index} 
                className="flex items-center space-x-3 mb-3 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Milestone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">{cert.name}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default EducationSection;