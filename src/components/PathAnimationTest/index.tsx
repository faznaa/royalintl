"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

const PathAnimationTest = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    // if (ref.current) {
    //   setSvgHeight(ref.current.offsetHeight);
    // }

    controls.start({
      y1: [50, 1000],
      y2: [50, 1000 - 200],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [ controls]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
    >
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={controls}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: "white",
              borderColor: "var(--emerald-600)",
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 200 200 
V 160 
L 240 200 
V ${svgHeight * 0.8} 
L 200 ${svgHeight * 0.8 + 40} 
V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 200 200 
V 160 
L 240 200 
V ${svgHeight * 0.8} 
L 200 ${svgHeight * 0.8 + 40} 
V ${svgHeight}`}
            fill="none"
            stroke="url(#gradientnew)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
  <linearGradient
    id="gradientnew"
    gradientUnits="userSpaceOnUse"
    x1="0"
    x2="0"
    y1="0"
    y2="1"
  >
    <stop stopColor="#18CCFC" stopOpacity="0"></stop>
    <stop stopColor="#18CCFC"></stop>
    <stop offset="0.325" stopColor="#6344F5"></stop>
    <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
  </linearGradient>
</defs>

<motion.path
  d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
  fill="none"
  stroke="url(#gradientnew)"
  strokeWidth="1.25"
  animate={controls}
  transition={{
    duration: 10,
    repeat: Infinity,
    repeatType: "mirror",
  }}
/>

        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default PathAnimationTest;