import GridBackground from 'components/GridBackground'
import Hero from 'components/Hero'
import Services from 'components/Services'
import React, { useEffect, useState } from 'react'
import Map from "components/Map";
import OurExpertise from "components/OurExpertise";
import HeroFazna from 'components/HeroFazna';
import TrustedByLeaders from 'components/TrustedByLeaders';
import Continents from 'components/Continents';
import TrustedForAllRelocation from 'components/TrustedForAllRelocation';
import WhatSetUsApart from 'components/WhatSetUsApart';


const ResponsiveChecked = () => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("SM");
      else if (width < 768) setScreenSize("MD");
      else if (width < 1024) setScreenSize("LG");
      else if (width < 1280) setScreenSize("XL");
      else if (width < 1800) setScreenSize("2XL");
      else setScreenSize("3XL");
    };

    // Initial check
    updateSize();

    // Event listener for resize
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="fixed top-5 right-5 w-20 bg-white text-black p-2 rounded-md shadow-lg">
      <p>{screenSize}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className=''>
        {/* <HeroFazna/> */}
        <Hero/>
      {/* <ResponsiveChecked/> */}
      {/* <GridBackground /> */}
      {/* <Map /> */}
      <OurExpertise />
      {/* <Hero /> */}
      <Services />
      {/* <TrustedByLeaders/> */}
      <Continents/>
      <WhatSetUsApart />
      <TrustedForAllRelocation />
    </div>
  );
}
