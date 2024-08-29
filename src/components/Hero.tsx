import React, { useRef } from "react";
import WaveParticles from "./WaveParticles";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FlipWords } from "./FlipWords";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { World } from "./ui/globe";
import { globeConfig, sampleArcs } from "../data/globeutils";
import OurExpertise from "./OurExpertise";
import FadeIn from "./FadeIn";

const CustomText = ({children} :any) => <div className="px-4 py-1.5 uppercase text-sm text-white z-40 bg-red-800 rounded-2xl">{children}</div>
const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["start start", "end start"], 
  });
  const size = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
  const sizeH = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
  const globeSize = useTransform(scrollYProgress, [0.4,1],[1,0.6])
  return (
    <section className="relative w-full h-screen" ref={ref}>
      <div className="absolute overflow-hidden z-0">
        <WaveParticles />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <AnimatePresence>
         <FadeIn> <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0, scale: 0.8 }}
            // style={{ scale: size }}
            className="text-4xl sm:text-5xl font-extralight relative z-20 text-gray-300 text-center mb-10 tracking-tighter"
          >
            Moving Beyond Relocation - Innovating the <br /> Future of High-Tech
            Logistics
          </motion.h1>
</FadeIn>
         <FadeIn> <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            // style={{ scale: sizeH }}
            className="text-4xl text-center sm:text-7xl font-medium relative z-20 text-gray-300 tracking-tighter"
          >
            We offer you{" "}
            <span className='text-red-600'><FlipWords words={['Expertise','Efficiency','Reliability']} /></span>
          </motion.h2></FadeIn>
        </AnimatePresence>
        <div className="w-full flex justify-center mt-10">
          <BorderMagicBtn>Get Started</BorderMagicBtn>
        </div>
      </div>
      <div className=" flex justify-center items-center  h-[500px] -mt-40 w-full relative  z-40 ">
        <div className="absolute top-20 left-72 "><CustomText>5K Ship expedition</CustomText></div>
        <div className="absolute top-48 left-60 "><CustomText>10K Home Moving</CustomText></div>
        <div className="absolute top-80 left-72 "><CustomText>100M Trucking</CustomText></div>
        <div className="absolute top-20 right-72 "><CustomText>5K Ship expedition</CustomText></div>
        <div className="absolute top-48 right-60 "><CustomText>10K Home Moving</CustomText></div>
        <div className="absolute top-80 right-72 "><CustomText>100M Trucking</CustomText></div>

      <motion.div
      style={{
        // scale:globeSize
      }}
      className=" h-[500px]  w-[600px] z-20 px-auto  flex justify-center items-center object-center">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
