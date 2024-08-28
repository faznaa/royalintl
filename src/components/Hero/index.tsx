import { FlipWords } from 'components/FlipWords'
import React from 'react'
import { motion } from 'framer-motion'
import Continents from 'components/Continents'

const Figure = ({children}:any) => <div className='text-red-500 font-medium text-4xl tracking-wide'>{children}</div>
const FigureCaption = ({children}:any) => <div className='text-gray-200 text-sm uppercase tracking-normal'>{children}</div>
export default function Hero() {
  return (
    <div className='w-full h-full min-h-screen bg-black'>
    <div className='flex flex-col pt-48  justify-center items-center w-full'>
    <motion.h1
     initial={{ opacity: 0, y:-50 }}
     animate={{ opacity: 1, y:0 }}
     transition={{ duration: 0.7 }}
     exit={{ opacity: 0, scale:0.8 }}
    //  style={{ scale: size }}
     className="text-2xl sm:text-4xl font-extralight relative z-20 text-gray-300 text-center mb-10 tracking-tighter">
      Moving Beyond Relocation - Innovating the <br /> Future of High-Tech Logistics</motion.h1>
    <p className="text-4xl sm:text-7xl font-semibold relative z-20 text-gray-300
      
      ">
       We offer you <span className='text-red-600'><FlipWords words={['Expertise','Efficiency','Reliability']} /></span>
     </p>

    </div>

    {/* CIRCLE and divs  */}
    <div className='flex flex-col  justify-start items-center w-full py-20'>
        <div className='bg-white rounded-full h-96 w-96'/>
    </div>

    <div className='grid grid-cols-3 py-36'>
        <div></div>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-white text-xl sm:text-4xl font-medium '>International<br/> Relocation</h1>
            <p className='text-gray-200 text-center my-8 sm:max-w-sm'>With over 15 years of experience, Royal International Relocations is a trusted leader in the relocation industry.We offer reliable, safe, and affordable services both domestically and internationally.</p>
            <div className='grid grid-cols-2 justify-between items-start gap-x-6 px-10 text-center w-full '>
                <div className=''>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
                <div>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
            </div>
        </div>
        <div></div>
    </div>

    <Continents/>
    </div>
  )
}
