import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ReactLenis from "lenis/dist/lenis-react";
import GridBackground from "./components/GridBackground";
import { TracingBeam } from "components/ui/TracingBeam";
import Services from "components/Services";


function App() {
  const { scrollYProgress } = useScroll();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible1(latest > 0.20 && latest < 0.55);
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
        <TracingBeam  word={"migration"} isVisible={isVisible1}>
        <AnimatedText word="Migration " caption="Streamlined data transition" />
        </TracingBeam>
        <TracingBeam  word={"precision"} isVisible={isVisible2}>

        <AnimatedText word="Precision "  caption="Clean room expertise."/>
        </TracingBeam>
        <TracingBeam  word={"logistics"} isVisible={isVisible3}>
        <AnimatedText word="Logistics "  caption="Specialized equipment handling."/>
        </TracingBeam>
      </ReactLenis>
      <Services />
    </div>
  );
}

export default App;
