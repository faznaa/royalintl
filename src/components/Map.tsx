import React from 'react';
import svg from '../assets/svg/map2.svg';
import PingDot from '../components/PingDot';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center text-center space-y-6 pb-8 overflow-hidden'>
      <div 
        // ref={ref}
        className={`w-[60%] space-y-6 transform transition-all duration-[1s] ease-out bg-white`}
      >
        {/* <h1 className='text-3xl font-medium'>An Expert in International Relocation Services</h1> */}
        <FadeIn>
        <h1 className='text-6xl bg-white'>We cover all continents</h1>
        <p className='text-2xl w-2/3 text-gray-400 mx-auto py-6 pb-10'>Over the last 15 years , we've grown into an international relocation company with a presence of 20+ partners aroudn the world.</p>
   
        </FadeIn>
        {/* <h2 className='text-5xl font-extralight'>We Have More Than 20+ Country Coverage Area</h2>
        <p className='text-lg'>In the last 15 years, We have become an international relocation company by  expanding our services to offer a strong presence and coverage in 20+  countries across Europe, Asia and Africa through our partners.</p> */}
      </div>
      <motion.div 
        initial={{ scale: .5, translateY: 20 }}
        whileInView={{ scale: 1, translateY: 0 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className='w-full overflow-hidden h-full rounded-t-[100%]'
      >
        <div className='w-full relative'>
          <PingDot top="20" left="30"/>
          <PingDot top="30" left="15"/>
          <PingDot top="35" left="20"/>
          <PingDot top="45" left="45"/>
          <PingDot top="30" left="65"/>
          <PingDot top="35" left="73.5"/>
          <PingDot top="38" left="70"/>
          <img src={svg} alt="svg" className='w-full h-auto object-contain z-0'/>
        </div>
      </motion.div>
    </div>
  )
}

export default Map;