import AnimatedText2 from 'components/AnimatedText2'
import ProgressBar from 'components/ProgressBar';
import { TracingBeam2 } from 'components/ui/TracingBeam2'
import { useScroll } from 'framer-motion';
import ReactLenis from 'lenis/dist/lenis-react';
import React, { useState, useEffect } from 'react';
import dataCentreImg1 from '../assets/images/dataCentre/img1.png';
import dataCentreImg2 from '../assets/images/dataCentre/img2.png';
import dataCentreImg3 from '../assets/images/dataCentre/img3.jpg';
import dataCentreImg4 from '../assets/images/dataCentre/img4.png';
import dataCentreImg5 from '../assets/images/dataCentre/img5.jpg';
import structuredCableImg1 from '../assets/images/structuredCableNetwork/img1.png';
import structuredCableImg2 from '../assets/images/structuredCableNetwork/img2.jpg';
import structuredCableImg3 from '../assets/images/structuredCableNetwork/img3.png';
import structuredCableImg4 from '../assets/images/structuredCableNetwork/img4.jpg';
import structuredCableImg5 from '../assets/images/structuredCableNetwork/img5.png';
import cleanRoomImg1 from '../assets/images/cleanRoom/img1.png';
import cleanRoomImg2 from '../assets/images/cleanRoom/img2.png';
import cleanRoomImg3 from '../assets/images/cleanRoom/img3.png';
import cleanRoomImg4 from '../assets/images/cleanRoom/img4.png';
import cleanRoomImg5 from '../assets/images/cleanRoom/img5.png';
import logisticsImg1 from '../assets/images/logistics/img1.png';
import logisticsImg2 from '../assets/images/logistics/img2.png';
import logisticsImg3 from '../assets/images/logistics/img3.png';
import logisticsImg4 from '../assets/images/logistics/img4.png';
import logisticsImg5 from '../assets/images/logistics/img5.png';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

export default function About() {
    const { scrollYProgress } = useScroll();

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
      return scrollYProgress.onChange((latest) => {
        setIsVisible1(latest > 0.25 && latest < 0.45);
        setIsVisible2(latest > 0.45 && latest < 0.85);
        setIsVisible3(latest > 0.50 && latest < 0.85);
        setIsVisible4(latest > 0.55 && latest < 0.85);
      });
    }, [scrollYProgress]);
    const services = [
        {
          title: 'Data  Center  Migration',
          description:"We offer comprehensive data center migration services at Royal International, ensuring a seamless transition from legacy systems to modern, scalable infrastructures. Our expert team handles every aspect of the migration process, minimizing downtime and ensuring data integrity. Whether you're moving to a cloud environment or upgrading your on-premise infrastructure, we tailor our solutions to fit your unique business needs, ensuring a smooth and efficient migration.",
          visible: isVisible1,
          images: [dataCentreImg1, dataCentreImg2, dataCentreImg3, dataCentreImg4, dataCentreImg5],
          video: video1,
        },
        {
          title: 'Clean  Room  &  Labs',
          description:
            'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
          visible: isVisible2,
          images: [cleanRoomImg1, cleanRoomImg2, cleanRoomImg3, cleanRoomImg4, cleanRoomImg5],
          video: video2,
        },
        {
          title: 'Special  Logistics',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
          visble: isVisible3,
          images: [logisticsImg1, logisticsImg2, logisticsImg3, logisticsImg4, logisticsImg5],
          video: video3
        },
        {
          title: 'Structured  Cable  Networking',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
          visible: isVisible4,
          images: [structuredCableImg1, structuredCableImg2, structuredCableImg3, structuredCableImg4, structuredCableImg5],
          video: video4
        },
      ];
      const images = ['assets/img1.jpg','assets/img2.jpg','assets/img3.jpg','assets/img4.png','assets/img1.jpg','assets/img2.jpg',];
  return (
  <div>
    <ReactLenis root options={{ lerp: 0.5 }}>
     {/* <div className="bg-gradient-to-b from-black via-red-950 to-slate-800 "> */}
     <div className='bg-black/[0.9]'>
      {services.map((service, index) => (
        <TracingBeam2  word={service.title} isVisible={isVisible3}>
          <AnimatedText2 word={service.title}  description={service.description} index={index}
            caption="Specialized equipment handling."
            images={service.images}
            isImgLeft={index % 2 === 0}
            video={service.video}
            />
            <ProgressBar index={index} length={services.length}/>
        </TracingBeam2>
      ))}
     </div>
    </ReactLenis>
  </div>
  )
}
