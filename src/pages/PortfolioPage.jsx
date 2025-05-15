
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/portfolio/HeroSection';
import SummarySection from '@/components/portfolio/SummarySection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import Footer from '@/components/portfolio/Footer';
import ThemeToggle from '@/components/portfolio/ThemeToggle';

const PortfolioPage = () => {
  const portfolioData = {
    name: "Basem Abdelkawi",
    title: "Senior .NET Engineer | .NET / Azure / Microservices",
    contact: {
      address: "Krakow, Poland",
      phone: "+48511579964",
      email: "basemmohsen@outlook.com",
      linkedin: "Basem Abdelkawi", 
      linkedinUrl: "https://www.linkedin.com/in/basem-abdelkawi/", 
    },
    summary: "Highly skilled and experienced Senior .NET Engineer with over 5 years of hands-on experience in designing and developing scalable, high-performance web applications and services. Expertise in .NET Core, C#, and Azure, with a proven track record of delivering solutions that drive business results. Adept at leading teams, optimizing processes, and mentoring developers. Passionate about cloud-based technologies, microservices, and leveraging cutting-edge solutions to meet client needs.",
    experience: [
      {
        role: "Senior Software Engineer",
        company: "EPAM Systems",
        duration: "Nov 2022 – Present",
        client: "UBS",
        project: "SPPS (Service Principal Provisioning Service)",
        description: [
          "Contributed to the development and maintenance of SPPS, a Web API-based service designed to manage Azure service principals for teams within UBS. The service is deployed across multiple cloud environments (ENG, TEST, PROD) and supports automated credentials management and access control in line with CI/CD pipelines.",
          "Refactoring code and enhancing business functions by 30%."
        ]
      }
    ],
    skills: [".NET Core", "C#", "Azure", "Microservices", "Web API", "CI/CD", "Agile Methodologies", "Problem Solving"]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100 p-4 sm:p-8 relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl space-y-12"
      >
        <HeroSection name={portfolioData.name} title={portfolioData.title} contact={portfolioData.contact} />
        <SummarySection summary={portfolioData.summary} />
        <ExperienceSection experience={portfolioData.experience} />
        <SkillsSection skills={portfolioData.skills} />
      </motion.main>
      <Footer name={portfolioData.name} />
    </div>
  );
};

export default PortfolioPage;
  