"use client";

import { motion } from 'framer-motion';
import { Briefcase, Award, Zap, Heart, Building, TrendingUp, Brain } from 'lucide-react';

const experiences = [
    {
      id: 1,
      title: "AI Intern",
      company: "Electronic Payment and Services Pvt Ltd",
      location: "Mumbai, India",
      duration: "Jan 2025 - Present",
      icon: <Brain />,
      description: "Developing cutting-edge AI solutions for financial technology, focusing on machine learning models for payment processing and fraud detection.",
      tech: ["Python", "TensorFlow", "Machine Learning", "FinTech"],
    },
    {
      id: 2,
      title: "Information Technology Intern",
      company: "Yes Securities India Ltd",
      location: "Mumbai, India",
      duration: "May 2024 - July 2024",
      icon: <TrendingUp />,
      description: "Gained hands-on experience in financial technology, working on trading systems and market data analysis for securities trading.",
      tech: ["Python", "Data Analysis", "SQL", "Automation"],
    },
    {
      id: 3,
      title: "Volunteer",
      company: "Being Animal Foundation",
      location: "Mumbai, India",
      duration: "May 2022 - June 2022",
      icon: <Heart />,
      description: "Contributed to animal welfare initiatives, helping with rescue operations and awareness campaigns for animal rights and protection.",
      tech: ["Community Outreach", "Social Media", "Volunteering"],
    }
];

const achievements = [
    {
      title: "950+ Downloads on HuggingFace",
      description: "Fine-tuned multiple LLMs with significant community adoption.",
      icon: <Award />,
    },
    {
      title: "4x Faster Search Results",
      description: "Developed AI-powered search assistant (Querra) with superior performance.",
      icon: <Zap />,
    },
    {
      title: "AI-Powered Wellness Platform",
      description: "Created an extensive wellness app integrating wearable data and LLM analysis.",
      icon: <Brain />,
    }
];

const ExperiencePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">My Experience</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A timeline of my professional growth and key learning experiences.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section variants={itemVariants} className="mb-24">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-500/30" aria-hidden="true"></div>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="mb-12 flex justify-center items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex md:flex-row flex-col w-full">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <p className="text-primary font-semibold">{exp.duration}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-background rounded-full border-2 border-primary flex items-center justify-center z-10">
                    {exp.icon}
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                    <div className="p-6 rounded-xl glass-effect">
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-text-secondary font-semibold mb-3">{exp.company}</p>
                      <p className="text-text-secondary mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl glass-effect text-center"
                whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0,0,0,0.3)' }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {ach.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{ach.title}</h3>
                <p className="text-text-secondary">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
