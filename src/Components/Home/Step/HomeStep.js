import React from "react";
import HomeSingleStep from "./HomeSingleStep";
import { stepData } from "../../../Data/StepData";
import img from "../../../Assets/Step background line.svg";

const HomeStep = () => {
  return (
    <div className="relative md:py-20 mt-10 md:w-full w-10/12 mx-auto">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover md:w-[600px] lg:w-[750px]  opacity-25 sm:opacity-100 ml-auto my-auto mx-auto -mt-32 z-0 md:block hidden"
        src={img}
        alt=""
      />
      <div>
        <div className="lg:mt-12">
          <div className="pb-3 w-fit border-b-2 border-b-white mx-auto">
            <h4 className="uppercase text-primary font-medium text-sm">
              How we work
            </h4>
          </div>
          <h2 className="text-2xl text-center font-medium my-3">
            Our 7-Step process
          </h2>
          <p className="text-sm max-w-md opacity-60 mx-auto text-center">
            Our process is designed to inspire action, drive growth, and help
            your business reach its full potential.
          </p>
        </div>
        {/* all step */}
        <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto w-fit gap-x-10 lg:mt-20 md:mt-6 mt-10 lg:gap-y-20 md:gap-y-12 gap-y-10">
          {stepData.map((step) => (
            <HomeSingleStep key={step?.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStep;
