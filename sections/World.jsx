'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

// Define animation variants for left and right side buttons
const buttonVariantsLeft = {
  hidden: { opacity: 0, x: -100 }, 
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }
};

const buttonVariantsRight = {
  hidden: { opacity: 0, x: 100 }, 
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }
};

const buttonSize = 'w-[120px] h-[40px]'; 

const World = () => (
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
        title={<>Take your friends and fans along with you through third-party app integrations.</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-glow">
          <img src="profile.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-glow">
          <img src="/profile.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] shadow-glow">
          <img src="profile.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-4">
          <motion.button
            type="button"
            className={`flex items-center justify-center py-2 px-4 bg-[#7289DA] text-white border-2 border-[#4F5D73] rounded-[32px] gap-[8px] ${buttonSize} hover:bg-[#5b6eaa] hover:scale-105 hover:shadow-lg`}
            variants={buttonVariantsLeft}
            initial="hidden"
            whileInView="show"
          >
            <img
              src="/discord.svg"
              alt="discord"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="font-normal text-[14px]">
              DISCORD
            </span>
          </motion.button>

          <motion.button
            type="button"
            className={`flex items-center justify-center py-2 px-4 bg-[#1DB954] text-white rounded-[32px] gap-[8px] ${buttonSize} hover:bg-[#1aa34a] hover:scale-105 hover:shadow-lg`}
            variants={buttonVariantsRight}
            initial="hidden"
            whileInView="show"
          >
            <img
              src="/spotify.svg"
              alt="spotify"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="font-normal text-[14px]">
              SPOTIFY
            </span>
          </motion.button>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.button
            type="button"
            className={`flex items-center justify-center py-2 px-4 bg-[#6D28D9] text-white rounded-[32px] gap-[8px] ${buttonSize} hover:bg-[#5b2b98] hover:scale-105 hover:shadow-lg`}
            variants={buttonVariantsLeft}
            initial="hidden"
            whileInView="show"
          >
            <img
              src="/twitch.svg"
              alt="twitch"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="font-normal text-[14px]">
              TWITCH
            </span>
          </motion.button>

          <motion.button
            type="button"
            className={`flex items-center justify-center py-2 px-4 bg-[#FF0000] text-white rounded-[32px] gap-[8px] ${buttonSize}  hover:bg-[#cc0000] hover:scale-105 hover:shadow-lg`}
            variants={buttonVariantsRight}
            initial="hidden"
            whileInView="show"
          >
            <img
              src="/youtube.svg"
              alt="youtube"
              className="w-[20px] h-[20px] object-contain"
            />
            <span className="font-normal text-[14px]">
              YOUTUBE
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  </section>
);

export default World;

