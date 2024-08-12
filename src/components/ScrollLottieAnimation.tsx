import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ScrollLottieAnimation = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const lottieRef = React.useRef<any>(null);

  const frame = useTransform(scrollYProgress, [0, 1], [0, 100]); // Assuming Lottie has 100 frames

  useEffect(() => {
    return frame.onChange((latest) => {
      if (lottieRef.current) {
        lottieRef.current.goToAndStop(latest);
      }
    });
  }, [frame]);

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={controls}
      // style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <DotLottieReact
        // ref={lottieRef}
        // src="https://lottie.host/d0f444f4-166a-4153-9e7d-4594c3a114dc/5DsWpHeqD1.json"
        src="https://lottie.host/embed/a26c72e0-ca92-4684-a6b6-d3be7df9c6dd/0OpMpyRlsu.json"
        autoplay={true}
        // loop={false}
        // style={{ maxWidth: "600px" }}
      />
    </motion.div>
  );
};

export default ScrollLottieAnimation;
