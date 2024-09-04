import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import FigureDigits from "./FigureDigits";

const leftPaths = [
  {
    path: "M-214 92.5H9.15594C68.7022 92.5 127.233 107.924 179.046 137.27V137.27C201.512 149.993 226.015 158.72 251.466 163.062L298 171",
    // color: "#FFB7C5",
    color: "#E4675D",
  },
  {
    path: "M-213 16H-78.9359C8.80102 16 93.992 45.4881 162.954 99.728L183.215 115.663C216.998 142.235 256.17 161.119 298 171V171",
    // color: "#FFDDB7",
    color: "#E4675D",
  },
  {
    path: "M-214 245H12.5379C69.6649 245 125.816 230.19 175.513 202.016V202.016C199.986 188.142 226.956 179.233 254.879 175.801L298 170.5",
    // color: "#B1C5FF",
    color: "#E4675D",
  },
  {
    path: "M-213 321H-72.2055C11.0211 321 91.853 293.143 157.409 241.869L183.293 221.625C216.636 195.546 255.839 177.997 297.5 170.5V170.5",
    // color: "#4FABFF",
    color: "#E4675D",
  },
  {
    path: "M-213 170.5H298",
    // color: "#076EFF",
    color: "#E4675D",
  },
];

const rightPaths = [
  {
    path: "M27.1251 183.086L75.6702 191.367C102.22 195.896 127.783 205 151.219 218.274V218.274C205.271 248.887 266.331 264.978 328.45 264.978L561.249 264.978",
    // color: "#FFB7C5",
    color: "#E4675D",
  },
  {
    path: "M27.1251 183.086L71.6347 177.875C101.068 174.429 129.514 165.124 155.294 150.509V150.509C206.883 121.262 265.172 105.888 324.475 105.888L561.249 105.888",
    // color: "#FFDDB7",
    color: "#E4675D",
  },
  {
    path: "M27.6469 183.086V183.086C71.0873 175.611 111.998 157.485 146.718 130.329L174.531 108.575C242.441 55.4608 326.174 26.6043 412.387 26.6044L560.206 26.6044",
    // color: "#B1C5FF",
    color: "#E4675D",
  },
  {
    path: "M27.1253 183.086V183.086C70.7626 193.394 111.627 213.094 146.871 240.814L168.056 257.476C239.966 314.035 328.798 344.783 420.286 344.783L560.206 344.783",
    // color: "#4FABFF",
    color: "#E4675D",
  },
  {
    path: "M26.6037 183.086L560.206 183.086",
    // color: "#076EFF",
    color: "#E4675D",
  },
];

interface GoogleGeminiEffectProps {
  pathLengths: MotionValue<number>[];
}

const OurExpertise: React.FC = () => {
  const ref = useRef(null);
  const [showFigure, setShowFigure] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftPathLengthFirst = useTransform(scrollYProgress, [0.2, 0.4], [0.2, 1.2]);
  const leftPathLengthSecond = useTransform(scrollYProgress, [0.2, 0.4], [0.15, 1.2]);
  const leftPathLengthThird = useTransform(scrollYProgress, [0.2, 0.4], [0.1, 1.2]);
  const leftPathLengthFourth = useTransform(scrollYProgress, [0.2, 0.4], [0.05, 1.2]);
  const leftPathLengthFifth = useTransform(scrollYProgress, [0.2, 0.4], [0, 1.2]);

  const rightPathLengthFirst = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8], [0, 0, 0.2, 1.2]);
  const rightPathLengthSecond = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8], [0, 0, 0.15, 1.2]);
  const rightPathLengthThird = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8], [0, 0, 0.1, 1.2]);
  const rightPathLengthFourth = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8], [0, 0, 0.05, 1.2]);
  const rightPathLengthFifth = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.8], [0, 0, 0, 1.2]);

  const textTransalteY = useTransform(scrollYProgress, [0, 0.2], ["10%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const figureTransalteY = useTransform(scrollYProgress, [0.25, 0.5], ["10%", "0%"]);
  const figureOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.5], [0, 0, 0, 1]);

  const showFigureOnScroll: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5],
    [0, 0, 1]
  );

  useEffect(() => {
    const unsubscribe = showFigureOnScroll.onChange(latest => {
      setShowFigure(latest === 1);
    });

    return () => unsubscribe();
  }, [showFigureOnScroll]);
  
  return (
    <motion.div
      className="h-[400vh] bg-black w-full relative pt-40 overflow-clip -z-10"
      ref={ref}
    >
      <motion.div className="fixed top-0 w-full h-screen flex justify-center items-center -z-10">
        <GoogleGeminiEffect
          svgPaths={leftPaths}
          pathLengths={[
            leftPathLengthFirst,
            leftPathLengthSecond,
            leftPathLengthThird,
            leftPathLengthFourth,
            leftPathLengthFifth,
          ]}
          className="w-full h-full"
        />
        <motion.div
          className="text-white flex flex-col justify-center items-center space-y-8 text-center"
          style={{
            // translateY: textTransalteY,
            // opacity: textOpacity,
          }}
        >
          <h3 className="text-[60px] leading-[1.3]">International Relocation</h3>
          <p className="w-full text-[24px]">
            With over 15 years of experience, Royal International Worldwide
            Relocations is a trusted leader in the relocation industry. We offer
            reliable, safe, and affordable services both domestically and
            internationally, with a focus on quality and timely delivery
          </p>
          {showFigure &&
            <motion.div
              className="flex justify-center gap-4 gap-x-10"
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              // style={{
              //   translateY: figureTransalteY,
              //   opacity: figureOpacity,
              // }}
            >
              <div className="space-y-2 text-[16px]">
                <FigureDigits digits={150} text="K" />
                <p className="uppercase">home moving</p>
              </div>
              <div className="space-y-2 text-[16px]">
                <FigureDigits digits={250} text="K" />
                <p className="uppercase">ship expedition</p>
              </div>
            </motion.div>
          }
        </motion.div>
        <GoogleGeminiEffect
          svgPaths={rightPaths}
          pathLengths={[
            rightPathLengthFirst,
            rightPathLengthSecond,
            rightPathLengthThird,
            rightPathLengthFourth,
            rightPathLengthFifth,
          ]}
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default OurExpertise;