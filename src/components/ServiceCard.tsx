import React, { useRef } from "react";
import { motion, useScroll, MotionValue, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import svg from "../assets/svg/service card bg.svg";

interface ServiceCardProps {
  bg: string;
  textColor: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  gradientBg: string;
}

/**
* ServiceCard component that displays a single service offering with animated features.
* The component uses Framer Motion for scroll-based animations and transformations.
* 
* It showcases a service with an image, title, description, and a call-to-action button
* in a visually appealing card format. The card's position, scale, and opacity change
* based on the scroll position, creating an interactive and engaging user experience.
* 
* @example
* // Example usage of the ServiceCard component
* import ServiceCard from "components/ServiceCard";
* 
*function ServicesSection() {
*return (
*        <ServiceCard
*          bg="#ffffff"
*          textColor="#000000"
*          title="Data Center Migration"
*          subtitle="Seamless Transitions"
*          description="We offer comprehensive data center migration services..."
*          src="/path/to/image.jpg"
*          index={0}
*          progress={scrollYProgress}
*           range={[0, 0.5]}
*           targetScale={0.8}
*           gradientBg="bg-gradient-to-br from-blue-500 to-purple-500"
*         />
* );
* }
* 
* @param {ServiceCardProps} props All props dont have default value,
*   - bg: string - Background color of the card.
*   - textColor: string - Text color for the card content.
*   - title: string - Title of the service.
*   - subtitle: string - Subtitle of the service (currently not used in the render).
*   - description: string - Description of the service.
*   - src: string - Source URL for the service image.
*   - index: number - Index of the card, used for positioning and z-index.
*   - progress: MotionValue<number> - MotionValue representing overall scroll progress.
*   - range: [number, number] - Range for scaling animation.
*   - targetScale: number - Target scale value for the card.
*   - gradientBg: string - CSS classes for gradient background.
*
* @returns {JSX.Element} A section container with the following structure:
* An outer motion.div that controls the card's position and translation based on scroll.
* An inner motion.div that represents the card itself, with background color, gradient, and scale animations.
* An image section with a motion.img that scales based on scroll progress. 
*  A text content section wrapped in a FadeIn component for a smooth appearance effect.  
*  The text content includes the service title, description, and a "Know more" button. 
*  The component uses the following key features:
*  Framer Motion's useScroll and useTransform for scroll-based animations.  
*  React's useRef for creating a reference to the container element.  
*  Custom scaling and opacity transformations based on scroll progress.
*/
const ServiceCard: React.FC<ServiceCardProps> = ({
  bg,
  textColor,
  title,
  subtitle,
  description,
  src,
  index,
  progress,
  range,
  targetScale,
  gradientBg,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  

  const containerTranslateY = useTransform(scrollYProgress, [0, 1], [index==0?'110%':'170%', '0%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, [range[0],range[0]+0.01], [1, 1]);
  // const classFixed = useTransform(progress, [0,0.9,1], ['fixed','fixed','relative']);

  return (
    <section
      ref={container}
      className="h-screen relative"
      id={`service-${index}`}
    >
      <motion.div
        className={`w-full h-screen flex justify-center items-center overflow-hidden fixed`}
        style={{
          top: `calc(1% + ${index * 32}px)`,
          zIndex: index,
          translateY: containerTranslateY,
          // opacity: opacity,
        }}
        // id={`service-${index}`}
      >
        <motion.div
  className={`relative w-3/4 h-[75%] grid grid-cols-2 items-center gap-x-12 sm:gap-x-20 p-12 rounded-3xl overflow-hidden ${gradientBg}`}
  style={{
    backgroundColor: bg,
    color: textColor,
    scale,
  }}
>
  {/* Background image with opacity */}
  <div
    className="absolute inset-0 bg-no-repeat bg-cover"
    style={{
      backgroundImage: `url("${svg}")`,
      opacity: 0.5, // Adjust the opacity here
      zIndex: 0, // Ensure the background image stays behind the content
    }}
  />
          {/* <div
          className="w-full h-64 p-4 rounded-xl"
          style={{
            backgroundImage: `url("${svg}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px 100px",
          }}
        >
          <h3 className="text-xl font-bold">Method 1: Direct URL</h3>
          <p>{description.slice(0, 50)}</p>
        </div> */}
          {/* Image */}
          <div className="w-full h-full overflow-hidden rounded-xl">
            <motion.img
              src={src}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
              style={{ scale: imageScale }}
            />
          </div>
          {/* Text content */}
          <FadeIn>
            <div className="space-y-4">
              <h3 className="text-6xl font-normal">{title}</h3>
              {/* <h4 className='text-2xl font-extralight'>{subtitle}</h4> */}
              <p className="font-light py-4">{description.slice(0, 150)}</p>
              <button className="px-4 py-2 rounded-3xl bg-gray-100 text-black">
                Know more &#8594;
              </button>
            </div>
          </FadeIn>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceCard;
// import React, { useRef } from "react";
// import { motion, useScroll, MotionValue, useTransform } from "framer-motion";
// import FadeIn from "./FadeIn";
// import svg from "../assets/svg/service card bg.svg";

// interface ServiceCardProps {
//   bg: string;
//   textColor: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   src: string;
//   index: number;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
//   gradientBg: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   bg,
//   textColor,
//   title,
//   subtitle,
//   description,
//   src,
//   index,
//   progress,
//   range,
//   targetScale,
//   gradientBg,
// }) => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });

//   const containerTranslateY = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <section
//       ref={container}
//       className="h-screen relative"
//       id={`service-${index}`}
//     >
//       <motion.div
//         className="w-full h-screen fixed flex justify-center items-center overflow-hidden"
//         style={{
//           top: `calc(6% + ${index * 30}px)`,
//           zIndex: index,
//           translateY: containerTranslateY,
//         }}
//         // id={`service-${index}`}
//       >
//         <motion.div
//           className={`w-3/4 h-3/4 grid grid-cols-2 items-center gap-x-12 sm:gap-x-20 p-12 rounded-3xl overflow-hidden ${gradientBg}`}
//           style={{
//             backgroundColor: bg,
//             color: textColor,
//             scale,
//             backgroundImage: `url("${svg}")`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//           }}
//         >
//           {/* Image */}
//           <div className="w-full h-full overflow-hidden rounded-xl">
//             <motion.img
//               src={src}
//               alt={title}
//               className="w-full h-full object-cover rounded-xl"
//               style={{ scale: imageScale }}
//             />
//           </div>
//           {/* Text content */}
//           <FadeIn>
//             <div className="space-y-4">
//               <h3 className="text-6xl font-normal">{title}</h3>
//               {/* <h4 className='text-2xl font-extralight'>{subtitle}</h4> */}
//               <p className="text-2xl py-4">{description.slice(0, 150)}</p>
//               <button className="px-4 py-2 rounded-3xl bg-gray-100 text-black">
//                 Know more &#8594;
//               </button>
//             </div>
//           </FadeIn>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ServiceCard;
// import React, { useRef } from "react";
// import { motion, useScroll, MotionValue, useTransform } from "framer-motion";
// import FadeIn from "./FadeIn";
// import svg from "../assets/svg/service card bg.svg";

// interface ServiceCardProps {
//   bg: string;
//   textColor: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   src: string;
//   index: number;
//   progress: MotionValue<number>;
//   range: [number, number];
//   targetScale: number;
//   gradientBg: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({
//   bg,
//   textColor,
//   title,
//   subtitle,
//   description,
//   src,
//   index,
//   progress,
//   range,
//   targetScale,
//   gradientBg,
// }) => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "start start"],
//   });

//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <motion.div
//       ref={container}
//       className="w-full h-screen sticky flex justify-center items-center overflow-hidden"
//       style={{
//         top: `calc(6% + ${index * 30}px)`,
//         zIndex: index,
//       }}
//       id={`service-${index}`}
//     >
//       <motion.div
//         className={`w-3/4 h-3/4 grid grid-cols-2 items-center gap-x-12 sm:gap-x-20 p-12 rounded-3xl overflow-hidden ${gradientBg}`}
//         style={{
//           backgroundColor: bg,
//           color: textColor,
//           scale,
//           backgroundImage: `url("${svg}")`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         {/* <div
//         className="w-full h-64 p-4 rounded-xl"
//         style={{
//           backgroundImage: `url("${svg}")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "100px 100px",
//         }}
//       >
//         <h3 className="text-xl font-bold">Method 1: Direct URL</h3>
//         <p>{description.slice(0, 50)}</p>
//       </div> */}
//         {/* Image */}
//         <div className="w-full h-full overflow-hidden rounded-xl">
//           <motion.img
//             src={src}
//             alt={title}
//             className="w-full h-full object-cover rounded-xl"
//             style={{ scale: imageScale }}
//           />
//         </div>
//         {/* Text content */}
//         <FadeIn>
//           <div className="space-y-4">
//             <h3 className="text-5xl font-normal">{title}</h3>
//             {/* <h4 className='text-2xl font-extralight'>{subtitle}</h4> */}
//             <p className="font-extralight py-4">{description.slice(0, 150)}</p>
//             <button className="px-4 py-2 rounded-3xl bg-gray-100 text-black">
//               Know more &#8594;
//             </button>
//           </div>
//         </FadeIn>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ServiceCard;