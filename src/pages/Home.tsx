import GridBackground from 'components/GridBackground'
import ParallaxText from 'components/ParallaxText'
import Services from 'components/Services'
import React from 'react'

export default function Home() {
  return (
    <div>
        <GridBackground/>
        {/* <ParallaxText baseVelocity={100}>Hello all </ParallaxText>
    <ParallaxText baseVelocity={150}>Good </ParallaxText> */}

        <Services/>
    </div>
  )
}
