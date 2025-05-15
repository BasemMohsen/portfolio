
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react'; // Using Zap for a dynamic "skills" icon

const SkillsSection = ({ skills }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="py-12"
    >
      <Card className="glass-card shadow-xl border border-purple-500/30">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-accent" />
            <CardTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Key Skills
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default SkillsSection;
  