import React, { useEffect, useRef, useState } from "react";
import WaveParticles from "./WaveParticles";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FlipWords } from "./FlipWords";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { World } from "./ui/globe";
import { globeConfig, sampleArcs } from "../data/globeutils";
import FadeIn from "./FadeIn";
import { Sparkles } from "./Sparkles";
import { useEntry } from "data/contentfulservice";

const CustomText = ({ children }: any) => (
  <div className="px-5 py-5 uppercase text-sm text-black font-semibold z-40 bg-primaryBg border-2  border-gray-500 rounded-full">
    {children}
  </div>
);

const Hero = () => {
  const ref = useRef(null);
  const { entry, loading } = useEntry()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Globe stays in center for some time
  const translateUp = useTransform(scrollYProgress, [0.2, 0.5,0.9, 0.6], [-180, 70,70, -200]);
  const translateOut = useTransform(scrollYProgress, [0, 0.1, 0.3], [-300, -250, -100]);
  
  // Text scales and fades out
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.7]);

  // Buttons fade in and everything scrolls out together
  const opacityOfBtns = useTransform(scrollYProgress, [0.3, 0.4, 0.5,0.6], [0, 1,1,0]);
  const globeSize = useTransform(scrollYProgress, [0.4, 1], [1, 1]);

  // CustomTextTransition From left to right 
  const pillLeft = useTransform(scrollYProgress, [0.3, 0.4,0.5,0.6], [100, 0,0,-200])
  const pillTop = useTransform(scrollYProgress, [0.3, 0.4,0.5,0.6], [50, 0,0,-100])
  const pillBottom = useTransform(scrollYProgress, [0.3, 0.4,0.5,0.6], [-50, 0,0,100])
  const pillRight = useTransform(scrollYProgress, [0.3, 0.4,0.5,0.6], [-100, 0,0,200])

  // useEffect(() => {
  //   return scrollYProgress.onChange(() => {
  //     const val = scrollYProgress.get()
  //     setStarSize(75-(100*val))
  //   });
  // }, [scrollYProgress]);
  if(loading) {
    return null
  }

  return (
    <section className="relative w-screen h-[160vh]  3xl:h-[170vh]  xl:h-[180vh] bg-black " ref={ref}>
      <div className="sticky top-0 w-full h-screen z-0 overflow-hidden">
        {/* <WaveParticles starSize={"1.0"}/> */}
        <Sparkles />
      </div>
      <motion.div
        style={{ translateY: translateOut, opacity: opacity, scale: textScale }}
        className="absolute top-0 w-full h-full flex flex-col justify-center items-center "
      >
        <AnimatePresence>
          <FadeIn>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl text-center font-medium relative z-20 text-gray-300 tracking-tighter mb-10"
            >
              {entry.heroTitle} {" "}
              <div className="block sm:hidden"><br/></div>
              <span className="text-red-600">
                <FlipWords words={entry.heroTitleChangingWords} />
              </span>
            </motion.h1>
          </FadeIn>
          <FadeIn>
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-2xl font-normal relative z-20 text-gray-300 text-center tracking-tighter"
            >
              Moving Beyond Relocation - Innovating the <br /> Future of High-Tech
              Logistics
            </motion.h2>
          </FadeIn>
        </AnimatePresence>
        {/* <div className="w-full flex justify-center mt-10">
          <BorderMagicBtn>Get Started</BorderMagicBtn>
        </div> */}
      </motion.div>
      <motion.div
       
        className="relative h-screen sm:h-[1100px] w-full mx-auto flex justify-center items-center flex-col z-10 "
      >
        <motion.div className="-mt-[28rem]" style={{ opacity: opacityOfBtns }}>
          <motion.div className="absolute top-0 left-56"
          style={{
            x:pillLeft,
            y:pillTop
          }}
          >
            <CustomText>5K Ship expedition</CustomText>
          </motion.div>
          <motion.div className="absolute top-40 left-40"
          style={{
            x:pillLeft,
            y:pillTop
          }}
          >
            <CustomText>5K Ship expedition</CustomText>
          </motion.div>
          <motion.div className="absolute top-80 left-40"
           style={{
            x:pillLeft
          }}
          >
            <CustomText>10K Home Moving</CustomText>
          </motion.div>
          <motion.div className="absolute top-[32rem] left-56"
           style={{
            x:pillLeft,
            y:pillBottom
          }}>
            <CustomText>100M Trucking</CustomText>
          </motion.div>
          <motion.div className="absolute top-0 right-56"
          style={{
            x:pillRight,
            y:pillTop
          }}>
            <CustomText>5K Ship expedition</CustomText>
          </motion.div>
          <motion.div className="absolute top-40 right-40"
          style={{
            x:pillRight,
          }}
          >
            <CustomText>10K Home Moving</CustomText>
          </motion.div>
          <motion.div className="absolute top-80 right-40"
          style={{
            x:pillRight,
          }}
          >
            <CustomText>5K Ship expedition</CustomText>
          </motion.div>
          <motion.div className="absolute top-[32rem] right-56"
          style={{
            x:pillRight,
            y:pillBottom
          }}
          >
            <CustomText>100M Trucking</CustomText>
          </motion.div>
          
        </motion.div>

        <div className="sm:py-10">
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2,duration:1,ease:'easeIn'}}
        className="h-[500px] w-[600px] sm:h-[1040px] bg-transparent sm:w-[1200px] z-20 px-auto flex justify-center items-center object-center">
          <World data={sampleArcs} globeConfig={globeConfig} scrollYProgress={scrollYProgress} />
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
