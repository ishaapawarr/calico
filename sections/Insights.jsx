'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer, fadeInUp } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} 
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="" textStyles="text-center" />
      <TitleText
        title="Subscription Plans"
        textStyles="text-center text-4xl font-extrabold text-white"
      />
      <div className="mt-[50px] flex flex-row flex-wrap justify-center gap-[30px]">
        {insights.map((item, index) => (
          <motion.div
            key={`insight-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} 
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-col items-center justify-between text-center w-[300px] min-w-[250px] bg-blue-100 bg-opacity-80 border border-black-500 rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <h3 className="text-xl font-bold mb-2 text-blue-800 border-b-2 border-blue-600 pb-1">
                {item.title}
              </h3>
          
              <p className="text-md font-semibold mb-4 text-blue-700">
                {item.subtitle}
              </p>
              
              <div className="w-[200px] p-2 bg-blue-800 border border-black-300 rounded-lg shadow-md mb-4">
                <h4 className="text-md font-semibold text-white">{item.time}</h4>
              </div>

              <div className="text-sm space-y-2 mb-4 text-left">
                {item.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-900 rounded-full inline-block mr-2"></span>
                    {feature}
                  </p>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="py-2 px-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-black transition duration-300"
            >
              CHECK OUT
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
