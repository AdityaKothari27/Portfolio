"use client";

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Brain, Database, Smartphone, Globe, Code } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  image: string;
  github: string;
  demo: string;
  icon: ReactNode;
}

const projects: Project[] = [
    {
      id: 1,
      title: "Wellness AI",
      description: "LLM-based analysis of wearable data for personalized fitness and diet recommendations.",
      longDescription: "Built an AI-powered wellness platform that processes wearable device data and uses fine-tuned language models to provide personalized health insights. The system has gained significant traction with 950+ downloads on HuggingFace.",
      tech: ["Python", "LLM", "HuggingFace", "Streamlit", "Data Analytics"],
      category: "AI",
      image: "/assets/img/wellnessai.png",
      github: "https://github.com/adityakothari/wellness-ai",
      demo: "https://huggingface.co/spaces/adityakothari/wellness-ai",
      icon: <Brain />
    },
    {
      id: 2,
      title: "AI Chatbot with RAG",
      description: "Intelligent chatbot with Retrieval-Augmented Generation using multiple AI providers.",
      longDescription: "Developed a sophisticated AI chatbot that leverages RAG technology with multiple providers including Google Gemini, GroqCloud, and HuggingFace models. Deployed on Streamlit Cloud for global accessibility.",
      tech: ["RAG", "Google Gemini", "GroqCloud", "HuggingFace", "Streamlit"],
      category: "AI",
      image: "/assets/img/rag.png",
      github: "https://github.com/adityakothari/rag-chatbot",
      demo: "https://rag-chatbot.streamlit.app/",
      icon: <Brain />
    },
    {
      id: 3,
      title: "Retail Sales Prediction",
      description: "Web app for analyzing and predicting retail sales using time series analysis.",
      longDescription: "Created a comprehensive sales prediction platform that uses advanced time series analysis to forecast retail performance, helping businesses make data-driven decisions.",
      tech: ["Time Series", "Python", "Machine Learning", "Web App"],
      category: "Data Science",
      image: "/assets/img/rsp.png",
      github: "https://github.com/adityakothari/retail-sales-prediction",
      demo: "#",
      icon: <Database />
    },
    {
      id: 4,
      title: "Querra - AI Research Assistant",
      description: "AI-powered research and search assistant with context-aware capabilities.",
      longDescription: "Developed an intelligent research assistant that revolutionizes information discovery through AI-powered search, context-aware analysis, and comprehensive report generation.",
      tech: ["AI Search", "Language Models", "RAG", "Vercel", "React"],
      category: "AI",
      image: "/assets/img/querra.png",
      github: "https://github.com/adityakothari/querra",
      demo: "https://querra.vercel.app/",
      icon: <Brain />
    },
    {
      id: 5,
      title: "AR Business Card",
      description: "Mobile app using Augmented Reality to create an interactive business card.",
      longDescription: "An innovative mobile application that uses Augmented Reality to bring a standard business card to life. Point your camera at the card to see interactive 3D models, links, and contact information.",
      tech: ["Unity", "C#", "ARCore", "Vuforia"],
      category: "Mobile",
      image: "/assets/img/ar.png",
      github: "https://github.com/adityakothari/ar-business-card",
      demo: "#",
      icon: <Smartphone />
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Framer Motion.",
      longDescription: "My personal corner of the internet, showcasing my projects, skills, and journey. Built with modern web technologies to be fast, responsive, and visually engaging.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
      category: "Web",
      image: "/assets/img/portal.png",
      github: "https://github.com/adityakothari/portfolio-next",
      demo: "https://adityakothari.vercel.app/",
      icon: <Globe />
    }
];

const filters = ["All", "AI", "Data Science", "Web", "Mobile"];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">My Creations</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A collection of projects where I've turned complex problems into elegant solutions.
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-background-light text-text-secondary hover:bg-primary/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onClick={() => openModal(project)}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-56">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute top-4 right-4 text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4 h-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-background-light rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-text-secondary hover:text-white">
                <X size={28} />
              </button>
              
              <div className="relative h-72 rounded-lg overflow-hidden mb-6">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>

              <h2 className="text-4xl font-bold text-gradient mb-2">{selectedProject.title}</h2>
              <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                <div className="flex items-center gap-1">{selectedProject.icon} {selectedProject.category}</div>
              </div>

              <p className="text-lg text-text-secondary mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                  <Github size={20} />
                  GitHub
                </a>
                {selectedProject.demo !== "#" && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-background-lightest text-white font-semibold rounded-lg hover:bg-background-lightest/80 transition-transform transform hover:scale-105">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
