import GridBackground from 'components/GridBackground'
import ParallaxText from 'components/ParallaxText'
import Services from 'components/Services'
import { World } from 'components/ui/globe'
import { globeConfig, sampleArcs } from 'data/globeutils'
import React from 'react'



export default function Home() {
  return (
    <div className='relative bg-black'>
     
        <GridBackground/>
        {/* <ParallaxText baseVelocity={100}>Hello all </ParallaxText>
    <ParallaxText baseVelocity={150}>Good </ParallaxText> */}
{/* 
<motion.div className="absolute w-[350px] h-[350px] z-10 right-0  mr-32 blur-2xl bg-[#C5D0D4] rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 5 }}      
      /> */}
 <div className=" h-[500px] w-[600px] z-50 bg-black mx-auto -mt-64">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>

        <Services/>
    </div>
  )
}
