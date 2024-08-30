import React, { useEffect, useRef, useState } from "react";
import WaveParticles from "./WaveParticles";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FlipWords } from "./FlipWords";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { World } from "./ui/globe";
import { globeConfig, sampleArcs } from "../data/globeutils";
import FadeIn from "./FadeIn";

const CustomText = ({ children }: any) => (
  <div className="px-4 py-1.5 uppercase text-sm text-white z-40 bg-red-800 rounded-2xl">
    {children}
  </div>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Globe stays in center for some time
  const translateUp = useTransform(scrollYProgress, [0.2, 0.5,0.9, 0.6], [-180, 70,70, -200]);
  const translateOut = useTransform(scrollYProgress, [0, 0.3, 1], [-300, -300, -1000]);
  
  // Text scales and fades out
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.7]);

  // Buttons fade in and everything scrolls out together
  const opacityOfBtns = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const globeSize = useTransform(scrollYProgress, [0.4, 1], [1, 1]);


  // useEffect(() => {
  //   return scrollYProgress.onChange(() => {
  //     const val = scrollYProgress.get()
  //     setStarSize(75-(100*val))
  //   });
  // }, [scrollYProgress]);

  return (
    <section className="relative w-screen h-[200vh] bg-black" ref={ref}>
      <div className="sticky top-0 w-full h-screen z-0 overflow-hidden">
        <WaveParticles starSize={"1.0"}/>
      </div>
      <motion.div
        style={{ translateY: translateOut, opacity: opacity, scale: textScale }}
        className="absolute top-0 w-full h-full flex flex-col justify-center items-center"
      >
        <AnimatePresence>
          <FadeIn>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-4xl sm:text-5xl font-extralight relative z-20 text-gray-300 text-center mb-10 tracking-tighter"
            >
              Moving Beyond Relocation - Innovating the <br /> Future of High-Tech
              Logistics
            </motion.h1>
          </FadeIn>
          <FadeIn>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl text-center sm:text-7xl font-medium relative z-20 text-gray-300 tracking-tighter"
            >
              We offer you{" "}
              <span className="text-red-600">
                <FlipWords words={["Expertise", "Efficiency", "Reliability"]} />
              </span>
            </motion.h2>
          </FadeIn>
        </AnimatePresence>
        <div className="w-full flex justify-center mt-10">
          <BorderMagicBtn>Get Started</BorderMagicBtn>
        </div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // style={{ translateY: translateUp }}
        // transition={{ delay: 2, duration: 0.5 }}
        className="relative h-[900px] w-full mx-auto flex justify-center items-center flex-col z-10 "
      >
        <motion.div className="-mt-96" style={{ opacity: opacityOfBtns }}>
          <div className="absolute top-20 left-72">
            <CustomText>5K Ship expedition</CustomText>
          </div>
          <div className="absolute top-48 left-60">
            <CustomText>10K Home Moving</CustomText>
          </div>
          <div className="absolute top-80 left-72">
            <CustomText>100M Trucking</CustomText>
          </div>
          <div className="absolute top-20 right-72">
            <CustomText>5K Ship expedition</CustomText>
          </div>
          <div className="absolute top-48 right-60">
            <CustomText>10K Home Moving</CustomText>
          </div>
          <div className="absolute top-80 right-72">
            <CustomText>100M Trucking</CustomText>
          </div>
        </motion.div>

        <div className="h-[800px] w-[900px] z-20 px-auto flex justify-center items-center object-center">
          <World data={sampleArcs} globeConfig={globeConfig} scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
