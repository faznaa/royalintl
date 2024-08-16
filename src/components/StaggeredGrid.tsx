import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface StaggeredGridProps {
  video: string;
  images: string[];
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({ video, images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | number | null>(null);

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
          className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 text-black"
          style={{ gridAutoFlow: 'dense' }}
        >
          {/* Video */}
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
          {images.map((image, index) => (
            <div
              key={index}
              className={`${gridItemSpan[index]} bg-gray-400 rounded-lg`}
              onMouseEnter={() => showModal(index)}
              onMouseLeave={hideModal}
            >
              <img src={image} alt={`image-${index}`} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {(isHovered || isModalHovered) && (
            <motion.div
              className="absolute top-0 w-full h-full rounded-lg z-10"
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
                <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop>
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