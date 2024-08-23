import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StaggeredGrid from './StaggeredGrid';
import Highlight from './Highlight';

interface ServiceProps {
  title: string;
  description: string;
  video: string;
  images: string[];
  index: number;
}

const ServiceCopy: React.FC<ServiceProps> = ({ title, description, video, images, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [randomTitle, setRandomTitle] = React.useState(title)
  const [wordLength, setWordLength] = React.useState(title.split(' ').length)
  const generateRandomWord = (len: number) => {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return Array.from({length: len}, () => alphabets[Math.floor(Math.random() * alphabets.length)]).join('')
  }
  const [alreadyAnimated, setAlreadyAnimated] = React.useState(false)
  useEffect(() => {
   if(!alreadyAnimated) {
    scrollYProgress.onChange(() => {
        const progress = scrollYProgress.get()
        if(progress>0.1 && progress<0.25 ){ {
          setAlreadyAnimated(true)
          for (let i = 0; i < title.length+1; i++) {
              setTimeout(() => {
                let newTitle = title.substring(0, i) + generateRandomWord(title.length-i-1) 
              setRandomTitle(newTitle)
              }, i * 100)
              
            }
          }
      }
      })
      // unsubscribe
      return () => {
        scrollYProgress.stop()
      }
   }
  }, [title,scrollYProgress])
  const isOdd = () => index%2 !== 0
  const containerTranslateX = useTransform(scrollYProgress, [0, 0.25], [isOdd() ? '100%' : '-100%', '0%']);
  const containerTranslateY = useTransform(scrollYProgress, [0, 0.25], ['100%', '0%']);
  // const containerBorderRadius =useTransform(scrollYProgress, [0, 0.1,0.4,1], ['50%', '0%','0%','0%']);
  const gridScale = useTransform(scrollYProgress, [0.25, 0.5, 75, 1], [0, 1,1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.25, 0.5, .75, 1], [0, 1, 1, 0]);
  const gridTranslateX = useTransform(scrollYProgress, [0.75, 1], ['0', isOdd() ? '100%' : '-100%']);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5,0.75,0.8,1], [0, 1,1,0.3,0]);
  const textTranslateY = useTransform(scrollYProgress, [0.5, .75], ['0%', '-100%']);
  const textVisiblity = useTransform(scrollYProgress, [0, .75, 0.9,1], ['visible', 'visible', 'hidden', 'hidden']);
  const textScale = useTransform(scrollYProgress, [0.75, 1], [1,0.8]);
  const textTranslateX = useTransform(scrollYProgress, [0.75, 1], ['0%', isOdd() ? '100%' : '-100%']);

  const subItemsTranslateY = useTransform(scrollYProgress, [0.25, .5], [ '30%','0%']);
  const subItemsOpacity = useTransform(scrollYProgress, [0.25, .5,.75,1], [ 0.0,1,1,0.4]);
  const subItems = [{
    href:"#",
    name: 'Strategic Planning & Assessment',
    description:'We begin with a thorough analysis of your current infrastructure, assessing risks, challenges, and opportunities. ',
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
</svg>

  },{
    href:"#",
    name:'Seamless Implementation & Support',
    description:'Our expert technicians handle the migration with precision, ensuring minimal downtime and maximum data integrity. ',
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
  </svg>
  
  }]
  return (
    <motion.div
      ref={ref}
      className='h-[400vh] relative'
    >
      {index === 0 &&
        <div
          className="mt-[50vh] mx-32 text-5xl font-extralight text-center mb-10 leading-[1.5]"        
        >
          Royal International is <Highlight>expanding into niche services</Highlight>, specializing in data center migration, clean room & lab relocations, and tailored logistics for high-tech industries
        </div>
      }
      <motion.section
        className={`fixed top-0 w-full  h-screen ${isOdd() ? 'bg-white text-black' : 'bg-black text-white'} flex items-center`}
        style={{
          translateX: containerTranslateX,
          translateY: containerTranslateY,
          // borderRadius: containerBorderRadius
        }}
      >
        {/* Section 1 */}
        <div className='w-full sm:max-w-7xl m-auto  h-[90%]  flex justify-between items-start p-10 mt-20 gap-x-16'>
          {/* Text */}
          <motion.div
            className={` ${index % 2 !== 0 ? 'order-last ml-6 items-start' : 'mr-4 items-end '} w-1/2  overflow-hidden`}
            style={{
              visibility: textVisiblity,
              translateY:textTranslateX
            }}
          >
            
            <motion.h1
              className={`text-3xl font-medium mb-4 tracking-tight uppercase`}
              style={{
                opacity: textOpacity,
                scale: textScale,
              }}
            >
                {/* {randomTitle} */}
              {randomTitle.split(' ').slice(0, title.split(' ').length-1).join(' ')}
              {" "}
              {randomTitle.split(' ')?.length > wordLength-1 && <span className='text-red-500'>{randomTitle.split(' ').slice(-1).join(' ')}</span>}
            </motion.h1>
            <div className='h-full relative overflow-hidden'>
              {/* {!isOdd() &&
                <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent via-30% to-black pointer-events-none z-10' />
              } */}
              <motion.p
                className={`text-lg max-w-2xl ${isOdd() ? 'text-gray-700' : 'text-gray-400'} font-normal tracking-tight z-0 mt-6`}
                style={{
                  opacity: textOpacity,
                  scale: textScale,
                }}
              >
                {description.slice(0, 200)}
              </motion.p>
              <motion.div
                style={{
                    opacity:subItemsOpacity,
                    translateY:subItemsTranslateY,

                }}
               className='mt-8 grid grid-cols-2 overflow-hidden max-w-4xl justify-start items-start gap-x-10'>
              {subItems.map((feature,index) => (
                <motion.div
                style={{ 
                }}
                key={feature.name} className="flex flex-col rounded-md overflow-hidden">
                  <dt className={`text-base font-semibold leading-7  ${isOdd() ? 'text-gray-800' : 'text-gray-300'}`}>
                    <div className={`mb-6 flex h-10 w-10 items-center justify-center rounded-lg ${isOdd() ? 'bg-red-500 text-white' : 'bg-red-500'}`}>
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className={`mt-1 flex flex-auto flex-col text-base leading-7  ${isOdd() ? 'text-gray-700' : 'text-gray-400'}`}>
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-red-400">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </motion.div>
              ))}
              </motion.div>
            </div>
          </motion.div>
          {/* grid */}
          <motion.div
            className='w-1/2 h-full flex justify-center items-start'
            style={{
              translateY: gridTranslateX,
            }}
          >
            {/* <motion.div
              className='h-full w-full'
              style={{
                scale: gridScale,
                opacity: gridOpacity,
                translateX: gridTranslateX,
              }}
            >
              <StaggeredGrid video={video} images={images} isBlackBg={isOdd() ? true : false} />
            </motion.div> */}
                            {/* <motion.video
                            // autoPlay
                            style={{
                                scale: gridScale,
                                opacity: gridOpacity,
                                // translateX: gridTranslateX,
                              }}
                            src={video}  className='rounded-lg w-[80%] h-[80%] object-cover' /> */}

<div>
<div className='overflow-hidden my-5  w-[100%] aspect-3/2  rounded-xl'>
                   <motion.img
                            // autoPlay
                            // whileHover={{ scale: 1.1 }}
                            // transition={{ duration: 0.5 }}
                            style={{
                                scale: gridScale,
                                opacity: gridOpacity,
                                // translateX: gridTranslateX,
                              }}
                            src={images[0]}  className='w-full h-full object-cover' />

                   </div>
                   <div className='grid grid-cols-3 gap-x-3'>
                    {images.slice(1).map((image,index) => (
                      <div key={index} className='w-full h-full overflow-hidden rounded-md'>
                      <motion.img
                            // autoPlay
                            // whileHover={{ scale: 1.1 }}
                            // transition={{ duration: 0.5 }}
                            style={{
                                scale: gridScale,
                                opacity: gridOpacity,
                                // translateX: gridTranslateX,
                              }}
                            src={image}  className='w-full h-full object-cover' />
                      </div>
                    ))}
                   </div>
</div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ServiceCopy;