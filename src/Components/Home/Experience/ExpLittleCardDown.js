import React from "react";

const ExpLittleCardDown = ({ downExp }) => {
  console.log(downExp);
  return (
    <div className="relative">
      <div className="w-[125px] rounded-md">
        {/* card title */}
        <div className="bg-gradient-to-r from-secondary/80 to-primary/80 h-fit py-[6px] w-full rounded-t-md shadow-lg">
          <p className="text-center font-bold text-white ">{downExp?.title}</p>
        </div>
        {/* inside card content */}
        <div className=" bg-primary w-full relative pt-3 pb-5 rounded-b-md">
          <div className="w-full px-3 mx-auto">
            <p className="text-center text-white text-[12px]">
              {downExp?.name}
            </p>
            <img
              className="mx-auto w-7 max-h-7 mt-2"
              src={downExp?.icon}
              alt=""
            />
            <div className="absolute w-[30px] h-[30px] bg-primary -bottom-3 left-[50px] rotate-45"></div>
          </div>
        </div>
        {/* doted border */}
        <div className="h-[62px] w-2 border-l-2 border-dotted border-primary absolute -bottom-20 left-[64px]"></div>
        {/* big dot */}
        <div className="h-3 w-3 bg-primary rounded-full absolute -bottom-[90px] left-[60px]"></div>
      </div>
    </div>
  );
};

export default ExpLittleCardDown;
