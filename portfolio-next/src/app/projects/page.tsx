import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Wellness AI',
      description:
        'Built an extensive wellness app integrating wearable device data and LLM based analysis to deliver personalized fitness and diet recommendations. Finetuned multiple LLMs (950+ downloads on HuggingFace)',
      image: '/assets/img/wellnessai.png',
    },
    {
      title: 'AI Chatbot with RAG Capability',
      description:
        'Made an AI Chatbot with RAG capability using multiple providers such as Google Gemini, GroqCloud and other Open-Source models from HuggingFace and deployed it on Streamlit Cloud.',
      image: '/assets/img/rag.png',
    },
    {
      title: 'Retail Sales Prediction App',
      description:
        'Made a web app to analyze and predict sales of a product/store using Time Series Analysis.',
      image: '/assets/img/rsp.png',
    },
    {
      title: 'Querra',
      description:
        '• AI-powered research and search assistant deployed on Vercel.<br />• Implemented context-aware search using language models, enabling deeper topic exploration for users leading to results 4 times faster than traditional keyword search.<br />• Features a sleek UI with report history, multi-format report export support, and RAG on multiple documents.',
      image: '/assets/img/querra.png',
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <li className="l-section section">
        <div className="work">
          <h2>Projects</h2>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: i * 0.2 }}
            >
              <img
                className="project--image"
                src={project.image}
                alt={project.title}
              />
              <div className="project--content">
                <h3 className="project--title">{project.title}</h3>
                <p
                  className="project--description"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </li>
    </Layout>
  );
};

export default Projects;
