import React from "react";

const ExpLittleCardUp = ({ upExp }) => {
  return (
    <div className="relative mt-28">
      <div className="w-[125px] rounded-md">
        {/* big dot */}
        <div className="h-3 w-3 bg-primary rounded-full absolute -top-[90px] left-[60px]"></div>
        {/* doted border */}
        <div className="h-[62px] w-2 border-l-2 border-dotted border-primary absolute -top-20 left-[64px]"></div>
        {/* inside card content */}
        <div className=" bg-primary w-full relative pt-5 pb-3 rounded-t-lg">
          <div className="w-full px-2 mx-auto">
            <p className="text-center text-white text-[12px]">{upExp?.name}</p>
            <img className="mx-auto w-7 mt-2" src={upExp?.icon} alt="" />
            <div className="absolute w-[30px] h-[30px] bg-primary -top-3 left-[50px] rotate-45"></div>
          </div>
        </div>
        {/* card title */}
        <div className="bg-gradient-to-r from-primary/80 to-secondary/80 h-fit py-[6px] w-full rounded-b-lg shadow-lg">
          <p className="text-center font-bold text-white ">{upExp?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpLittleCardUp;
