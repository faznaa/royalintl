import {motion, useScroll } from 'framer-motion';
import React from 'react'

export default function CustomMouse() {
    const { scrollYProgress } = useScroll();
  return (
    <div>
        {/* Red circle follows cursor in speed varied  */}
       <motion.div 
       className="w-24 h-24 bg-red-600 rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
       style={{y: scrollYProgress}}
       />
    </div>
  )
}
