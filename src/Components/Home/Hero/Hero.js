import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="background_image">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-10/12 gap-10 mx-auto items-center">
        <HeroContent />
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
