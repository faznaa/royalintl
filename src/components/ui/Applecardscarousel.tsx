"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "components/hooks/useOutsideClick";

interface CarouselProps {
  items: any;
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const duplicatedItems = [...items, ...items, ...items]; // Duplicate items

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 400;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (currentIndex + totalItems);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToIndex = (index: number) => {
    const wrappedIndex = (index + totalItems) % totalItems;
    setCurrentIndex(wrappedIndex);
  };


  const handleCardClose = (index: number) => {
    const wrappedIndex = (index + totalItems) % totalItems;
    setCurrentIndex(wrappedIndex);
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start items-center gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}
          >
            {duplicatedItems.map((card: any, index: number) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * (index % totalItems),
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl "
              >
                <Card logo={card.logo} key={card.src} card={card} index={index} isMiddle={currentIndex === (index % totalItems)} />
              </motion.div>
            ))}
          </div>
        </div>

  

       <div className="w-full sm:max-w-md mx-auto">
       <div className="flex justify-start items-center  mr-10 z-40 border-t border-gray-400  ">
          {items.map((item:any, idx:number) => (
            <button
              className={`z-40 h-6 w-auto px-2 pt-6 text-white font-lg  ${idx==currentIndex ? 'border-t-4 border-white': 'border-b-4 border-transparent'}`}
              key={idx}
              onClick={() => scrollToIndex(idx)}
            >
              {/* {idx + 1} */}
              <img src={item.logo} className="h-6 w-auto " />
            </button>
          ))}
        </div>
       </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  logo,
  index,
  layout = false,
  isMiddle = false
}: {
  card: Card;
  index: number;
  logo:string;
  layout?: boolean;
  isMiddle?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const ref= useRef()

  return (
    <>
      <AnimatePresence>
       
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        style={{
            // scale:isMiddle?1.3:1
        }}
        onClick={handleOpen}
        className={`rounded-3xl bg-gray-100 dark:bg-neutral-900 h-56 w-80 md:h-[13rem] md:w-96 overflow-hidden flex flex-col items-center justify-start relative ${isMiddle?'z-30 md:h-[17rem] md:w-[30rem]':'z-10'} mx-6`}
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          {/* <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p> */}
          <motion.img 
                      layoutId={layout ? `category-${card.category}` : undefined}
        src={logo}
                      className="absolute left-5 top-5 text-left h-8 w-auto"
          >

          </motion.img>
          {/* <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p> */}
        </div>
        {/* <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
        */}
        <video src="video1.mp4" 
        onMouseOver={(event:any) => event.target.play()}
        onMouseOut={(event:any) => event.target.pause()}
        // onClick={(event:any) => event.target.pause()}
        autoPlay={false} loop muted className="object-fit absolute z-10 inset-0"/>
      </motion.button>
      <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white mx-7 3xl:mx-7 h-10  text-pretty text-sm md:text-sm font-medium   font-sans mt-2"
          >
            {card.title}
          </motion.p>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurdataurl={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
