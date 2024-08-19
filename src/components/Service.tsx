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
  // const containerBorderRadius =useTransform(scrollYProgress, [0, 0.1,0.4,1], ['50%', '0%','0%','0%']);
  const gridScale = useTransform(scrollYProgress, [0.25, 0.5, 75, 1], [0, 1, 1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.25, 0.5, .75, 1], [0, 1, 1, 0]);
  const gridTranslateX = useTransform(scrollYProgress, [0.75, 1], ['0', isOdd() ? '-100%' : '100%']);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5,0.75,0.8,1], [0, 1,1,0.3,0]);
  const textTranslateY = useTransform(scrollYProgress, [0.5, .75], ['0%', '-100%']);
  const textVisiblity = useTransform(scrollYProgress, [0, .75, 0.8,1], ['visible', 'visible', 'hidden', 'hidden']);
  const textScale = useTransform(scrollYProgress, [0.75, 1], [1,0.8]);
  const textTranslateX = useTransform(scrollYProgress, [0.75, 1], ['0%', isOdd() ? '100%' : '-100%']);

  return (
    <motion.div
      ref={ref}
      className='h-[400vh] relative'
    >
      {index === 0 &&
        <div
          className="mt-[50vh] mx-32 text-5xl font-extralight text-center mb-10 leading-[1.5]"        
        >
          Royal International is expanding into niche services, specializing in data center migration, clean room & lab relocations, and tailored logistics for high-tech industries
        </div>
      }
      <motion.section
        className={`fixed top-0 w-full h-screen ${isOdd() ? 'bg-white text-black' : 'bg-black text-white'} flex items-center`}
        style={{
          translateX: containerTranslateX,
          translateY: containerTranslateY,
          // borderRadius: containerBorderRadius
        }}
      >
        {/* Section 1 */}
        <div className='w-full h-[90%] flex justify-start items-center p-10'>
          {/* Text */}
          <motion.div
            className={`${index % 2 !== 0 ? 'order-last ml-6 items-start' : 'mr-4 items-end'} w-1/2 h-1/2 overflow-hidden`}
            style={{
              visibility: textVisiblity,
              translateY:textTranslateX
            }}
          >
            <motion.h1
              className='text-5xl font-medium mb-4 tracking-tight'
              style={{
                opacity: textOpacity,
                scale: textScale,
              }}
            >
              {title}
            </motion.h1>
            <div className='h-full relative overflow-hidden'>
              {!isOdd() &&
                <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent via-30% to-black pointer-events-none z-10' />
              }
              <motion.p
                className={`text-4xl ${isOdd() ? 'text-gray-700' : 'text-gray-200'} font-normal  tracking-tighter z-0`}
                style={{
                  opacity: textOpacity,
                  translateY: textTranslateY,
                  scale: textScale,
                }}
              >
                <br/>
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
              <StaggeredGrid video={video} images={images} isBlackBg={isOdd() ? true : false} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Service;