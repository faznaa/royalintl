import React, { useRef } from 'react';
import svg from '../assets/svg/map2.svg';
import PingDot from '../components/PingDot';
import FadeIn from './FadeIn';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * A React component that displays a scalable world map with ping dots indicating
 * locations on the map. The map scales as the user scrolls, and a heading and
 * description are displayed above the map.
 *
 * The map scaling is handled using Framer Motion's `useScroll` and `useTransform` hooks.
 * It features a dynamic scale that increases as the user scrolls down.
 * 
 * The component also makes use of the `PingDot` and `FadeIn` components to display
 * location indicators on the map and to animate text elements, respectively.
 * 
 * @example
 * * // Example usage:
 * import Map from './Map';
 *
 * const App = () => (
 *   <div>
 *     <Map />
 *   </div>
 * );
 * 
 * export default App;
 * @param props This component does not receive props
 * 
 * @returns {JSX.Element}  A div container with the following structure:
 *  - div wraps title and description with fade in effect
 *  - motion.div wraps another motion div that contains ping dot and map
 * 
 *  @see {@link PingDot} for the component that displays the ping dots on the map.
 * @see {@link FadeIn} for the component that animates the fade-in effect of the text.
 * @see {@link https://www.framer.com/motion/} for more information about Framer Motion.
 */

const Map = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  });

  const mapScale = useTransform(scrollYProgress, [0, .8], [.8, 1]); // on scroll map scale up

  return (
    <div ref={ref} className='w-full h-auto flex flex-col justify-center items-center text-center space-y-6 pb-8 overflow-hidden'>
      <div
        // ref={ref}
        className={`w-[60%] space-y-6 transform transition-all duration-[1s] ease-out`}
      >
        {/* <h1 className='text-3xl font-medium'>An Expert in International Relocation Services</h1> */}
        <FadeIn>
        <h1 className='text-6xl'>We cover all continents</h1>
        <p className='text-2xl w-2/3 text-gray-400 mx-auto py-6 pb-10'>Over the last 15 years , we've grown into an international relocation company with a presence of 20+ partners aroudn the world.</p>
   
        </FadeIn>
        {/* <h2 className='text-5xl font-extralight'>We Have More Than 20+ Country Coverage Area</h2>
        <p className='text-lg'>In the last 15 years, We have become an international relocation company by  expanding our services to offer a strong presence and coverage in 20+  countries across Europe, Asia and Africa through our partners.</p> */}
      </div>
      <motion.div 
        // initial={{ scale: .5, translateY: 20 }}
        // whileInView={{ scale: 1, translateY: 0 }}
        // transition={{ duration: 1.5, ease: "easeIn" }}
        className='w-full overflow-hidden h-full rounded-t-[100%] flex justify-center items-center'
      >
        {/* ping dot is used for indicating location in the map and it takes props for placing it across the map */}
        <motion.div className='w-[80%] relative' style={{ scale: mapScale }}>
          <PingDot top="20" left="30"/>
          <PingDot top="30" left="15"/>
          <PingDot top="35" left="20"/>
          <PingDot top="45" left="45"/>
          <PingDot top="30" left="65"/>
          <PingDot top="35" left="73.5"/>
          <PingDot top="38" left="70"/>
          <img src={svg} alt="svg" className='w-full h-auto object-contain z-0'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Map;