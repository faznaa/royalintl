import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ReactLenis from "lenis/dist/lenis-react";
import GridBackground from "./components/GridBackground";


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
  
    <GridBackground />
    
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
