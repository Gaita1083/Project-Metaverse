'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-20">
          <img src="upside.png" alt="World 1" className="w-full h-full shadow-[0_0_5px_5px_#d65e5e99] rounded-3xl" />
          <h4 className="translate-y-[-130%] text-center text-white font-bold">The Upside Down</h4>
        </div>
        <div className="absolute top-20 right-20 ">
          <img src="Mask Group2.png" alt="World 2" className="rounded-3xl shadow-[0_0_5px_5px_#05766c99]" />
          <h4 className="translate-y-[-130%] text-center text-white font-bold">Hawkins Labs</h4>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
