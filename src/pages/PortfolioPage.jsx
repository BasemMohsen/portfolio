import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/portfolio/HeroSection';
import SummarySection from '@/components/portfolio/SummarySection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import LanguagesSection from '@/components/portfolio/LanguagesSection';
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
          "Refactoring code and enhancing business functions by 30%.",
          "Enhanced existing APIs and developed new APIs using .Net 6 to meet evolving requirements, integrating the service with Azure resources via Microsoft Graph.",
          "Write unit tests using xUnit for APIs, components.",
          "Deployed solutions to various environments and maintained Swagger documentation for easy consumption by developers.",
          "Supported production by troubleshooting and resolving API-related issues, ensuring uninterrupted service for users across different environments."
        ]
      },
      {
        role: "Senior Software Engineer",
        company: "EPAM Systems",
        duration: "Nov 2022 – Present", 
        client: "PPG Industries",
        project: "Elevate (Cloud-Based POS Solution)",
        description: [
          "Developed and enhanced a cloud-based Point of Sales (POS) solution for PPG Industries, integrating with external systems (tax engine, price & promo engine, ERP, and external order systems) and facilitating communication with POS devices (payment terminals, cash drawers, tape printers, barcode scanners).",
          "Worked in a Scrum team, using Angular for the front end and .NET Core 3.1 for the back end to deliver a high-performance, scalable POS platform.",
          "Designed and implemented features across an infrastructure consisting of over 10 microservices.",
          "Integrated RabbitMQ for asynchronous messaging and Entity Framework for database management, ensuring efficient data operations with SQL Server.",
          "Leveraged Azure services and employed Azure DevOps for task management and CI/CD pipelines, facilitating streamlined development and deployments across multiple environments.",
          "Improved system performance through feature enhancements and optimizations while adhering to Agile processes."
        ]
      },
      {
        role: "Senior Software Engineer",
        company: "Youxel Technology",
        duration: "Oct 2021 – Oct 2022",
        project: "Mobily (Customizable Self-Service Portal)",
        description: [
          "Developed and enhanced APIs, created new services, and fixed bugs for a self-service web portal allowing employees to request services through an approval workflow.",
          "Collaborated on microservice-based architecture using .NET Core 3.1, C#, SQL Server, RabbitMQ, and Azure.",
          "Integrated BPM workflows and employed CI/CD pipelines for seamless deployments across multiple environments.",
          "Enhanced code quality and maintainability , reducing refactoring time by 20–40% and improving overall development efficiency.",
          "Improvements to performance, efficiency",
          "Utilized Azure DevOps for task management and version control, adhering to Scrum methodology.",
          "Conducted client demos and ensured smooth delivery of project features."
        ]
      },
      {
        role: "Software Engineer",
        company: "ITWorx",
        duration: "Dec 2019 – Sep 2021",
        project: "Kalio-commerce (E-commerce Platform)",
        description: [
          "Developed and maintained an e-commerce product used by various clients in the USA, focusing on managing orders, handling payments, and integrating with PayPal.",
          "Fixed bugs, implemented new features, and enhanced the application using ASP.NET Web Forms.",
          "Optimized database performance to improve application speed and reliability.",
          "Deployed changes across multiple environments and ensured smooth production support by addressing client issues and resolving tickets promptly.",
          "Designed and optimized 100+ complex stored procedures and views , reducing query execution times by up to 40% and improving overall database performance."
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor’s in computer science",
        institution: "Egypt - Fayoum University"
      }
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Fundamentals (AZ-900)"
      }
    ],
    skills: [
      "C#", ".NET Core", "ASP.NET MVC", "Web Forms", "Azure", "Azure DevOps", 
      "CI/CD Pipelines", "Microservices Architecture", "Web API", "REST", "Swagger",
      "SQL Server", "Entity Framework", "LINQ", "Database Optimization",
      "Angular", "JavaScript", "HTML", "CSS", "Agile", "Scrum"
    ],
    languages: [
      { name: "English", proficiency: "Fluent" },
      { name: "Arabic", proficiency: "Native" }
    ]
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
        <EducationSection education={portfolioData.education} certifications={portfolioData.certifications} />
        <LanguagesSection languages={portfolioData.languages} />
      </motion.main>
      <Footer name={portfolioData.name} />
    </div>
  );
};

export default PortfolioPage;