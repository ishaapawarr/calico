'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Feedback = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Calico?",
      description: "Calico is a cloud gaming platform that allows you to play your favorite games on any device without needing powerful hardware.",
    },
    {
      question: "How does Calico work?",
      description: "Calico streams your games from our servers to your device, handling all processing and verifying game ownership through your accounts.",
    },
    {
      question: "Is Calico free to use?",
      description: "Calico offers various subscription plans. Some features are free, while premium features require a subscription.",
    },
    {
      question: "How to contact?",
      description: "You can contact customer support via the 'Contact Us' page or email us directly at support@calico.com.",
    },
    {
      question: "Which devices work?",
      description: "Calico works on any device with a web browser, including PCs, laptops, tablets, and smartphones.",
    },
    {
      question: "How do I get started?",
      description: "Simply sign up for an account on our website, connect your game store accounts, and start playing your games.",
    },
  ];

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        <TypingText title="" textStyles="text-center" />
        <TitleText
          title={<>Frequently Asked Questions</>}
          textStyles="text-center text-4xl font-extrabold text-white mb-8" 
        />
        <div className="flex flex-col lg:flex-row gap-6">
         
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            {faqData.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('right', 'tween', 0.2, 0)}
                className={`flex flex-col justify-center items-center w-full max-w-[900px] transition-all duration-300 ease-in-out rounded-[32px] border-[1px] border-[#6A6A6A] relative overflow-hidden`}
                style={{
                  maxHeight: expandedIndex === index ? '500px' : '80px', 
                }}
              >
                <div className={`flex justify-between items-center w-full p-4 transition-all duration-300 ease-in-out`}>
                  <div className="flex-1 flex items-center justify-center">
                    <h4 className="font-bold text-xl text-white text-center">
                      {item.question}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={expandedIndex === index}
                    className="bg-white p-2 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 hover:bg-gray-200"
                  >
                    <img
                      src="/faqs.png" 
                      alt="faqs"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {expandedIndex === index && (
                  <div className="p-4 text-white text-center">
                    <p className="font-normal text-base">
                      {item.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            {faqData.slice(3).map((item, index) => (
              <motion.div
                key={index + 3}
                variants={fadeIn('left', 'tween', 0.2, 0)}
                className={`flex flex-col justify-center items-center w-full max-w-[900px] transition-all duration-300 ease-in-out rounded-[32px] border-[1px] border-[#6A6A6A] relative overflow-hidden`}
                style={{
                  maxHeight: expandedIndex === index + 3 ? '500px' : '80px',
                }}
              >
                <div className={`flex justify-between items-center w-full p-4 transition-all duration-300 ease-in-out`}>
                  <div className="flex-1 flex items-center justify-center">
                    <h4 className="font-bold text-xl text-white text-center">
                      {item.question}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleToggle(index + 3)}
                    aria-expanded={expandedIndex === index + 3}
                    className="bg-white p-2 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-300 hover:bg-gray-200"
                  >
                    <img
                      src="/faqs.png" 
                      alt="faqs"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {expandedIndex === index + 3 && (
                  <div className="p-4 text-white text-center">
                    <p className="font-normal text-base">
                      {item.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="py-2 px-6 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            KNOW MORE
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;






