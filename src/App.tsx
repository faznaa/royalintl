import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar";
import ParallaxText from "./components/ParallaxText";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollImageExpand from "./components/ScrollImageExpand";
import AnimatedText from "./components/AnimatedText";
import ReactLenis from "lenis/dist/lenis-react";
import ScrollLottieAnimation from "./components/ScrollLottieAnimation";
import { FlipWords } from "./components/FlipWords";
import { Globe, World } from "./components/ui/globe";
import { GlobeDemo } from "./components/GlobeDemo";
import { globeConfig, sampleArcs } from "./data/globeutils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function GridBackgroundDemo() {
 
  return (
    // <div className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
    <div className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute top-0 left-1/4 w-[2px] h-full bg-white animate-verticalLine1"></div>
      <div className="absolute top-0 left-3/4 w-[2px] h-full bg-white animate-verticalLine2"></div>
      
      {/* Horizontal Lines */}
      <div className="absolute left-0 top-1/4 w-full h-[2px] bg-white animate-horizontalLine1"></div>
      <div className="absolute left-0 top-3/4 w-full h-[2px] bg-white animate-horizontalLine2"></div>
      
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 */}
    <div className="absolute w-full h-72 z-10 left-1/4 top-1/4">
          {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
          {/* <ScrollLottieAnimation /> */}
        </div>
        {/* <DotLottieReact
        className="absolute w-full h-36 md:h-72 z-10 left-1/4 top-1/4"
        src="https://lottie.host/embed/a26c72e0-ca92-4684-a6b6-d3be7df9c6dd/0OpMpyRlsu.json"
        autoplay={true}
        loop={false}
        // style={{ maxWidth: "600px" }}
      /> */}
   <div>
    <h1 className="text-4xl sm:text-5xl font-extralight relative z-20 text-gray-300 text-center mb-5">Moving Beyond Relocation - Innovating the <br /> Future of High-Tech Logistics</h1>

   <h2 className="text-4xl text-center sm:text-4xl font-medium relative z-20 text-gray-300 text-center">
     We offer you <FlipWords words={['Expertise','Efficiency','Reliability']} />
   </h2>
   <p className="text-xl sm:text-2xl text-center mt-8  relative z-20 text-gray-300 ">
   From data centers to clean rooms, we ensure seamless transitions <br/> in the most critical environments
   </p>
   <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
   //  style={{ opacity: opacityImg }}

  className="animate-bounce  w-12 h-12 rounded-full fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-32">
 <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</motion.svg>
   </div>
  </div>
  );
}
function App() {
  const { scrollYProgress } = useScroll();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible1(latest > 0.25 && latest < 0.55);
      setIsVisible2(latest > 0.45 && latest < 0.85);
      setIsVisible3(latest > 0.66);
    });
  }, [scrollYProgress]);
  return (
    <div className="">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap" rel="stylesheet"/>
      </head>
      <Navbar />
  
    {/* <ScrollLottieAnimation/> */}
    <GridBackgroundDemo />
    {/* <GlobeDemo/> */}
    
      <ReactLenis root options={{ lerp: 0.5 }}>
     
        {/* <ScrollImageExpand/> */}
        <AnimatedText word="Migration " isVisible={isVisible1} caption="Streamlined data transition" />
        <AnimatedText word="Precision " isVisible={isVisible2} caption="Clean room expertise."/>
        <AnimatedText word="Logistics " isVisible={isVisible3} caption="Specialized equipment handling."/>
      </ReactLenis>

    </div>
  );
}

export default App;
