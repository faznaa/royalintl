import { World } from "../ui/globe";
import { globeConfig, sampleArcs } from "../../data/globeutils";
import { FlipWords } from "../FlipWords";
import { motion } from "framer-motion";

export default function GridBackground() {
    return (
      <div className="h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute w-96 h-72 z-10 left-3/4 top-1/4 mr-32 ">
      {/* A circular blur effect / shadow around the globe */}
  
            <World data={sampleArcs} globeConfig={globeConfig} />
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
  
     <p className="text-4xl sm:text-7xl font-semibold relative z-20 text-gray-300
      
      ">
       We offer you <FlipWords words={['Expertise','Efficiency','Reliability']} />
     </p>
     <p className="text-xl sm:text-2xl text-center mt-8  relative z-20 text-gray-300 ">
       Just a simple Subtitle here to give you an idea.<br/> We offer you all the services.
     </p>
     <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
  
    className="animate-bounce  w-12 h-12 rounded-full fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-32">
   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
  </motion.svg>
     </div>
    </div>
    );
  }