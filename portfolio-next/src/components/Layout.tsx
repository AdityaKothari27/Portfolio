import Header from './Header';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="perspective effect-rotate-left"
    >
      <div className="container">
        <div id="viewport" className="l-viewport">
          <div className="l-wrapper">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;
