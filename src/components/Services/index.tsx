import React from 'react';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.png';
import video from '../../assets/videos/video1.mp4';
import Service from 'components/Service';

// Define the structure of a service object
interface ServiceType {
  title: string;
  description: string;
  images: string[];
  video: string;
}

// Define the array of images
const images: any[] = [img1, img2, img3, img4];

// Define the array of services
const services: ServiceType[] = [
  {
    title: 'Data Center Migration',
    description:"We offer comprehensive data center migration services at Royal International, ensuring a seamless transition from legacy systems to modern, scalable infrastructures. Our expert team handles every aspect of the migration process, minimizing downtime and ensuring data integrity. Whether you're moving to a cloud environment or upgrading your on-premise infrastructure, we tailor our solutions to fit your unique business needs, ensuring a smooth and efficient migration.",
    images: images,
    video: video,
  },
  {
    title: 'Clean Room and Labs',
    description:
      'We offer state-of-the-art clean room and laboratory solutions at Royal International, designed to meet the highest standards of cleanliness and safety for various industries. Our facilities are equipped with advanced technology and precision-controlled environments, ensuring that critical research, development, and manufacturing processes are conducted with minimal contamination risk. Whether for pharmaceuticals, electronics, or biotechnology, our clean rooms and labs are customized to support your unique operational requirements.',
    images: images,
    video: video,
  },
  {
    title: 'Special logistics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: images,
    video: video,
  },
  {
    title: 'Structured Cable',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ducimus, quia quos quibusdam amet modi, fugit officiis reiciendis hic doloremque natus ratione non! Unde voluptatum error debitis soluta voluptas, facilis optio consectetur suscipit magni sapiente architecto perspiciatis! Minus eos nostrum explicabo cum nam, voluptatibus harum, reprehenderit at quam fugit repellendus!',
    images: images,
    video: video,
  },
];

// Services component
const Services: React.FC = () => {
  return (
    <div className="w-full h-auto">
      {services.map((service, index) => (
        <Service
          key={index}
          index={index}
          title={service.title}
          description={service.description}
          images={service.images}
          video={service.video}
        />
      ))}
    </div>
  );
};

export default Services;