import { World } from "../ui/globe";
import { globeConfig, sampleArcs } from "../../data/globeutils";
import { FlipWords } from "../FlipWords";
import { AnimatePresence, cubicBezier, motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import PathAnimationTest from "components/PathAnimationTest";
import BorderMagicBtn from "components/ui/BorderMagicBtn";

const Circles = () => {
  return (
    <>
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
</>
  )
}
const Gradients = () => {
  return (
    <defs>
      <motion.linearGradient
              id={`pinkGradient`}
              gradientUnits="userSpaceOnUse"
              x1={"0%"} y1={"0%"} x2="100%" y2="100%"
              className="z-50"
            >
              <stop offset="0.0564843" stop-color="#FF4A81"></stop>
              <stop stop-color="#FF4A81" stop-opacity="0"></stop>
              <stop offset="0.4616" stop-color="#DF6CF6"></stop>
              <stop offset="1" stop-color="#0196FF" stop-opacity="0"></stop>
               
            </motion.linearGradient>
            <motion.linearGradient
            id={`violetGradient`}
            gradientUnits="userSpaceOnUse"
            x1={"0%"} y1={"0%"} x2="100%" y2="100%"
            className="z-50">
              <stop stopColor="#E2CBFF" stopOpacity="0"></stop>
              <stop stopColor="#393BB2"></stop>

              <stop offset="0.4616" stopColor="#E2CBFF"></stop>
              <stop offset="1" stopColor="#393BB2" stopOpacity="0"></stop>
            </motion.linearGradient>
            
            <motion.linearGradient
              id={`blueGradient`}
              gradientUnits="userSpaceOnUse"
              x1={"0%"} y1={"0%"} x2="100%" y2="100%"
              className="z-50">
                 <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#4DE0F9"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
              <motion.linearGradient
          id="purpleGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0" stopColor="#FF47D7" stopOpacity="0" />
          <stop stopColor="#FF47D7"></stop>

          <stop offset="0.325" stopColor="#6E00C5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
              <motion.linearGradient
              id="orangeGradient"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7432" stopOpacity="0" />
              <stop offset="0.05" stopColor="#FF7432" />
              <stop offset="0.37" stopColor="#F7CC4B" />
              <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
            </motion.linearGradient>
            <motion.linearGradient
              id="redBlueGradient"
              gradientUnits="userSpaceOnUse"
              >
      <stop offset="0%" stopColor="rgba(63,94,251,1)" />
      <stop offset="50%" stopColor="rgba(250,210,250,1)" />

      <stop offset="100%" stopColor="rgba(252,70,107,1)" />
              </motion.linearGradient>
    </defs>
  );
};

const Path1 = () => {
  return (
 <>
 <motion.path
  id="gridPath"
  d="M 400 1600
     L 920 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 5, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
<motion.path
  id="gridPath"
  d="M 640 1600
     L 1160 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 5, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
<motion.path
  id="gridPath"
  d="M 520 1600
     L 1040 0
     L 0 0
     "
  stroke="url(#pinkGradient)"
  strokeWidth="6"
  strokeDasharray="90, 40"
  // strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{  opacity: 0 }}
  animate={{  opacity:1 }}
  transition={{ duration: 2,delay: 3, once:true,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
</>

  )
}

const Path2 = () => {
  return (
    <motion.path
  id="gridPath"
  d="M 0 200 
     L 520 200
     L 520 0
     "
  stroke="url(#purpleGradient)"
  strokeWidth="1.5"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

const PathAll = ({ d ,stroke,duration,delay,repeatDelay}:any) => {
  return (
    <motion.path
  id="gridPath"
  d={d}
  stroke={stroke}
  strokeWidth="1.5"
  strokeLinecap="round"
  fill="none"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration,delay, repeat: Infinity, repeatType: 'mirror', repeatDelay,
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

const Path4 = () => {
  return (
    <motion.path
  id="gridPath"
  d="M 800 0
     L 800 160
     L 1600 160
     "
  stroke="url(#pinkGradient)"
  strokeWidth="1"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}
const Path3 = () => {
  return (
      
<motion.path
  id="gridPath"
  d="M 0 300
    L 360 300
    L 360 1000
     "
  stroke="url(#violetGradient)"
  strokeWidth="1.5"
  strokeLinecap="round"
  fill="none"
  opacity={0.8}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

const Path5 = () => {
  return (
    <motion.path
  id="gridPath"
  d="M 920 1600
     L 920 480
     L 1600 480
     "
  stroke="url(#pinkGradient)"
  strokeWidth="2"
  strokeLinecap="round"
  fill="none"
  opacity={1}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', 
   ease: cubicBezier(0.5, 0.1, 0.13, 1) }}
/> 
  )
}

export default function GridBackground() {

  const { scrollYProgress } = useScroll();
  const size = useTransform(scrollYProgress, [0,0.2], [1,0.1]);
  const sizeH = useTransform(scrollYProgress, [0,0.2], [1,0.1]);
 
    return (
      <div className="h-screen w-full dark:bg-black bg-black  relative flex items-center justify-center">
      <div className="absolute pointer-events-none z-20 inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

       

      <div className="absolute w-screen h-screen">
  <svg className="w-full h-full" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grida" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.3" />
      </pattern>             
    </defs>
    
    <rect width="100%" height="100%" fill="url(#grida)" />
      <Gradients />
      {/* <Circles /> */}

      {/* Road */}
      {/* <Path1 /> */}

      <Path2 />
      <Path3 />
      <PathAll 
      d="M 0 120 
     L 720 120
     L 720 0"
     stroke="url(#blueGradient)"
     duration={4} repeatDelay={0} delay={1} />
     <PathAll 
      d="M 0 560 
     L 720 560
     L 720 1100"
     stroke="url(#blueGradient)"
     duration={4} repeatDelay={2} delay={2} />
     <PathAll 
      d="M 0 440 
     L 640 440
     L 640 1100"
     stroke="url(#pinkGradient)"
     duration={4} repeatDelay={0} delay={3} />
      {/* <PathAll
      stroke="url(#pinkGradient)"
      d="M 0 240 
     L 40 240
     L 40 280
     L 80 280
     L 80 320
     L 120 320
     L 120 360
     L 160 360
     L 160 400
     L 200 400
     L 200 440
     L 240 440
     L 240 480
     L 280 480
     L 280 520
     L 320 520
     L 320 560
     L 360 560
     L 360 600
     L 400 600
     L 400 640
     L 440 640
     L 440 680
     L 480 680
     " duration={4} repeatDelay={5} delay={1} /> */}
     {/* <PathAll
      stroke="url(#orangeGradient)"
      d="M 40 360
      L 120 360
      L 120 440
      L 200 440
      L 200 520
      L 280 520
      L 280 600
      L 360 600
      L 360 680
      L 440 680
      L 440 760
      L 520 760
      L 520 840
      L 600 840
      L 600 920
      L 680 920
      " duration={4} repeatDelay={9} delay={1} /> */}
      
      {/* <PathAll
      stroke="url(#blueGradient)"
      d="M 0 280
        L 200 280
        L 200 240
        L 160 240
        L 160 440
        L 320 440
        L 320 400
        L 280 400
        L 280 1000

      " duration={4} repeatDelay={0} delay={0} />

<PathAll
      stroke="url(#purpleGradient)"
      d="M 0 320
        L 240 320
        L 240 200
        L 120 200
        L 120 480
        L 360 480
        L 360 360
        L 240 360
        L 240 1000

      " duration={4} repeatDelay={2} delay={1} /> */}
      {/* <Path4 />
      <Path5 /> */}
      
    




{/* FINAL CODE  */}
{/* <circle cx="0" cy="0" r="1" fill="none" stroke="url(#lineGradient)" strokeWidth="2">
  <animateMotion dur="5s" repeatCount="indefinite" keyTimes="0;0.5;1">
    <mpath href="#gridPath" />
  </animateMotion>
</circle>  */}



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

    {/* A circular blur effect / shadow around the globe */}
      <motion.div className="absolute w-[350px] h-[350px] z-10 right-0  mr-32 blur-2xl bg-[#C5D0D4] rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 5 }}      
      />
      <div className="absolute h-[500px] w-[600px] z-20 right-0  mr-18  ">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
     <div>
  
     {/* <p className="text-4xl sm:text-7xl font-semibold relative z-20 text-gray-300
      
      ">
       We offer you <FlipWords words={['Expertise','Efficiency','Reliability']} />
     </p>
     <p className="text-xl sm:text-2xl text-center mt-8  relative z-20 text-gray-300 ">
       Just a simple Subtitle here to give you an idea.<br/> We offer you all the services.
     </p> */}
    <AnimatePresence>
    <motion.h1
     initial={{ opacity: 0, y:-50 }}
     animate={{ opacity: 1, y:0 }}
     transition={{ duration: 0.7 }}
     exit={{ opacity: 0, scale:0.8 }}
     style={{ scale: size }}
     className="text-4xl sm:text-5xl font-extralight relative z-20 text-gray-300 text-center mb-10 tracking-tighter">
      Moving Beyond Relocation - Innovating the <br /> Future of High-Tech Logistics</motion.h1>

<motion.h2
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.7}}
style={{scale: sizeH}}
className="text-4xl text-center sm:text-7xl font-medium relative z-20 text-gray-300 text-center tracking-tighter">
  We offer you <FlipWords words={['Expertise','Efficiency','Reliability']} />
</motion.h2>
    </AnimatePresence>
     <div className="w-full flex justify-center mt-10">
     <BorderMagicBtn >Get Started</BorderMagicBtn>
     </div>
     <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
  
    className="animate-bounce  w-12 h-12 bg-black/[0.6] py-2  rounded-full fixed z-20 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-32">
   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
  </motion.svg>
     </div>
    </div>
    );
  }