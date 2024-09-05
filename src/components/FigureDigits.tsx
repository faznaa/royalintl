import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FigureDigits = ({ digits, text }: any) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [alreadyAnimated, setAlreadyAnimated] = useState(false);
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !alreadyAnimated) {
                    const duration = 2000; // 2 seconds
                    const intervalTime = duration / digits;

                    let currentDigit = 0;
                    const interval = setInterval(() => {
                        if (currentDigit <= digits) {
                            setCurrentValue(currentDigit);
                            currentDigit += 1;
                        } else {
                            clearInterval(interval);
                            setAlreadyAnimated(true);
                        }
                    }, intervalTime);

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
        <div ref={ref} className='overflow-hidden text-red-500 text-6xl tracking-wide space-x-2'>
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
