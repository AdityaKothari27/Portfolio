"use client";

import Layout from '@/components/Layout';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <ul className="l-main-content main-content">
        <li className="l-section section section--is-active">
          <div className="intro">
            <motion.div
              ref={ref}
              className="intro--banner"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={variants}
            >
              <h1>
                Hi!<br />I'm Aditya Kothari,<br />AI Undergrad<br />@ NMIMS MPSTME
              </h1>
              <button className="cta">
                Contact Me
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 150 118"
                  style={{ enableBackground: 'new 0 0 150 118' }}
                  xmlSpace="preserve"
                >
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                  </g>
                </svg>
                <span className="btn-background" />
              </button>
              <img src="/assets/img/bg1.png" alt="Welcome" />
            </motion.div>
            <div className="intro--options">
              <motion.a
                href="#0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>AR Business Card </h3>
                <p>
                  Made an Android application to enhance Business cards with
                  Virtual overlay using Augmented Reality
                </p>
              </motion.a>
              <motion.a
                href="https://github.com/AdityaKothari27/Image-Caption-Generator-DL-Project"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3>Image Caption Generator</h3>
                <p>
                  Built an AI tool to generate captions for Images using
                  Convolutional Neural Networks.
                </p>
              </motion.a>
              <motion.a
                href="https://github.com/AdityaKothari27/NLP-Project"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3>
                  Blank Prediction &<br /> Next Word Prediction Assistant
                </h3>
                <p>
                  Created a Next word and Blank word prediction assistant using
                  Deep Learning techniques like Transformers and LSTM.
                </p>
              </motion.a>
            </div>
          </div>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
