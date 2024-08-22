import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
    {id: 0,src:images[0],className:'aspect-[3/2.7] w-56'},
    {id: 1,src:images[1],className:'aspect-[2/3] w-64'},
    {id: 2,src:images[2],className:'aspect-[2/3] w-56'},
    {id: 3,src:images[3],className:'aspect-[2/3] w-72'},
    {id: 4,src:images[4],className:'aspect-[1/1.4] w-64'},
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
         <div className={`flex ${isBlackBg ? 'order-last items-start' : 'items-end '} flex-col  justify-center gap-4`}>
         <div
            className="col-span-2 row-span-8 rounded-3xl hover:cursor-pointer"
            onClick={() => showModal('video')}
            onMouseLeave={hideModal}
          >
            <div className='w-full h-full overflow-hidden rounded-3xl'>
              <motion.video
                className="w-full h-full object-cover rounded-3xl"
                autoPlay
                muted
                loop
                whileHover={{ scale: 1.2 }}
                transition={{ duration: .5 }}
              >
                <source src={video} type="video/mp4" />
              </motion.video>
            </div>
          </div>

          {/* Images */}
          {nImages.slice(0,2).map((image, index) => (
            <div
              key={image.id}
              className={`rounded-3xl overflow-hidden ${image.className} hover:cursor-pointer`}
              onClick={() => showModal(image.id)}
              onMouseLeave={hideModal}
            >
              <motion.img
                src={image.src}
                alt={`image-${index}`}
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: .5 }}
              />
            </div>
          ))}
         </div>
         <div className={`flex ${isBlackBg ? 'items-end' : 'items-start '} flex-col justify-start gap-4 `}>
         {nImages.slice(2,).map((image, index) => (
            <div
              key={image.id}
              className={`rounded-3xl overflow-hidden ${image.className} hover:cursor-pointer`}
              onClick={() => showModal(image.id)}
              onMouseLeave={hideModal}
            >
              <motion.img
                src={image.src}
                alt={`image-${index}`}
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: .5 }}
              />
            </div>
          ))}
         </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {(isHovered || isModalHovered) && (
            <motion.div
              className={`absolute top-0 w-full h-full rounded-lg z-10 hover:cursor-pointer`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              onMouseEnter={() => setIsModalHovered(true)}
              onClick={() => setIsModalHovered(false)}
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
                    src={nImages[hoveredElement as number].src}
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