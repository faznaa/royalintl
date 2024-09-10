import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FigureDigits = ({ initialCurrentValue, digits, text }: any) => {
    const [currentValue, setCurrentValue] = useState(initialCurrentValue);
    const [alreadyAnimated, setAlreadyAnimated] = useState(false);
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !alreadyAnimated) {
                    const duration = 2000; // 2 seconds total for animation
                    const frameRate = 60; // Number of frames per second
                    const totalFrames = (duration / 1000) * frameRate; // Calculate total frames for the animation

                    const increment = digits / totalFrames; // Amount to increment the number by each frame
                    let currentDigit = 0;

                    const interval = setInterval(() => {
                        currentDigit += increment;
                        if (currentDigit >= digits) {
                            setCurrentValue(digits); // Set the final value exactly
                            clearInterval(interval);
                            setAlreadyAnimated(true);
                        } else {
                            setCurrentValue(Math.round(currentDigit));
                        }
                    }, 1000 / frameRate); // Update based on frame rate

                    controls.start({ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } });
                    observer.disconnect(); // Stop observing after animation starts
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [digits, alreadyAnimated, controls]);

    return (
        <div ref={ref} className='overflow-hidden text-6xl tracking-wide space-x-2' style={{ color: "#C9372C"}}>
            <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={controls}
                className="inline-block"
            >
                {currentValue}
            </motion.div>
            <span>
                {text}
            </span>
        </div>
    );
};

export default FigureDigits;
