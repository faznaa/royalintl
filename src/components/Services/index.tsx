import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.png';
import dataCentreImg1 from '../../assets/images/dataCentre/img1.png';
import dataCentreImg2 from '../../assets/images/dataCentre/img2.png';
import dataCentreImg3 from '../../assets/images/dataCentre/img3.jpg';
import dataCentreImg4 from '../../assets/images/dataCentre/img4.png';
import dataCentreImg5 from '../../assets/images/dataCentre/img5.jpg';
import structuredCableImg1 from '../../assets/images/structuredCableNetwork/img1.png';
import structuredCableImg2 from '../../assets/images/structuredCableNetwork/img2.jpg';
import structuredCableImg3 from '../../assets/images/structuredCableNetwork/img3.png';
import structuredCableImg4 from '../../assets/images/structuredCableNetwork/img4.jpg';
import structuredCableImg5 from '../../assets/images/structuredCableNetwork/img5.png';
import cleanRoomImg1 from '../../assets/images/cleanRoom/img1.png';
import cleanRoomImg2 from '../../assets/images/cleanRoom/img2.png';
import cleanRoomImg3 from '../../assets/images/cleanRoom/img3.png';
import cleanRoomImg4 from '../../assets/images/cleanRoom/img4.png';
import cleanRoomImg5 from '../../assets/images/cleanRoom/img5.png';
import logisticsImg1 from '../../assets/images/logistics/img1.png';
import logisticsImg2 from '../../assets/images/logistics/img2.png';
import logisticsImg3 from '../../assets/images/logistics/img3.png';
import logisticsImg4 from '../../assets/images/logistics/img4.png';
import logisticsImg5 from '../../assets/images/logistics/img5.png';
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import Service from 'components/Service';
import ServiceCard from 'components/ServiceCard';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from 'components/FadeIn';
import TrustedByLeaders from 'components/TrustedByLeaders';

// Define the structure of a service object
interface ServiceType {
  title: string; // The title of the service
  subtitle: string; // The subtitle of the service
  description: string; // A detailed description of the service
  images: string[]; // An array of image URLs for the service
  video: string; // The URL of a video associated with the service
  bg:string; // The background color for the service card
  fg:string; // The foreground (text) color for the service card
  gradientBg: string; // The gradient background for the service card
}

// Define the array of images
const images: any[] = [img1, img2, img3, img4];

// Define the array of services
const services: ServiceType[] = [
  {
    title: 'Data Center Migration',
    subtitle: 'The Power of Secure Element Technology',
    description:"We offer comprehensive data center migration services at Royal International, ensuring a seamless transition from legacy systems to modern, scalable infrastructures. Our expert team handles every aspect of the migration process, minimizing downtime and ensuring data integrity. Whether you're moving to a cloud environment or upgrading your on-premise infrastructure, we tailor our solutions to fit your unique business needs, ensuring a smooth and efficient migration.",
    images: [dataCentreImg1, dataCentreImg2, dataCentreImg3, dataCentreImg4, dataCentreImg5],
    video: video1,
    bg:'#000000',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-black to-gray-800",
  },
  
  {
    title: 'Project logistics',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: [logisticsImg1, logisticsImg2, logisticsImg3, logisticsImg4, logisticsImg5],
    video: video3,
     bg:'#8F96D4',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-blue-600 to-sky-400",
  },
  {
    title: 'Clean Room/ LAB Migration',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
    images: [cleanRoomImg1, cleanRoomImg2, cleanRoomImg3, cleanRoomImg4, cleanRoomImg5],
    video: video2,
     bg:'#C493C8',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-pink-200 to-pink-400",
  },
  {
    title: 'Relocation Services',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: [structuredCableImg1, structuredCableImg2, structuredCableImg3, structuredCableImg4, structuredCableImg5],
    video: video4,
     bg:'#EC6A5E',
    fg:'#000',
    gradientBg:"bg-gradient-to-br from-cyan-500 to-blue-300",
  },
];

/**
 * Services component that displays a section of services offered by a company.
 * The component uses Framer Motion for scroll-based animations and interactive features.
 * 
 * It showcases various services offered by the company, using a combination of
 * animated cards, sticky navigation, and scroll-based interactions to create
 * an engaging and informative user experience.
 * 
 * refer https://blog.olivierlarose.com/tutorials/cards-parallax
 * 
 * The component uses the following key features:
 *  - Framer Motion's useScroll and useTransform for scroll-based animations.
 *  - React's useState and useEffect for managing component state and side effects.
 *  - Custom click handler (scrollToId) for smooth scrolling to specific service cards.
 * 
 * @example
 * // Example usage of the Services component
 * import Services from "components/Services";
 * 
 * function App() {
 *   return <Services />;
 * }
 * 
 * @returns {JSX.Element} A section container with the following structure:
 *  - FadeIn components wrap the title and description, providing a transition effect where the content moves from bottom to top with opacity changing from 0 to 1.
 *  - A sticky navigation bar at the top, highlighting the current service based on scroll position.
 *  - A series of ServiceCard components, each representing a different service offered by the company.
 *  - Each ServiceCard scales and transforms based on the scroll progress, creating a parallax-like effect.
 *  - A TrustedByLeaders component at the bottom of the section.
 * 
 * @param props No props are expected for this component.
 */

const Services: React.FC = () => {
  const [selectedId,setSelectedId] = useState('service-1'); // Based on scrollYProgress we will change the active tab to indicate the current service
  const container = useRef(null);
  const [scrollPro , setScrollPro]=  useState(0)
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const cardsVisible = useTransform(scrollYProgress, [0,0.99,1], [true, true, false]);
  const opacity = useTransform(scrollYProgress, [0,0.95,1], [1,1,0]);
  // const scaleX = useTransform(scrollYProgress, [0,0.5,1], [1,1,0.7]);
  // const cardsTranslateY = useTransform(scrollYProgress, [0,0.95,1], [1, 1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPro(scrollYProgress.get())

      // if id service-1 is visible set selectedId to service-1 and for every service
      // if id service-2 is visible set selectedId to service-2 and for every service
      if (scrollYProgress.get() > 0 && scrollYProgress.get() <= 0.47) {
        setSelectedId('service-1');
      }
      if (scrollYProgress.get() > 0.47 && scrollYProgress.get() <= 0.65) {
        setSelectedId('service-2');
      }
      if (scrollYProgress.get() > 0.65 && scrollYProgress.get() <= 0.85) {
        setSelectedId('service-3');
      }
      if (scrollYProgress.get() > 0.85 && scrollYProgress.get() < 1) {
        setSelectedId('service-4'); 
      }

    });
  
    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [cardsVisible]);

  const scrollToId = (id: string) => {
    setSelectedId(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // scroll to the particular card based on user interaction with tab
    }
  };
  return (
    <section
      className="relative bg-primaryBg py-40 h-auto"
      ref={container}
    >
       <FadeIn><h1 className='text-6xl text-center'>Our Specializations</h1></FadeIn>
       <FadeIn> <p className='text-2xl w-1/2 text-gray-400 mx-auto py-6 pb-16 text-center'>
          Moving beyond relocation - innovating the future of high tech logistics
        </p></FadeIn>
        {/*
          The below div contains navigation tab for service card, the div will stick to the top.
          Buttons dynamically scroll to the respective service cards, creating a smooth and interactive navigation experience.
        */}
          <motion.div
            className='sticky top-[10%] flex w-full items-center justify-center gap-x-6 uppercase text-sm tracking-tight z-10'
            style={{
            //   zIndex: zTab,
              opacity: opacity
            }}
          >
            {services.map((service, index) => (
              <button
                onClick={() => scrollToId(`service-${index+1}`)}  
                className={`uppercase font-semibold text-[16px] px-4 py-2 rounded-2xl text-black hover:bg-gray-100
                ${selectedId === `service-${index+1}` ? 'text-red-500  bg-gray-200' : ''}`}
              >
                {service.title}
              </button>
            ))}
          </motion.div>
          <motion.div className='h-[500vh] relative'
          style={{
            opacity: opacity,
          }}
          >
            { services.map((service, index) => {
              const targetScale = 1 - ( (services.length - index) * 0.05); // 1 - (5-0) * 0.05 => 1 - 5 * 0.05 => 1 - 0.25 => 0.75 for index 0
              // refer https://blog.olivierlarose.com/tutorials/cards-parallax
              return <ServiceCard
                      key={index}
                      index={index}
                      bg={service.bg}
                      textColor={service.fg}
                      title={service.title}
                      subtitle={service.subtitle}
                      description={service.description}
                      src={service.images[0]}
                      progress={scrollYProgress}
                      range={[index * .25, 1]} // when to start scaling down the card, after the card sticked to top then we have to scale it down
                      targetScale={targetScale} // how much to scale down the card, for low index value the scaling will be more
                      gradientBg={service.gradientBg}
                    />
            }
            )}
            <div id='service-4' className='h-[100vh]'></div>
            
          </motion.div>

          {/* <div className='sticky z-50 bottom-10 left-10 bg-red-600 w-64 text-white'>{scrollPro}</div> */}
          <div className=' relative z-30 top-36'>
                      {/* <div className='h-[50vh] bg-transparent relative z-30'/> */}

          <TrustedByLeaders/>
          </div>
    </section>
  );
};

export default Services;