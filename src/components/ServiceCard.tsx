import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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
        top: index*20,
        scaleX: scaleX[index],
      }}
    >
      <motion.div
        className={`w-3/4 h-3/4 grid grid-cols-2 items-center gap-x-12 p-12 border rounded-3xl overflow-hidden`}
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
        <div className='space-y-4'>
          <h3 className='text-5xl font-extralight'>{title}</h3>
          <h4 className='text-2xl font-extralight'>{subtitle}</h4>
          <p className='font-extralight'>{description}</p>
          <button className='px-4 py-2 rounded-md bg-gray-400'>Explore &#8594;</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
