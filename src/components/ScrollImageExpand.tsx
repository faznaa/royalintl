import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollImageExpand = () => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Scale the image based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3,20]);
  const opacity = useTransform(scrollYProgress, [0, 0.98,1], [1,1,0]);
  const opacityImg = useTransform(scrollYProgress, [0,0.5,1], [1,1,0]);
  const opacityText = useTransform(scrollYProgress, [0,0.25,0.75,0.95,1], [0,0,1, 1,0]);
  const textX = useTransform(scrollYProgress, [0,0.5,0.9,1], [0,0,0,-300]);
  const titleLetterSpacing = useTransform(scrollYProgress, [0,0.25,0.75,0.95,1], ["-3px","-5px","3px","5px","-3px"]);
  const subtitleLetterSpacing = useTransform(scrollYProgress, [0,0.25,0.75,0.95,1], ["-3px","-5px","0px","0px","-3px"]);
  return (
    <section ref={ref} className='w-screen'>
        <div className="relative h-[200vh] w-full">
    <motion.img
      src="/hero2.jpg"
      alt="Expanding Image"
      className="fixed z-10 blur-[1px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ opacity: opacityImg }}
    />
   <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
     style={{ opacity: opacityImg }}

   className="animate-bounce  w-8 h-8 rounded-full fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</motion.svg>
    {/* // small white circle at center expands to full screen */}
    <motion.div
      className="fixed w-24 h-24 bg-white rounded-full  z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ scale,opacity }}
    />
    {/* Arrow Icon  */}
   

    <motion.h2
      className="fixed text-5xl uppercase font-bold text-red-700  z-20 text-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-limelight text-center"
      style={{ opacity: opacityText, y:textX,x:'-50%',letterSpacing:titleLetterSpacing }}
      >
      Royal International
      </motion.h2>
      <motion.h2
      className="fixed text-3xl font-bold text-gray-800  z-20 text-center m-auto top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-20"
      style={{ opacity: opacityText, y:textX,x:'-50%',letterSpacing:subtitleLetterSpacing }}
      >
      WorldWide Relocations
      </motion.h2>
   
  </div></section>
  );
};

export default ScrollImageExpand;
