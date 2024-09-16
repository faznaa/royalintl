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

/**
 * A component that renders an animated SVG effect based on scroll using framer motion taken inspiration form aceternity ui's google gemini effect.\
 * Reference - https://ui.aceternity.com/components/google-gemini-effect
 * @example
 * // Example usage of the GoogleGeminiEffect component
 * import GoogleGeminiEffect from "components/GoogleGeminiEffect";
 * 
 * function App() {
 *   return <GoogleGeminiEffect
 *             svgPaths={leftPaths}
 *             pathLengths={[
 *               leftPathLengthFirst,
 *               leftPathLengthSecond,
 *               leftPathLengthThird,
 *               leftPathLengthFourth,
 *               leftPathLengthFifth,
 *             ]}
 *             className="w-full h-full"
 *           />;
 * }
 * @param {GoogleGeminiEffectProps} props - The props for the GoogleGeminiEffect component are
 *  - svgPaths is an array[] containing path and color stroke for the path
 *  - pathLengths is also an array[] containing pathLength value from (0 - 1.2) for each path mentioned in svgPaths
 *  - className is an string, tailwind utility classed we will merge this classes in div container using tailwind merge package function cn().
 * @returns {React.FC} A div container with the following structure.
 *  - svg wraps an array of react fragment containing two motion paths (first path has stroke color without blur effect and second path also has path but with blur effects).- 
*/
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
            {/* React fragment used for wrapping elements without adding any extra DOM node like div, span, section */}
            <motion.path
              d={pathData.path}
              stroke={pathData.color}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              style={{ pathLength: pathLengths[index] }} // pathLength is an array, each value is a motion value from scrollYProgress
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
        {/* this def applies the blur effect to the path */}
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
