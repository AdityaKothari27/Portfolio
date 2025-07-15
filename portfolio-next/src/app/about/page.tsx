"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Brain, Target, Download, Briefcase, Star } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🚀" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Java", icon: "☕" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "Next.js", icon: "🌐" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🌿" },
  ];

  const timeline = [
    {
      icon: <Briefcase />,
      date: "2023 - Present",
      title: "AI & Data Science Student",
      description: "Pursuing B.Tech at NMIMS MPSTME, diving deep into machine learning, neural networks, and big data technologies.",
    },
    {
      icon: <Star />,
      date: "2023",
      title: "AI Project Development",
      description: "Developed an Image Caption Generator using CNNs & LSTMs and an NLP-based Prediction Assistant, showcasing skills in deep learning and model deployment.",
    },
    {
      icon: <Code />,
      date: "2022",
      title: "Augmented Reality Exploration",
      description: "Created an AR Business Card with Unity and ARCore, merging the physical and digital worlds.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen text-white">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            className="w-40 h-40 rounded-full mb-6 relative overflow-hidden border-4 border-purple-500/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image 
              src="/profile-pic.png" // Placeholder - user needs to add this image
              alt="Aditya Kothari"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">Aditya Kothari</h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
            An AI enthusiast and developer, crafting intelligent solutions that bridge data and human experience.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.section>

        {/* Timeline Section */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">My Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-500/30" aria-hidden="true"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="mb-16 flex items-center w-full"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="p-6 rounded-xl glass-effect">
                    <p className="text-sm text-primary font-semibold mb-1">{item.date}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-background rounded-full border-2 border-primary flex items-center justify-center">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Skills & Expertise</h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-3 px-4 py-2 rounded-full glass-effect border border-white/10"
                whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default AboutPage;
