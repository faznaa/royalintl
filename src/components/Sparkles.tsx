"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

/**
 * The `Sparkles` component creates a full-screen particle animation using the `SparklesCore` component.
 * It fills the entire container with a sparkling particle effect.
 * This component serves as a visual enhancement and can be used as a background or decorative element.
 * 
 * @example
 * // Example usage:
 * import { Sparkles } from './Sparkles';
 *
 * const App = () => (
 *   <div className="h-screen">
 *      <Sparkles />
*   </div>
* );
*
* export default App;
* 
* @param props no props required
*
* @returns {JSX.Element} A full-screen div with a sparkling particle effect.
*
* @see {@link SparklesCore} for the core component managing the particle effect.
*/
export function Sparkles() {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}