import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Carousel } from 'components/ui/Applecardscarousel';
import FadeIn from 'components/FadeIn';
import { SignupFormDemo } from './form';
import Footer from 'components/Footer';

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Sparkles } from 'components/Sparkles';
const DummyContent = () => <></>
const items = [
  {name:'Facebook',src:'companies/1.png'},
  {name:'bloomberg',src:'companies/2.png'},
  {name:'Twitter',src:'companies/3.png'},
  {name:'Company A',src:'companies/4.png'},
  {name:'Company C',src:'companies/5.png'},
  {name:'Company D',src:'companies/6.png'}
]
const data = [
  {
    category: "Artificial Intelligence 1",
    title: "With Royal International, everything regarding server relocation is done for us, and there’s less downtime and better performance.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    logo:'companies/1.png'
  },
  {
    category: "Productivity 2",
    title: "With Royal International, everything regarding server relocation is done for us, and there’s less downtime and better performance.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    logo:'companies/2.png'
  },
  {
    category: "Product 3",
    title: "With Royal International, everything regarding server relocation is done for us, and there’s less downtime and better performance.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    logo:'companies/3.png'

  },{
    category: "Product 4",
    title: "With Royal International, everything regarding server relocation is done for us, and there’s less downtime and better performance.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    logo:'companies/4.png'

  },{
    category: "Product 5",
    title: "With Royal International, everything regarding server relocation is done for us, and there’s less downtime and better performance.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
    logo:'companies/5.png'

  }]

function CarouselDemo() {
  // const cards = data.map((card, index) => (
  //   <Card key={card.src} card={card} index={index} isMiddle={card?.isMiddle}/>
  // ));
 
  
 

  
  return (
    <div className="py-10 pt-0">

      {/* black shadow on left and right 1/3 width of screen */}
      <div className='w-1/3 h-full absolute bg-black opacity-60 blur-3xl z-20'></div>
      <div className='w-1/3 h-full absolute right-0 bg-black opacity-80 blur-3xl z-20'></div>

      <Carousel items={data} />
    
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
    const [starSize,setStarSize] = useState("1.2")
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
      <section className="relative w-full  3xl:h-[180vh] 2xl:h-[230vh] bg-black" ref={ref}>
        <div className="w-full overflow-hidden z-0 absolute top-0 h-[50vh]  rounded-b-full">
          {/* <WaveParticles starSize={starSize} AMOUNTX={100} AMOUNTY={100} /> */}
          <Sparkles />
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
            <div className='w-screen sm:max-w-7xl'>
            <CarouselDemo/>
            </div>
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
  
