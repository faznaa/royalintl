import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.png';
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

  

// Define the array of services
export const services: ServiceType[] = [
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

export const offsets = [0, 0.47, 0.65, 0.85]; // Dynamic offsets for scroll positions

const dummyFn = () => { }

export default dummyFn;