import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Higher-order components contain components within them
const SectionWrapper = (Component, idName) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7zl mx-auto relative z-0`}
    > 
      {/* idName get's populated by the argument passed into the SectionWrapper in About.jsx */}
      {/* Hero.jsx contains an anchor tag containing the href="#about" */}
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
}
export default SectionWrapper