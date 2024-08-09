// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { useRef } from "react";
import ReactLenis from 'lenis/dist/lenis-react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import ParallaxText from "../ParallaxText";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress,scrollY } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const ySub = useParallax(scrollYProgress, 500);

  const fadeOutText = useTransform(scrollY, [0, 500], [1,0]);
  // Make text scroll down as we scroll uup
  const yText = useTransform(scrollY, [0, 500], [300,700]);
  const imgZoom = useTransform(scrollY, [0,1000], [1.3,1.9]);
  const letterSpacing = useTransform(scrollY, [0, 500], [-3,3]);
  const fadeOut = useTransform(scrollY, [0, 1000], [1,0.2]);
  const rotate = useTransform(scrollY, [0, 1000], [0,10]);

  return (
    <section className="relative">
     
     <div ref={ref} className="w-full h-screen relative">
        <motion.img src={`/hero2.jpg`} alt="A London skyscraper" 
        className="img object-cover object-top blur-[1px]"
        style={{
           scaleX: imgZoom,
           scaleY: imgZoom,
           opacity: fadeOut,
           rotate: rotate
          
        }}
        />
      </div>
        <motion.h2 style={{ y:yText,
        // opacity: fadeOutText,
        letterSpacing:-3,

       }} className="absolute uppercase  -top-24 text-7xl text-primary text-center leading-tight ">
        RoyalIntl
      </motion.h2>
      <motion.h2 style={{ y:yText,
        // opacity: fadeOutText,
        // letterSpacing

       }} className="absolute -top-6 text-4xl text-center text-gray-700">
        Redefining the way of life
      </motion.h2>
     
    </section>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <ReactLenis root
     options={{
      lerp: 0.5
     }}
     >
              <Image id={1} />

     </ReactLenis>
        
    </div>
  );
}
