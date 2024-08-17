import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from 'assets/images/img1.jpg';
import img2 from 'assets/images/img2.jpg';
import img3 from 'assets/images/img3.jpg';
import img4 from 'assets/images/img4.png';
import img5 from 'assets/images/img1.jpg';
interface StaggeredGridProps {
  video: string;
  images: string[];
  isBlackBg?: boolean;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({ video, images,isBlackBg }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | number | null>(null);
  const nImages = [
    {src:img1,className:'aspect-[3/2.7] w-56'},
    {src:img2,className:'aspect-[2/3] w-64'},
    {src:img3,className:'aspect-[2/3] w-56'},
    {src:img4,className:'aspect-[2/3] w-72'},
    {src:img5,className:'aspect-[1/1.4] w-64'},
  ]

  const showModal = (index: string | number) => {
    setIsHovered(true);
    setHoveredElement(index);
  };

  const hideModal = () => {
    if (!isModalHovered) {
      setIsHovered(false);
    }
  };

  const gridItemSpan: { [key: number]: string } = {
    0: 'col-span-2 row-span-3',
    1: 'col-span-2 row-span-4',
    2: 'col-span-2 row-span-4',
    3: 'col-span-2 row-span-3',
  };

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full relative">
        <div
          className="w-full h-full grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-4 text-black"
          style={{ gridAutoFlow: 'dense' }}
        >
          {/* Video */}
         <div className='flex flex-col items-end  justify-center gap-4'>
         <div
            className="col-span-2 row-span-8 bg-gray-100 rounded-lg"
            onMouseEnter={() => showModal('video')}
            onMouseLeave={hideModal}
          >
            <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          {/* Images */}
          {nImages.slice(0,2).map((image, index) => (
            <div
              key={index}
              className={` bg-gray-400 rounded-3xl overflow-hidden ${image.className} ${isBlackBg ? 'border-2 border-white' :''} `}
              onMouseEnter={() => showModal(index)}
              onMouseLeave={hideModal}
            >
              <img src={image.src} alt={`image-${index}`} className=" w-full h-full object-cover rounded-lg" />
            </div>
          ))}
         </div>
         <div className='flex flex-col items-start justify-start gap-4 '>
         {nImages.slice(2,).map((image, index) => (
            <div
              key={index}
              className={` bg-gray-400 rounded-3xl overflow-hidden ${image.className} ${isBlackBg ? 'border-2 border-white' :''}`}
              onMouseEnter={() => showModal(index)}
              onMouseLeave={hideModal}
            >
              <img src={image.src} alt={`image-${index}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
         </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {(isHovered || isModalHovered) && (
            <motion.div
              className={`absolute top-0 w-full h-full rounded-lg z-10 ${isBlackBg ? 'border-2 border-white' :''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setIsModalHovered(true)}
              onMouseLeave={() => {
                setIsModalHovered(false);
                hideModal();
              }}
            >
              {hoveredElement === 'video' ? (
                <video className={`w-full h-full object-cover rounded-lg `} autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                hoveredElement !== null && (
                  <img
                    src={images[hoveredElement as number]}
                    alt={`modal-${hoveredElement}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StaggeredGrid;