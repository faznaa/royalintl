import GridBackground from 'components/GridBackground'
import Hero from 'components/Hero'
import Services from 'components/Services'
import React from 'react'
import Map from "components/Map";
import OurExpertise from "components/OurExpertise";
import HeroFazna from 'components/HeroFazna';
import TrustedByLeaders from 'components/TrustedByLeaders';
import Continents from 'components/Continents';
import TrustedForAllRelocation from 'components/TrustedForAllRelocation';

export default function Home() {
  return (
    <div className=''>
        {/* <HeroFazna/> */}
        <Hero/>

      {/* <GridBackground /> */}
      {/* <Map /> */}
      <OurExpertise />
      {/* <Hero /> */}
      <Services />
      <TrustedByLeaders/>
      <Continents/>
      <TrustedForAllRelocation />
    </div>
  );
}
