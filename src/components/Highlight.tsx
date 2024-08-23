import { motion } from "framer-motion";
import {cn } from "../lib/utils";

const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <motion.span
        initial={{
          backgroundSize: "0% 100%",
        }}
        animate={{
          backgroundSize: "100% 100%",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
          repeatType: "loop",
          repeatDelay:2,
          repeat: Infinity,
        }}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-l from-red-800 to-black `,
          className
        )}
      >
        {children}
      </motion.span>
    );
  };

export default Highlight