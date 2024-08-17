import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ReactLenis from "lenis/dist/lenis-react";
import GridBackground from "./components/GridBackground";
import { TracingBeam } from "components/ui/TracingBeam";
import Services from "components/Services";
import { TracingBeam2 } from "components/ui/TracingBeam2";
import AnimatedText2 from "components/AnimatedText2";

function App() {
  const { scrollYProgress } = useScroll();

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible1(latest > 0.25 && latest < 0.45);
      setIsVisible2(latest > 0.45 && latest < 0.85);
      setIsVisible3(latest > 0.50);
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
    
      {/* <ReactLenis root options={{ lerp: 0.5 }}>
     
      <div className="bg-gradient-to-b from-black via-red-950 to-slate-800 ">
      <TracingBeam2  word={"migration"} isVisible={isVisible1}>
          <AnimatedText2 word="Migration " caption="Streamlined data transition" />
        </TracingBeam2>
        <TracingBeam2  word={"precision"} isVisible={isVisible2}>
          <AnimatedText2 word="Precision "  caption="Clean room expertise."/>
        </TracingBeam2>
        <TracingBeam2  word={"logistics"} isVisible={isVisible3}>
          <AnimatedText2 word="Logistics "  caption="Specialized equipment handling."/>
        </TracingBeam2>
      </div>
      </ReactLenis> */}
      <Services />
    </div>
  );
}

export default App;
