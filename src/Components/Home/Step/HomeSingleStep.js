import React from "react";

const HomeSingleStep = ({ step }) => {
  return (
    <div className="max-w-[150px] h-[125px] z-10">
      <div className="w-fit rounded-full border-2 border-primary p-2 md:p-3 bg-dark">
        <img className="w-5 md:w-8" src={step?.icon} alt="" />
      </div>
      <h4 className="mt-4 mb-2">{step?.title}</h4>
      <p className="opacity-40 text-xs">{step?.description}</p>
    </div>
  );
};

export default HomeSingleStep;
