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
 
  return (
    <div className="">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
<link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap" rel="stylesheet"/>
      </head>
      <Navbar />
  
    <GridBackground />
    
      
      <Services />
    </div>
  );
}

export default App;
