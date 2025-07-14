import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <li className="l-section section">
        <motion.div
          className="about"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="about--banner">
            <p>
              <br />
              As an AI undergrad, I traverse the digital landscape, sculpting
              intelligence from lines of code. Passionate about the synergy
              between data science and AI, I embark on a journey to unravel the
              intricacies of both realms. Whether diving deep into algorithms,
              exploring the vast expanse of data, or pondering the ethical
              dimensions of artificial minds, I am committed to pushing the
              boundaries that shape the future of technology and humanity.
            </p>
            <p>
              <br />
              Certifications
              <br />
            </p>
            <ul>
              <li>Java - MPSTME</li>
              <li>Meta Spark AR - Creators of Metaverse - AICTE</li>
              <li>
                Complete Investing Bootcamp from Zero to Hero - Udemy
              </li>
            </ul>
            <p>
              <br />
              Hobbies:
              <br />
            </p>
            <ul>
              <li>Formula 1</li>
              <li>Football</li>
              <li>Badminton</li>
              <li>Travelling</li>
            </ul>
            <a href="#0">
              <span />
            </a>
          </div>
          <div className="about--options">
            <a href="#0">
              <h3>
                B.Tech in AI - <br />
                NMIMS MPSTME
                <br /> <br />‎{' '}
              </h3>
            </a>
            <a href="#0">
              <h3>
                High School - 98.17%
                <br />
                SRJC, Thane
                <br />‎{' '}
              </h3>
            </a>
            <a href="#0">
              <h3>
                Secondary School - 92.6%
                <br />
                OIST, Thane
                <br />‎{' '}
              </h3>
            </a>
          </div>
        </motion.div>
      </li>
    </Layout>
  );
};

export default About;
