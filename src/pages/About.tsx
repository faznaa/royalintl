import AnimatedText2 from 'components/AnimatedText2'
import { TracingBeam2 } from 'components/ui/TracingBeam2'
import { useScroll } from 'framer-motion';
import ReactLenis from 'lenis/dist/lenis-react'
import React, { useState, useEffect } from 'react'

export default function About() {
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
    <ReactLenis root options={{ lerp: 0.5 }}>
     
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
      </ReactLenis>
  )
}
