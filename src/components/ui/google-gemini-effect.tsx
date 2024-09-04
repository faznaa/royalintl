"use client";

import { cn } from "../../lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
} as const;

interface SvgPath {
  path: string;
  color: string;
}

interface GoogleGeminiEffectProps {
  svgPaths: SvgPath[]; // Include the svgPaths prop here
  pathLengths: MotionValue<number>[];
  className?: string;
}

export const GoogleGeminiEffect: React.FC<GoogleGeminiEffectProps> = ({
  svgPaths,
  pathLengths,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <svg
        // width="337"
        // height="362"
        viewBox="0 0 337 362"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        // className="absolute right-0 top-1/2 w-full"
      >
        {svgPaths.map((pathData, index) => (
          <React.Fragment key={index}>
            <motion.path
              d={pathData.path}
              stroke={pathData.color}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              style={{ pathLength: pathLengths[index] }}
              transition={transition}
            />
            <motion.path
              d={pathData.path}
              stroke={pathData.color}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              style={{ pathLength: pathLengths[index] }}
              filter="url(#blurMe)"
            />
          </React.Fragment>
        ))}

        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
