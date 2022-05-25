import React, { Fragment } from "react";
import hero from "../Images/hero.svg";

export default function HomeContent() {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto md:mx-0 p-10">
        {/* Top Text */}
        <div className="text-white">
          Hola
        </div>
        {/* Right Image */}
        <img src={hero} className="h-96"/>
        {/* BLUR BUTTON */}
      </div>
  );
}
