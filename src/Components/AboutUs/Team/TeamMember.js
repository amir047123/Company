import React from "react";
import "./TeamMember.css";

const TeamMember = ({ name, position, image,description }) => {
  return (
    <div className="group ">
      <div className="w-full relative">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover sm:opacity-100 lg:w-[160px] md:w-[140px] sm:w-[220px] w-[180px] mx-auto lg:-mt-[77px] md:-mt-[56px] sm:-mt-[137px] -mt-[97px]"
          src={image}
          alt="round bg img"
        />
        <div className="w-[100%] mb-3 h-5 rounded-b-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"></div>
        <div className="w-[90%] mx-auto mb-3 h-5 rounded-b-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"></div>
        <div className="w-[80%] mx-auto mb-3 h-5 rounded-b-xl bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"></div>
      </div>

      <div className="img-bottom bg-gradient-to-r from-primary/5 to-secondary/5 group-hover:bg-gradient-to-r group-hover:from-[#0f3837] group-hover:to-[#1f5260] ">
        <div className="max-w-[150px] mx-auto py-3">
          <h4 className="text-center text-white">{name}</h4>
          <p className="text-xs text-primary text-center">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
