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
function App() {
  const { scrollYProgress } = useScroll();
  const imgX = useTransform(scrollYProgress, [0, 1], [-200,0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textX = useTransform(scrollYProgress, [0, 1], [100,-100]);
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
      <ReactLenis root options={{ lerp: 0.9 }}>
      <ScrollImageExpand/>

     
<AnimatedText word="Migration " isVisible={isVisible1} caption="Streamlined data transition" />
<AnimatedText word="Precision " isVisible={isVisible2} caption="Clean room expertise."/>
<AnimatedText word="Logistics " isVisible={isVisible3} caption="Specialized equipment handling."/>
      </ReactLenis>


      {/* <HomePage />
      <div className=" text-4xl  leading-tight bg-red-800 text-white py-20  h-[500vh]">
      <ParallaxText baseVelocity={-5}>Redefining Priorities</ParallaxText>
      <ParallaxText baseVelocity={5}>Redefining Priorities</ParallaxText>
      
      <div className="grid sm:grid-cols-2 py-10">
        <div>
        <motion.img src='hero1.jpg' alt="a picture of London" className="grayscale w-full h-full"
        style={{x:imgX}}
        whileInView={{ opacity: 1 }}
        />
        </div>
        <motion.div style={{x:textX}} className="text-lg w-full  p-20 leading-9">
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonoru
      </motion.div>
     
      </div>
     
      </div>
      <div className="text-lg w-full px-25 p-20 bg-red-800">
        Where does it come from? Contrary to popular belief, Lorem Ipsum is not
        simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard
        McClintock, a Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words, consectetur, from a Lorem
        Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from
        sections 1.10.32 and 1.10.33 of "de Finibus Bonoru
      </div> */}

    </div>
  );
}

export default App;
