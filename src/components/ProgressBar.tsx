import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ProgressBarProps {
  index: number;
  length: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ index, length }) => {
  const { scrollYProgress } = useScroll();
  const progress: MotionValue<number> = useTransform(
    scrollYProgress,
    [index / length, (index + 1) / length],
    [0, 1]
  );

  return (
    <div className="fixed top-1/2 left-10 w-2 h-20 border border-gray-400 rounded-full overflow-hidden">
      <motion.div
        className="w-full bg-blue-500 rounded-full"
        style={{
          height: '100%',
          scaleY: progress,
          transformOrigin: 'top',
        }}
      />
    </div>
  );
};

export default ProgressBar;