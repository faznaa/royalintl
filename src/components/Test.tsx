import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Card = ({ index, isVisible }: { index: number; isVisible: boolean }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className='w-full h-full bg-gray-400 border-black border-4 flex justify-center items-center'
    >
        <p className='text-3xl'>Card #{index}</p>
    </motion.div>
);

export default function Test() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [visibleCards, setVisibleCards] = useState(0);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            // Update visible cards based on scroll percentage
            const newVisibleCards = Math.floor(latest * 10); // 10% scroll for each card
            setVisibleCards(newVisibleCards);
        });
    }, [scrollYProgress]);

    return (
        <div className='h-[200vh] w-screen'>
            <div className='fixed w-screen top-20 grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {items.map((i) => (
                    <Card key={i} index={i} isVisible={i <= visibleCards} />
                ))}
            </div>
        </div>
    );
}
