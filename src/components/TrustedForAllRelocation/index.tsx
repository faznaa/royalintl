import WaveParticles from 'components/WaveParticles'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Card, Carousel } from 'components/ui/Applecardscarousel';
import FadeIn from 'components/FadeIn';
import { SignupFormDemo } from './form';
import Footer from 'components/Footer';

const DummyContent = () => <></>
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    isMiddle:true
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },{
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },{
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  }]
function CarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} isMiddle={card?.isMiddle}/>
  ));
 
  return (
    <div className="py-10 pt-0">
     
      <Carousel items={cards} />
    </div>
  );
}
export default function TrustedForAllRelocation() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target:ref,
      offset: ["start start", "end start"], 
    });
    const size = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
    const sizeH = useTransform(scrollYProgress, [0, 0.2], [1, 0.1]);
    const globeSize = useTransform(scrollYProgress, [0.4,1],[1,0.6])
    const translateUp = useTransform(scrollYProgress, [0.4, 0.6,1], [0, -400,-300]);
    const translateOut = useTransform(scrollYProgress, [0.3, 0.4], [0, -400]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0.2, 0.4], [1,0.7]);
    const opacityOfBtns = useTransform(scrollYProgress, [0.4, 0.5], [0,1]);
    const [starSize,setStarSize] = useState("1.0")
    // useEffect(() => {
    //   return scrollYProgress.onChange(() => {
    //       if(scrollYProgress.get()>0.4) {
    //         setStarSize("0.5")
    //       }else {
    //         setStarSize("1.0")
    //       }
    //       // setStarSize((1-parseFloat(scrollYProgress.get().toFixed(1))).toString())
  
    //   })
    // },[scrollYProgress])
    return (
      <section className="relative w-full  h-[270vh] bg-black" ref={ref}>
        <div className=" overflow-hidden z-0 absolute top-0">
          <WaveParticles starSize={starSize} />
        </div>
        <motion.div
        // style={{ translateY: translateOut, opacity: opacity,scale:textScale }}
        className="w-full h-full flex flex-col justify-start pt-36 items-center">
           <FadeIn> <motion.h1
                  //  style={{ translateY: translateOut, opacity: opacity,scale:textScale }}

              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0, scale: 0.8 }}
              // style={{ scale: size }}
              className="text-4xl  font-semibold relative z-20 text-gray-300 text-center mb-10 tracking-tighter"
            >
              Trusted for all relocations
            </motion.h1>
            <CarouselDemo/>
        </FadeIn>


        <div className='pt-28 flex justify-between items-center w-full sm:max-w-7xl mx-auto z-20'>
          <div className='text-white  w-full'>
            <h1               className="text-4xl  font-semibold relative z-20 text-gray-300 text-center mb-10 tracking-tighter"
            >Get in touch</h1>
            <p className='text-gray-500 text-lg text-center'>Lorem ipsum dolor sit amet </p>
          </div>
          <div className='w-full'>
            <SignupFormDemo/>
          </div>
        </div>
        <Footer/>
          
         
        </motion.div>


       
        
      </section>
    );
  };
  
