import { World } from "../ui/globe";
import { globeConfig, sampleArcs } from "../../data/globeutils";
import { FlipWords } from "../FlipWords";
import { cubicBezier, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import PathAnimationTest from "components/PathAnimationTest";




export default function GridBackground() {

 
    return (
      <div className="h-screen w-full dark:bg-black bg-black  relative flex items-center justify-center">
      <div className="absolute pointer-events-none z-20 inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

           {/* A circular blur effect / shadow around the globe */}
      {/* <div className="absolute w-48 h-48 z-10 left-3/4 top-1/4 ml-20 mt-14 blur-2xl bg-[#C5D0D4] rounded-full"/> */}

      <div className="absolute w-screen h-screen">
  <svg className="w-full h-full" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grida" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
      </pattern>


      {/* <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
      </linearGradient> */}
        <motion.linearGradient
              id={`lineGradient`}
              gradientUnits="userSpaceOnUse"
              x1={"0%"} y1={"0%"} x2="100%" y2="100%"
              className="z-50"
            //   className={`${visible ? 'visible z-20' :'hidden'}`}
            >
               {/* <stop offset="0%" style={{ stopColor: "blue", stopOpacity: 1 }} />
               <stop offset="100%" style={{ stopColor: "cyan", stopOpacity: 1 }} /> */}
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#grida)" />


    <motion.path
  id="gridPath"
  d="M 200 200 
     L 360 200 
     L 360 360
     L 480 360
     L 480 480
     L 800 480
     L 800 360
     L 920 360
     L 920 440
    
     "
  stroke="url(#lineGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/>
<path
  id="gridPath2"
  d="M 480 600
     L 480 320
     L 800 320
     L 800 600
     L 480 600

     "
  // stroke="url(#lineGradient)"
  strokeWidth="2"
  fill="none"
/>

{/* FINAL CODE  */}
{/* <circle cx="0" cy="0" r="1" fill="none" stroke="url(#lineGradient)" strokeWidth="2">
  <animateMotion dur="5s" repeatCount="indefinite" keyTimes="0;0.5;1">
    <mpath href="#gridPath" />
  </animateMotion>
</circle>  */}


<circle cx="200" cy="200" r="4" fill="limegreen" stroke="none">
</circle>
<circle cx="200" cy="200" r="4" fill="limegreen" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="10s" repeatCount="indefinite">
    {/* <mpath href="#gridPath" /> */}
  </animateMotion>

</circle>
<circle cx="920" cy="440" r="4" fill="skyblue" stroke="none">
</circle>
<circle cx="920" cy="440" r="4" fill="skyblue" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="10s" repeatCount="indefinite">
    {/* <mpath href="#gridPath" /> */}
  </animateMotion>

</circle>

{/* <circle cx="0" cy="0" r="4" fill="skyblue" stroke="none">
  <animate
    attributeName="r"
    values="4;8;4" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animate
    attributeName="opacity"
    values="1;0.5;1" 
    dur="1s"
    repeatCount="indefinite"
  />
  <animateMotion dur="5s" repeatCount="indefinite">
    <mpath href="#gridPath2" />
  </animateMotion>

</circle> */}

 </svg>
</div>


      <div className="absolute w-96 h-72 z-10 left-3/4 top-1/4 mr-32 ">
  
            {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
            {/* <ScrollLottieAnimation /> */}
          </div>
     <div>
  
     <p className="text-4xl sm:text-7xl font-semibold relative z-20 text-gray-300
      
      ">
       We offer you <FlipWords words={['Expertise','Efficiency','Reliability']} />
     </p>
     <p className="text-xl sm:text-2xl text-center mt-8  relative z-20 text-gray-300 ">
       Just a simple Subtitle here to give you an idea.<br/> We offer you all the services.
     </p>
     <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
  
    className="animate-bounce  w-12 h-12 rounded-full fixed z-20 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-32">
   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
  </motion.svg>
     </div>
    </div>
    );
  }