"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "../../../lib/utils";

export const TracingBeam2 = ({
  children,
  className,
  word,
  isVisible,
}: {
  children: React.ReactNode;
  className?: string;
  word:any,
  isVisible?:boolean
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgWidth(contentRef.current.offsetWidth);
    }
  }, []);

  const x1 = useSpring(
    useTransform(scrollYProgress, [0, 0.55,1], [50, svgWidth,svgWidth]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const x2 = useSpring(
    useTransform(scrollYProgress, [0, 0.55,1], [50, 50,svgWidth]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

 
  return (
    <motion.div
      ref={ref}
      className={cn("relative w-screen mx-auto h-[400vh]", className)}
    >
     
     {word &&  <div className={`${isVisible? 'fixed'  : 'hidden'} bottom-3 left-3 z-50`}
      >
        
        <svg
          viewBox={`0 0 ${svgWidth} 20`}
          width={svgWidth}
          height="20"
          className=" mt-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 0 1 H -36 ${svgWidth}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            className="z-20"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 0 1 H -36 ${svgWidth}`}
            fill="none"
            stroke={`url(#${word})`}
            strokeWidth="1.25"
            className="z-30 motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs 
          >
            <motion.linearGradient
              id={`${word}`}
              gradientUnits="userSpaceOnUse"
              x1={x1}
              x2={x2}
              y1="0"
              y2="0"
              className="z-50"
            //   className={`${visible ? 'visible z-20' :'hidden'}`}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>}
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
