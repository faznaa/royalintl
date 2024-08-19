import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";
import AnimatedText from "./components/AnimatedText";
import ReactLenis from "lenis/dist/lenis-react";
import GridBackground from "./components/GridBackground";
import { TracingBeam } from "components/ui/TracingBeam";
import Services from "components/Services";
import About from "./pages/About";

import { TracingBeam2 } from "components/ui/TracingBeam2";
import AnimatedText2 from "components/AnimatedText2";

function App() {
 
  return (
    <Router>
    <div className="">
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Plaster&display=swap" rel="stylesheet" />
    </Helmet>
      <Navbar />
  
    <GridBackground />
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
