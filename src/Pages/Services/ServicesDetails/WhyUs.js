import React from "react";
import Card from "../../../Components/AboutUs/OurDirection/Card";
import directionData from "../../../Components/AboutUs/OurDirection/DirectionData";

const WhyUs = () => {
  return (
    <div className="my-20">
      <div className="max-w-xs mx-auto">
        <p className="text-primary uppercase text-center">Why us?</p>
        <div className="h-1 w-1/3 mx-auto my-3 bg-white "></div>
        <h4 className="text-2xl font-medium mb-4 text-center">
          Guaranteed Quality
        </h4>
        <p className="text-center text-xs text-lightGreen">
          We're committed to bringing you the absolute best product and service
          possible. No shortcuts, no compromises
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 md:grid-cols-3 lg:gap-20 md:gap-10 mt-16">
        {directionData.slice(0, 3).map((direction) => (
          <Card
            key={direction?._id}
            name={direction?.name}
            des={direction?.des}
            icon={direction?.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
