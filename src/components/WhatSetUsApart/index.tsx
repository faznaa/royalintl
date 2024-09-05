import FadeIn from "components/FadeIn";
import PingDot from "components/PingDot";
import ProgressLineSVG from "components/ProgressLineSvg";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const dummyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);
const whatSetsusapart = [
  {
    text: "100% safety and quality migration",
    icon: dummyIcon,
    top: "40%",
    left: "10%",
  },
  {
    text: "Best packing materials",
    icon: dummyIcon,
    top: "40%",
    left: "20%",
  },
  {
    text: "Modern moving equipment",
    icon: dummyIcon,
    top: "45%",
    left: "62%",
  },
  {
    text: "24X7 Tracking and support",
    icon: dummyIcon,
    top: "70%",
    left: "10%",
  },
  {
    text: "100% safety and quality migration",
    icon: dummyIcon,
    top: "70%",
    left: "20%",
  },
  {
    text: "Best packing materials",
    icon: dummyIcon,
    top: "70%",
    left: "30%",
  },
];

const WhatSetUsApart = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 60%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Scaling transforms
  const cardTranslateY = [
    useTransform(scrollYProgress, [0, 0.4, 0.45, 0.47, 1], [1, 1, 1.2, 1, 1]),
    useTransform(scrollYProgress, [0, 0.28, 0.3, 0.35, 1], [1, 1, 1.2, 1, 1]),
    useTransform(scrollYProgress, [0, 0.18, 0.2, 0.25, 1], [1, 1, 1.2, 1, 1]),
    useTransform(scrollYProgress, [0, 0.5, 0.55, 0.6, 1], [1, 1, 1.2, 1, 1]),
    useTransform(scrollYProgress, [0, 0.65, 0.7, 0.75, 1], [1, 1, 1.2, 1, 1]),
    useTransform(scrollYProgress, [0, 0.78, 0.83, 0.85, 1], [1, 1, 1.2, 1, 1])
  ];

  // Box shadow transforms
  const boxShadowTransforms = [
    useTransform(scrollYProgress, [0, 0.28, 0.3, 0.35, 1], [false, true, true, false, false]),
    useTransform(scrollYProgress, [0, 0.18, 0.2, 0.25, 1], [false, true, true, false, false]),
    useTransform(scrollYProgress, [0, 0.1, 0.15, 0.2, 1], [false, true, true, false, false]),
    useTransform(scrollYProgress, [0, 0.35, 0.4, 0.47, 1], [false, true, true, false, false]),
    useTransform(scrollYProgress, [0, 0.4, 0.45, 0.5, 1], [false, true, true, false, false]),
    useTransform(scrollYProgress, [0, 0.5, 0.55, 0.58, 1], [false, true, true, false, false])
  ];
//  useEffect(()=>{
//    console.log(boxShadowTransforms[0]);

//  }, [boxShadowTransforms[0]])
  return (
    <section ref={ref} className="bg-primaryBg w-full h-auto flex flex-col justify-center items-center py-32"
      // style={{
      //   backgroundColor: "#F7F7FB",
      // }}
    >
      <FadeIn>
        <div className="flex flex-col justify-center items-center gap-y-6 text-center">
          <h1 className="text-6xl">What sets us apart</h1>
          <p className="text-2xl w-1/2 text-gray-400">
            Over the last 15 years, we've grown into an international relocation company with a presence of 20+ partners around the world.
          </p>
        </div>
      </FadeIn>
      <motion.div className="relative w-full h-screen flex justify-center">
        <PingDot top="2" left="49.55" width="w-4" height="h-4" scale="scale-100"/>
        <PingDot top="95.5" left="49.55" width="w-4" height="h-4" scale="scale-100"/>
        <div className="w-full h-full mx-auto absolute top-0 z-0">
          <ProgressLineSVG progress={progress} />
        </div>
        <div className="w-2/4 h-3/4 grid grid-cols-3 justify-center items-center mt-24 z-10">
          {whatSetsusapart?.map((i, index) => (
            <motion.div
              key={index}
              className="bg-white border max-w-[220px] h-[220px] rounded-xl border-gray-200 flex flex-col items-center justify-evenly justify-self-center text-center p-4"
              style={{
                scale: cardTranslateY[index],
                // boxShadow: boxShadowTransforms[index] ? `rgba(255, 0, 0, .4) 0px 15px 25px, rgba(255, 0, 0, .4) 0px 5px 10px` : 'none',
              }}
            >
              <div className="text-red-500 w-36 text-center flex justify-center items-center mb-4 scale-[2]">
                {i.icon}
              </div>
              <div className="text-xl text-gray-700">{i.text}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhatSetUsApart;
