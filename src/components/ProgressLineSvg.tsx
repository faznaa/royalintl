import React from "react";
import { motion, MotionValue } from "framer-motion";

interface ProgressLineSVGProps {
  progress?: MotionValue;
}
/**
 * This is used for highlighting scrollProgress in WhatSetsUsApart section based on scroll using framer motion
 * @example
 * // Example usage of the ProgressLineSVG component
 * import ProgressLineSVG from "components/ProgressLineSVG";
 * 
 * function App() {
 *   return <ProgressLineSVG progress={progress}/>;
 * }
 * @param {ProgressLineSVGProps} props progress prop should be motion value from 0 to 1.
 * @returns {JSX.Element} a div container with the following strucuture
 *  - svg wraps path and motion.path
 *  - path is initial line across the component
 *  - motion.path is used for indicating the scrollProgress of the parent WhatsetsUsApart section.
 */
const ProgressLineSVG: React.FC<ProgressLineSVGProps> = ({ progress = 0 }) => {
  return (
    <div className="w-full h-full z-0">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        // preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M50 3 L50 8 C50 13 56 13 56 13 H56 80 C84 13 84 16 84 18 V28 C84 31 82 31 80 31 H80 18 C18 31 16 31 16 34 V67 C16 68 16 70 18 70 H20 80 C84 70 84 73 84 73 V85 C84 88 82 88 80 88 H80 54 C50 88 50 92 50 92 V96"
          stroke="#E5E6E8"
          strokeWidth=".3"
        />
        <motion.path
          d="M50 3 L50 8 C50 13 56 13 56 13 H56 80 C84 13 84 16 84 18 V28 C84 31 82 31 80 31 H80 18 C18 31 16 31 16 34 V67 C16 68 16 70 18 70 H20 80 C84 70 84 73 84 73 V85 C84 88 82 88 80 88 H80 54 C50 88 50 92 50 92 V96"
          // d="M316 0L316 507.03C316 537.59 340.774 562.364 371.333 562.364L527.682 562.364C594.132 562.364 648 616.232 648 682.682V682.682C648 749.132 594.132 803 527.682 803L170.75 803C82.5225 803 11 874.523 11 962.75V962.75C11 1050.98 82.5225 1122.5 170.75 1122.5L527.5 1122.5C594.05 1122.5 648 1176.45 648 1243V1243C648 1309.55 594.05 1363.5 527.5 1363.5L371.333 1363.5C340.774 1363.5 316 1388.27 316 1418.83L316 1697.5"
          stroke="#E4675D"
          strokeWidth=".3"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: progress }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        {/* The below is used for gradient color path */}
        {/* <defs>
          <linearGradient
            id="line-progress"
            x1="-6.08%"
            y1="98.08%"
            x2="-6.72%"
            y2="-1.92%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E5E6E8" />
            <stop offset="0.172313" stopColor="#324EEF" />
            <stop offset="0.881552" stopColor="#324EEF" />
            <stop offset="1" stopColor="#E5E6E8" />
          </linearGradient>
        </defs> */}
      </svg>
    </div>
  );
};

export default ProgressLineSVG;
