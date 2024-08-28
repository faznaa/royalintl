import React from "react";
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

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const size = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
  const sizeH = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
  return (
    <section className="relative w-full h-screen">
      <div className="absolute overflow-hidden z-0">
        <WaveParticles />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <AnimatePresence>
          <motion.h1
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

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            // style={{ scale: sizeH }}
            className="text-4xl text-center sm:text-7xl font-medium relative z-20 text-gray-300 tracking-tighter"
          >
            We offer you{" "}
            <FlipWords words={["Expertise", "Efficiency", "Reliability"]} />
          </motion.h2>
        </AnimatePresence>
        <div className="w-full flex justify-center mt-10">
          <BorderMagicBtn>Get Started</BorderMagicBtn>
        </div>
      </div>
      <div className="absolute h-[500px] w-[600px] z-20 left-[30%] -bottom-[40%]  mr-18  ">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </section>
  );
};

export default Hero;
