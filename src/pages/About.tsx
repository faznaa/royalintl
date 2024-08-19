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
          visible: isVisible1
          
        },
        {
          title: 'Clean  Room  &  Labs',
          description:
            'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
          visible: isVisible2
          
        },
        {
          title: 'Special  Logistics',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
          visble: isVisible3
        },
        {
          title: 'Structured  Cable',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
          visible: isVisible4
        },
      ];
      const images = ['assets/img1.jpg','assets/img2.jpg','assets/img3.jpg','assets/img4.png','assets/img1.jpg','assets/img2.jpg',];
  return (
  <div>
    <div className='text-white bg-black/[0.9] h-screen flex justify-center items-center text-center text-4xl sm:text-6xl'>
      <p className='font-bold'>About Us</p>
    </div>
      <ReactLenis root options={{ lerp: 0.5 }}>
     
     {/* <div className="bg-gradient-to-b from-black via-red-950 to-slate-800 "> */}
     <div className='bg-black/[0.9]'>
    {services.map((service, index) => (
       <TracingBeam2  word={service.title} isVisible={isVisible3}>
         <AnimatedText2 word={service.title}  description={service.description}
          caption="Specialized equipment handling."
          images={images}
          isImgLeft={index % 2 === 0}
          />
       </TracingBeam2>))}
     </div>
     </ReactLenis>
  </div>
  )
}
