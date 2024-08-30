import React from 'react';
import svg from '../assets/svg/map1.svg';
import PingDot from '../components/PingDot';
import FadeIn from './FadeIn';
// import useIntersectionObserver from '../hooks/useIntersectionObserver';

function getDeviceDimensions() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
}

// Usage
const Map = () => {
  // const [ref, isVisible] = useIntersectionObserver({
  //   threshold: 0.1,
  // });
  const isVisible = true;

  const { width, height } = getDeviceDimensions();
  console.log(`Device width: ${width}px, height: ${height}px`);

  return (
    <div className='w-full  h-screen flex flex-col justify-center items-center text-center space-y-6 pb-8 overflow-hidden'>
      <div 
        // ref={ref} 
        className={`w-[60%] space-y-6 transform transition-all duration-[1s] ease-out bg-white`}
      >
        {/* <h1 className='text-3xl font-medium'>An Expert in International Relocation Services</h1> */}
        <FadeIn>
        <h1 className=' text-xl sm:text-4xl font-medium bg-white'>We cover all continents</h1>
        <p className='text-md sm:max-w-sm text-gray-400 mx-auto py-6 pb-10'>Over the last 15 years , we've grown into an international relocation company with a presence of 20+ partners aroudn the world.</p>
   
        </FadeIn>
        {/* <h2 className='text-5xl font-extralight'>We Have More Than 20+ Country Coverage Area</h2>
        <p className='text-lg'>In the last 15 years, We have become an international relocation company by  expanding our services to offer a strong presence and coverage in 20+  countries across Europe, Asia and Africa through our partners.</p> */}
      </div>
      <div className='w-full overflow-hidden h-[600px] rounded-t-[100%]'>
      <div className='w-full relative'>
        <PingDot top="20" left="10"/>
        <PingDot top="30" left="15"/>
        <PingDot top="35" left="8"/>
        <PingDot top="45" left="45"/>
        <PingDot top="55" left="65"/>
        <PingDot top="65" left="73.5"/>
        <PingDot top="53" left="72.1"/>
        <img src={svg} alt="svg" className='w-full h-auto object-cover z-0'/>
      </div>
      </div>
    </div>
  )
}

export default Map;