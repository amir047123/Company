import React from "react";
import Directions from "./Directions";

const OurDirection = () => {
  return (
    <div className="relative mb-32">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto">
        <Directions />
      </div>
    </div>
  );
};

export default OurDirection;
