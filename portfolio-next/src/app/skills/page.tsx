"use client";

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Globe, Zap, Star } from 'lucide-react';

interface SkillCategory {
  icon: ReactNode;
  color: string;
  skills: string[];
}

const skillsData: { [key: string]: SkillCategory } = {
  "AI & ML": {
    icon: <Brain />,
    color: "from-purple-500 to-pink-500",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Transformers", "Keras", "NLTK", "Hugging Face"],
  },
  "Programming": {
    icon: <Code />,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "R"],
  },
  "Data Science": {
    icon: <Database />,
    color: "from-green-500 to-teal-500",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "Apache Spark"],
  },
  "Web Development": {
    icon: <Globe />,
    color: "from-orange-500 to-red-500",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "HTML/CSS", "Tailwind CSS"],
  },
  "Tools & Cloud": {
    icon: <Zap />,
    color: "from-indigo-500 to-purple-500",
    skills: ["Git", "Docker", "AWS", "GCP", "Kubernetes", "Vercel", "Streamlit"],
  },
};

const certifications = [
  { name: "Machine Learning Specialization", issuer: "Coursera & Stanford" },
  { name: "Deep Learning Specialization", issuer: "Coursera & DeepLearning.AI" },
  { name: "TensorFlow Developer Certificate", issuer: "Google" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
];

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("AI & ML");

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
    <div className="min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">My Arsenal</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The tools and technologies I use to build, innovate, and solve problems.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Categories Sidebar */}
          <motion.div variants={itemVariants} className="md:w-1/4">
            <ul className="space-y-4">
              {Object.keys(skillsData).map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-background-light hover:bg-primary/20'
                    }`}
                  >
                    {skillsData[category].icon}
                    <span className="font-semibold">{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="md:w-3/4">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsData[activeCategory].skills.map((skill: string) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="p-4 rounded-xl glass-effect flex flex-col items-center justify-center text-center"
                  whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                >
                  <p className="font-semibold">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.section variants={itemVariants} className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl glass-effect flex items-center gap-4"
                whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
              >
                <div className="text-yellow-400">
                  <Star size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                  <p className="text-text-secondary">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
