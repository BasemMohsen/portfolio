
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const SummarySection = ({ summary }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="py-12"
    >
      <Card className="glass-card shadow-xl border border-purple-500/30">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <Info className="w-8 h-8 text-accent" />
            <CardTitle className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Professional Summary
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-300 leading-relaxed">
            {summary}
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default SummarySection;
  