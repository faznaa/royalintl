import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StaggeredGrid from './StaggeredGrid';

interface ServiceProps {
  title: string;
  description: string;
  video: string;
  images: string[];
  index: number;
}

const Service: React.FC<ServiceProps> = ({ title, description, video, images, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isOdd = () => index%2 !== 0
  const containerTranslateX = useTransform(scrollYProgress, [0, 0.25], [isOdd() ? '100%' : '-100%', '0%']);
  const containerTranslateY = useTransform(scrollYProgress, [0, 0.25], ['100%', '0%']);
  const gridScale = useTransform(scrollYProgress, [0.25, 0.5, 75, 1], [0, 1, 1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.25, 0.5, .75, 1], [0, 1, 1, 0]);
  const gridTranslateX = useTransform(scrollYProgress, [0.75, 1], ['0', isOdd() ? '-100%' : '100%']);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const textTranslateY = useTransform(scrollYProgress, [0.5, .75], ['0%', '-100%']);
  const textVisiblity = useTransform(scrollYProgress, [0, .75, 1], ['visible', 'hidden', 'hidden']);

  return (
    <motion.div
      ref={ref}
      className='h-[400vh] relative'
    >
      <motion.section
        className={`fixed top-0 w-full h-screen ${isOdd() ? 'bg-white text-black' : 'bg-black text-white'} flex items-center`}
        style={{
          translateX: containerTranslateX,
          translateY: containerTranslateY,
        }}
      >
        {/* Section 1 */}
        <div className='w-full h-[90%] flex justify-center items-center p-10'>
          {/* Text */}
          <motion.div
            className={`${index % 2 !== 0 ? 'order-last ml-6 items-start' : 'mr-4 items-end'} w-1/2 h-1/2 overflow-hidden`}
            style={{
              visibility: textVisiblity,
            }}
          >
            <motion.h1
              className='text-5xl font-medium mb-4'
              style={{
                opacity: textOpacity,
              }}
            >
              {title}
            </motion.h1>
            <div className='h-full relative overflow-hidden'>
              {!isOdd() &&
                <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent via-30% to-black pointer-events-none z-10' />
              }
              <motion.p
                className='text-4xl font-medium z-0'
                style={{
                  opacity: textOpacity,
                  translateY: textTranslateY,
                }}
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
          {/* grid */}
          <motion.div
            className='w-1/2 h-full flex justify-center items-center'
            style={{
              translateX: gridTranslateX,
            }}
          >
            <motion.div
              className='w-full h-[95%]'
              style={{
                scale: gridScale,
                opacity: gridOpacity,
                translateX: gridTranslateX,
              }}
            >
              <StaggeredGrid video={video} images={images} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Service;