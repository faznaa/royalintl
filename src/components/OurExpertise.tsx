import { useScroll, useTransform, MotionValue } from "framer-motion";
import React, { RefObject } from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import {motion } from "framer-motion";
import FadeIn from "./FadeIn";

const leftPaths = [
  {
    path: "M-214 92.5H9.15594C68.7022 92.5 127.233 107.924 179.046 137.27V137.27C201.512 149.993 226.015 158.72 251.466 163.062L298 171",
    color: "#FFB7C5",
  },
  {
    path: "M-213 16H-78.9359C8.80102 16 93.992 45.4881 162.954 99.728L183.215 115.663C216.998 142.235 256.17 161.119 298 171V171",
    color: "#FFDDB7",
  },
  {
    path: "M-214 245H12.5379C69.6649 245 125.816 230.19 175.513 202.016V202.016C199.986 188.142 226.956 179.233 254.879 175.801L298 170.5",
    color: "#B1C5FF",
  },
  {
    path: "M-213 321H-72.2055C11.0211 321 91.853 293.143 157.409 241.869L183.293 221.625C216.636 195.546 255.839 177.997 297.5 170.5V170.5",
    color: "#4FABFF",
  },
  {
    path: "M-213 170.5H298",
    color: "#076EFF",
  },
];

const rightPaths = [
  {
    path: "M561.249 264.978L328.45 264.978C266.331 264.978 205.271 248.887 151.219 218.274V218.274C127.783 205 102.22 195.896 75.6702 191.367L27.1251 183.086",
    color: "#FFB7C5",
  },
  {
    path: "M561.249 105.888L324.475 105.888C265.172 105.888 206.883 121.262 155.294 150.509V150.509C129.514 165.124 101.068 174.429 71.6347 177.875L27.1251 183.086",
    color: "#FFDDB7",
  },
  {
    path: "M560.206 26.6044L412.387 26.6044C326.174 26.6043 242.441 55.4608 174.531 108.575L146.718 130.329C111.998 157.485 71.0873 175.611 27.6469 183.086V183.086",
    color: "#B1C5FF",
  },
  {
    path: "M560.206 344.783L420.286 344.783C328.798 344.783 239.966 314.035 168.056 257.476L146.871 240.814C111.627 213.094 70.7626 193.394 27.1253 183.086V183.086",
    color: "#4FABFF",
  },
  {
    path: "M560.206 183.086L26.6037 183.086",
    color: "#076EFF",
  },
];

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue<number>[];
}

const OurExpertise: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const firstDiv =useTransform(scrollYProgress, [0, 0.25,0.3,0.75], [0,0,1,1]);
  const secondDiv =useTransform(scrollYProgress, [0, 0.3,0.35,0.75], [0,0,1,1]);
  const fullOpacity =useTransform(scrollYProgress, [0.7, 0.8], [1,0.5]);
  const fullScale =useTransform(scrollYProgress, [0.7, 0.8], [1,0.8]);
  return (
    <div
      className="h-[400vh] bg-black w-full  relative pt-40 overflow-clip"
      ref={ref}
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center">
        <GoogleGeminiEffect
          svgPaths={leftPaths}
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          // className="top-0 left-0"
        />
        <motion.div
        style={{opacity:fullOpacity, scale:fullScale}}
        className="text-white flex flex-col justify-center items-center space-y-8 text-center">
          <FadeIn><h3 className="text-5xl leading-[1.3]">International Relocation</h3></FadeIn>
          <FadeIn><p className="w-1/2 mx-auto">
            With over 15 years of experience, Royal International Worldwide
            Relocations is a trusted leader in the relocation industry. We offer
            reliable, safe, and affordable services both domestically and
            internationally, with a focus on quality and timely delivery
          </p></FadeIn>
          <div className="flex justify-center gap-4 gap-x-12">
            <motion.div style={{opacity:firstDiv}} className="space-y-2">
              <span className="text-red-600 text-5xl font-medium">150 k</span>
              <p className="uppercase">home moving</p>
            </motion.div>
            <motion.div style={{opacity:secondDiv}} className="space-y-2">
              <span className="text-red-600 text-5xl font-medium">250 k</span>
              <p className="uppercase">ship expedition</p>
            </motion.div>
          </div>
        </motion.div>
        <GoogleGeminiEffect
          svgPaths={rightPaths}
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="top-0 right-0"
        />
      </div>
    </div>
  );
};

export default OurExpertise;
