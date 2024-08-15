'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="" textStyles="text-center" /> 
<TitleText
  title={
    <>
      Games, you own it? We got it! <br className="md:block hidden mb-0" />
      <span className="text-base font-large block mt-1">Games you purchase from any popular game store can be played with us.</span>
    </>
  }
  textStyles="text-center"
/>

<div className="flex justify-center mt-6"> 
  <button
    type="button"
    className="py-2 px-6 bg-blue-900 text-white rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
  >
    Get Started
  </button>
</div>



        <div className="mt-[40px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

