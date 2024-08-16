import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TracingBeam } from './ui/TracingBeam';
import { CardBody, CardContainer, CardItem } from './ui/3dCard';

const CardImage = ({ src}:any) => {
  return (
    <motion.img
    whileHover={{
      scale:1.1
    }}
    transition={{duration:0.5}}
    src={src} className='w-full h-full object-cover' alt="A new img" />
  );
}

const AnimatedText2 = ({word,caption}:any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref ,  offset: ["center end", "end end"]});

  
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
  const translateXImg = useTransform(scrollYProgress, [0, 1], ["60%","60%"]); // Translate Y from 0px to 100px
  const translateYImg = useTransform(scrollYProgress, [0,0.2,0.9, 1], [100,-36,-50,-100]);
  const scaleImg = useTransform(scrollYProgress, [0,0.2,0.9, 1], [1,1,1.1,1]);

  const translateYImgSecond = useTransform(scrollYProgress, [0, 0.9,0.95,1], [-100, -50,-50, 75]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.02,0.5,0.75,0.95,1], [0, 1,1,1,1,0]);
  const translateParagraph = useTransform(scrollYProgress, [0, 0.3,0.9,1], ["50%","0%","0%","0%"]);
  const [transform, setTransform] = React.useState('');
  const [imgTransform, setImgTransform] = React.useState('');
  const [secondImgTransform, setSecondImgTransform] = React.useState('');
  const [visible, setIsVisible] = React.useState(false);
  const blurP = useTransform(scrollYProgress, [0, 1], [10, 0]); // Blur from 10px to 0px
  const opacityP = useTransform(scrollYProgress, [0, 0.5,0.75,0.98,1], [0,0, 1,1,0]); // Opacity from 0.5 to 1
  const textMarginRight = useTransform(scrollYProgress, [0,1], ["-10px","0px"]); // Opacity from 0.5 to 1
  
  const getTransform = () => {
    return `translate3d(-50%, -50%, 20px) skew(${skewX.get()}deg, ${skewY.get()}deg)`;
  };
  const getImageTransform = () => {
    return `translate3d(0px, ${translateYImg.get()}%, 0px) `;
  };
  const getSecondImageTransform = () => {
    return `translate3d(77%, ${translateYImgSecond.get()}%, 0px) `;
  };
  
  useEffect(() => {
    return scrollYProgress.onChange(() => {
      setTransform(getTransform());
      setImgTransform(getImageTransform());
      setSecondImgTransform(getSecondImageTransform());
      setIsVisible(scrollYProgress.get() > 0 && scrollYProgress.get() < 1);
    });
  }, [scrollYProgress]);

 
  return (
    <motion.section
    // initial={{opacity:0}}
    // whileInView={{opacity:1}}
    ref={ref} className='h-[300vh]  w-full  text-white '>

      <div className='sm:grid sm:grid-cols-2 h-[200vh]'>
        <motion.div 
        className='fixed top-1/2 translate-y-[-50%] left-1/2 mr-64'
        // initial={{y:"50%"}}
        style={{ transform:imgTransform,opacity:opacityImg  }}
        id='stagerredgrid'>
          {/* <motion.img src="/hero1.jpg"
          className='rounded-lg h-64 w-48 sm:h-96 sm:w-64 object-cover fixed top-1/2 grayscale'
          style={{ transform: imgTransform,opacity:opacityImg  }}
          alt="A London skyscraper" /> */}
          <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          className='grid sm:grid-cols-2 gap-4 '>
            <div className='flex flex-col items-end justify-end gap-4 '>
              <div className='overflow-hidden   w-96 h-64 rounded-3xl'>
                <motion.img
                style={{
                  scale: scaleImg,
                }}
                src="/hero1.jpg" className='w-full h-full object-cover transition duration-500' alt="A London skyscraper" />
              </div>
              <div className='overflow-hidden  w-64 h-64  rounded-3xl'>
                <CardImage src="/img1.jpg" />
              </div>
              <div className='overflow-hidden  w-72 h-96  rounded-3xl'>
              <CardImage src="/img2.jpg" />

              </div>
            </div>
            <div className='flex flex-col items-start justify-end gap-4'>
              <div className='overflow-hidden  w-64 h-72  rounded-3xl'>
               <CardImage src="/img3.jpg" />
              </div>
              <div className='overflow-hidden  w-72 h-64 rounded-3xl'>
              <CardImage src="/img4.jpg" />

              </div>
              <div className='overflow-hidden  w-96 h-72 rounded-3xl'>
              <CardImage src="/img5.jpg" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      
      <div  className={`flex flex-col  items-center justify-center`}>
      <motion.div className="text-5xl font-bold flex space-x-2 fixed top-1/3 left-0 transform  -translate-y-1/2 ml-20">
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
      <motion.div className="text-2xl font-semibold flex space-x-2 text-gray-300 fixed top-1/3 left-0 ml-20 mt-20 max-w-md"
      style={{
        opacity,
        animationDelay: '1s',
        translateY:translateParagraph
      }}
      transition={{ delay: 0.5, duration: 2 }}

      >
       Known for its commitment to excellence, Royal Intl consistently delivers top-tier services and products that cater to the needs of a sophisticated clientele. 
      </motion.div>
      
     {/* <div className=''>
     <motion.span
      className='  bg-red-500 fixed px-2 top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20 mr-12'
        style={{
          opacity: opacityP,
          transform: transform,
        }}
        >
          {caption}
        </motion.span>
     </div> */}
     {/* <div className='fixed top-1/2 left-1/2 pt-20 '>
     <motion.img 
     src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
     className='w-12 h-12 animate-ping  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24'
     style={{
      opacity: opacityP,
      // transform: transform,
      // transform:transform,
    }}/>
     </div> */}
    
    </div>
   
    </div>

    
    </motion.section>
   
  );
};

export default AnimatedText2;
