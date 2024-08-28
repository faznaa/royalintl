import GridBackground from "components/GridBackground";
import Hero from "components/Hero";
import Map from "components/Map";
import OurExpertise from "components/OurExpertise";
import Services from "components/Services";
import React from "react";

export default function Home() {
  return (
    <div>
      <GridBackground />
      <Map />
      <OurExpertise />
      <Hero />
      <Services />
    </div>
  );
}
