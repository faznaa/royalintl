import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FadeIn from './FadeIn';

interface ServiceCardProps {
  bg: string;
  textColor: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  index: number;
}

const scaleX: { [key: number]: number } = {
  0: 1,
  1: 1.02,
  2: 1.04,
  3: 1.05,
}


const ServiceCard: React.FC<ServiceCardProps> = ({ bg, textColor, title, subtitle, description, src, index }) => {
 
  return (
    <motion.div
      className='w-full h-screen sticky flex justify-center items-center overflow-hidden'
      style={{
        top: index*30,
        scaleX: scaleX[index],
      }}
      id={`service-${index}`}
    >
      <motion.div
        className={`w-3/4 h-3/4 grid grid-cols-2 items-center gap-x-12 sm:gap-x-20 p-12 border rounded-3xl overflow-hidden`}
        style={{
          backgroundColor: bg,
          color: textColor,
        }}
      >
        {/* Image */}
        <div className='w-full h-full'>
          <img src={src} alt={title} className='w-full h-full object-cover' />
        </div>
        {/* Text content */}
        <FadeIn>
        <div className='space-y-4'>
          <h3 className='text-5xl font-medium'>{title}</h3>
          <h4 className='text-2xl font-extralight'>{subtitle}</h4>
          <p className='font-extralight py-4'>{description.slice(0,150)}</p>
          <button className='px-4 py-2 rounded-3xl bg-gray-100 text-black'>Explore &#8594;</button>
        </div>
        </FadeIn>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
