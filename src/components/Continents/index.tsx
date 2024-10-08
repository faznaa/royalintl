import FadeIn from "components/FadeIn";
import { Figure } from "components/Figure";
import Map from "components/Map";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FigureDigits from "components/FigureDigits";

const FigureCaption = ({ children }: any) => (
  <div className="text-gray-700 font-medium uppercase tracking-wider">
    {children}
  </div>
);

export default function Continents() {
  const dummyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
  return (
    <div className="bg-white text-black h-full w-full min-h-screen px-10 py-32 text-center z-40">
      {/* <h1 className=' text-xl sm:text-4xl font-medium '>We cover all continents</h1>
        <p className='text-md sm:max-w-sm text-gray-400 mx-auto py-6'>Over the last 15 years , we've grown into an international relocation company with a presence of 20+ partners aroudn the world.</p>
        <div className='h-[400px] w-3/4 mx-auto overflow-hidden'>
        <img src="https://img.freepik.com/premium-vector/dotted-world-map-with-continents_79145-1005.jpg"
        className='w-full object-cover'/>
        </div>
      


        <h1 className=' text-xl sm:text-4xl font-medium mt-20'>What sets us apart</h1> */}
      <Map />
      <div className="w-full sm:max-w-5xl  mx-auto pt-16">
        <div className="grid grid-cols-4 justify-between text-center">
          <div className="">
            {/* <Figure>146 K</Figure> */}
            <FigureDigits digits={10} text="k" />
            <FigureCaption>Home moving</FigureCaption>
          </div>
          <div>
            <FigureDigits digits={200} initialCurrentValue={150} text="k" />
            <FigureCaption>Home moving</FigureCaption>
          </div>
          <div className="">
            <FigureDigits digits={46} text="k" />
            <FigureCaption>Home moving</FigureCaption>
          </div>
          <div>
            <FigureDigits digits={145} initialCurrentValue={100} text="k" />
            <FigureCaption>Home moving</FigureCaption>
          </div>
        </div>
      </div>
      {/* <div className="text-gray-400 mx-auto text-center mt-10">
        Packages moved across globe.
      </div> */}
    </div>
  );
}
