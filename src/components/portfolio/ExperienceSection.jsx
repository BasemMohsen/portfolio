
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Users, Target } from 'lucide-react';

const ExperienceSection = ({ experience }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="py-12"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="glass-card shadow-xl border border-purple-500/30 overflow-hidden">
              <CardHeader className="bg-slate-800/30 p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Briefcase className="w-7 h-7 text-accent" />
                  <CardTitle className="text-2xl text-purple-300">{job.role}</CardTitle>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{job.company}</span>
                  </div>
                  <span className="hidden sm:inline">|</span>
                  <span>{job.duration}</span>
                </div>
                {job.client && (
                  <div className="flex items-center mt-1 text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-purple-400" />
                    <span>Client: {job.client}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                {job.project && (
                  <div className="mb-4">
                    <div className="flex items-center text-lg font-semibold text-purple-300 mb-1">
                       <Target className="w-5 h-5 mr-2 text-accent" />
                       Project: {job.project}
                    </div>
                  </div>
                )}
                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                  {job.description.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
  