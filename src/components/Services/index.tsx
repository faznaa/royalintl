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

// Define the structure of a service object
interface ServiceType {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  video: string;
  bg:string;
  fg:string;
  gradientBg: string;
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
    title: 'Clean Room and Labs',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
    images: [cleanRoomImg1, cleanRoomImg2, cleanRoomImg3, cleanRoomImg4, cleanRoomImg5],
    video: video2,
     bg:'#ce4257',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-pink-200 to-pink-400",
  },
  {
    title: 'Special logistics',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: [logisticsImg1, logisticsImg2, logisticsImg3, logisticsImg4, logisticsImg5],
    video: video3,
     bg:'#f27059',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-blue-600 to-sky-400",
  },
  {
    title: 'Structured Cable Networking',
    subtitle: 'The Power of Secure Element Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: [structuredCableImg1, structuredCableImg2, structuredCableImg3, structuredCableImg4, structuredCableImg5],
    video: video4,
     bg:'#db7c26',
    fg:'#ffffff',
    gradientBg:"bg-gradient-to-br from-cyan-500 to-blue-300",
  },
];


// Services component
const Services: React.FC = () => {
  const [selectedId,setSelectedId] = useState('service-0');
  const [isVisible, setIsVisible] = useState(false);
  const container = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const zTab = useTransform(scrollYProgress, [0, .9, 1], [20, 20, 0]);
  const tabHidden = useTransform(scrollYProgress, [0,0.99,1], [1,1,0]);
  const cardsVisible = useTransform(scrollYProgress, [0,0.99,1], [true, true, false]);
  // const cardsTranslateY = useTransform(scrollYProgress, [0,0.8,1], [1, 1, 0]);

  useEffect(() => {
    const unsubscribe = cardsVisible.onChange((latest) => {
      // if (!latest) {
        setIsVisible(latest);
      // }
    });
  
    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [cardsVisible]);

  const scrollToId = (id: string) => {
    setSelectedId(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      className="relative h-auto bg-white pt-40 "
      ref={container}
    >
       <FadeIn><h1 className='text-6xl text-center'>Our Specializations</h1></FadeIn>
       <FadeIn> <p className='text-2xl w-1/2 text-gray-400 mx-auto py-6 pb-10 text-center'>
          Moving beyond relocation - innovating the future of high tech logistics
        </p></FadeIn>
          <motion.div
            className='sticky top-[12%] flex w-full items-center justify-center gap-x-6 uppercase text-sm tracking-tight z-10'
            // style={{
            //   zIndex: zTab,
            //   opacity: tabHidden
            // }}  
          >
            {services.map((service, index) => (
              <button
                onClick={() => scrollToId(`service-${index}`)}  
                className={`uppercase font-bold text-[16px] px-4 py-2  rounded-2xl text-black hover:bg-gray-100
                ${selectedId === `service-${index}` ? 'text-red-500  bg-gray-200' : ''}`}
              >
                {service.title}
              </button>
            ))}
          </motion.div>
          <motion.div className='h-[500vh] relative'
          style={{
            // opacity: cardsTranslateY,
            // translateY: cardsTranslateY,
          }}
          >
            {isVisible &&  services.map((service, index) => {
              const targetScale = 1 - ( (services.length - index) * 0.05);
              return <ServiceCard
                      key={index}
                      index={index}
                      bg={service.bg}
                      textColor='#ffffff'
                      title={service.title}
                      subtitle={service.subtitle}
                      description={service.description}
                      src={service.images[0]}
                      progress={scrollYProgress}
                      range={[index * .25, 1]}
                      targetScale={targetScale}
                      gradientBg={service.gradientBg}
                    />
            }
            )}
          </motion.div>
    </section>
  );
};

export default Services;