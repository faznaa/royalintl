import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedText = ({word,caption, isVisible}:any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  
  // Define transformation for opacity and blur based on scroll progress
  const opacity = useTransform(scrollYProgress, [0,0.01, 0.25,0.5,0.75,0.95,1], [0,0.8, 1,1,1,0.5,0]);
  const blur = useTransform(scrollYProgress, [0, 1], [0.5,0.1]);
  // const skewDeg = useTransform(scrollYProgress, [0, 0.25,0.5,0.75,1], [0, 10,]);
  const translate3d = useTransform(scrollYProgress, [0, 1], [0, 100]);


  const getBlurValue = (i:any) => {
    return `blur(${blur.get()*i}px)`;
  };
  // const skewX = useTransform(scrollYProgress, [0, 0.25,0.5,0.75,1], [0, 10,0,10,0]); // Skew from 0deg to 10deg
  // const skewY = useTransform(scrollYProgress, [0, 0.25,0.5,0.75,1], [0, 5,0,5,0]);  // Skew from 0deg to 5deg
  // const translateY = useTransform(scrollYProgress, [0, 0.25,0.5,0.75,1], [0, 100,0,100,0]); // Translate Y from 0px to 100px
  const skewX = useTransform(scrollYProgress, [0, 1], [5,0]); // Skew from 0deg to 10deg
  const skewY = useTransform(scrollYProgress, [0, 1], [10, 0]);  // Skew from 0deg to 5deg
  const translateXImg = useTransform(scrollYProgress, [0, 1], [300,300]); // Translate Y from 0px to 100px
  const translateYImg = useTransform(scrollYProgress, [0, 0.9,0.95,1], [75, -50,-50, -100]);
  const translateYImgSecond = useTransform(scrollYProgress, [0, 0.9,0.95,1], [-100, -50,-50, 75]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.3,0.5,0.75,0.95,1], [0, 1,1,1,1,0]);
  const getTransform = () => {
    return `translate3d(-50%, -50%, 20px) skew(${skewX.get()}deg, ${skewY.get()}deg)`;
  };
  const getImageTransform = () => {
    return `translate3d(${translateXImg.get()}px, ${translateYImg.get()}%, 0px) `;
  };
  const getSecondImageTransform = () => {
    return `translate3d(77%, ${translateYImgSecond.get()}%, 0px) `;
  };
  const [transform, setTransform] = React.useState('');
  const [imgTransform, setImgTransform] = React.useState('');
  const [secondImgTransform, setSecondImgTransform] = React.useState('');
  useEffect(() => {
    return scrollYProgress.onChange(() => {
      setTransform(getTransform());
      setImgTransform(getImageTransform());
      setSecondImgTransform(getSecondImageTransform());
    });
  }, [scrollYProgress]);

  const blurP = useTransform(scrollYProgress, [0, 1], [10, 0]); // Blur from 10px to 0px
  const opacityP = useTransform(scrollYProgress, [0, 0.5,0.75,0.98,1], [0,0, 1,1,0]); // Opacity from 0.5 to 1
  const textMarginRight = useTransform(scrollYProgress, [0,1], ["-10px","0px"]); // Opacity from 0.5 to 1
  
  return (
    <section ref={ref} className='h-[200vh]  w-full ' >
      {/* {word} */}
      <div className='sm:grid sm:grid-cols-3'>
        <motion.img src="/hero1.jpg"
        className='rounded-lg h-96 w-64 object-cover fixed top-1/2 grayscale'
        style={{ transform: imgTransform,opacity:opacityImg  }}
        alt="A London skyscraper" />
      
      <div  className={`flex flex-col items-center justify-center space-y-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div className="text-5xl font-bold flex space-x-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* {getBlurValue(1)} */}
        {word?.split("").map((char:string, index:number) => (
          <motion.span
            key={index}
            style={{ opacity, filter: getBlurValue(index),marginRight:textMarginRight,  }}
          >
            {char}
          </motion.span>
        ))}
       
      </motion.div>
      
     <div className='fixed top-1/2 left-1/2 pt-12 '>
     <motion.span
      className='  bg-red-500 fixed px-2'
        style={{
          opacity: opacityP,
          // transform: transform,
          transform:transform,
        }}
        >
          {caption}
        </motion.span>
     </div>

    
    </div>
    {/* <motion.img src="/hero1.jpg"
        className='rounded-lg h-96 w-64 object-cover fixed top-1/2 left-1/2 grayscale'
        style={{ transform: secondImgTransform,opacity:opacityImg  }}
        alt="A London skyscraper" /> */}
      
    </div>
    
    </section>
  );
};

export default AnimatedText;
