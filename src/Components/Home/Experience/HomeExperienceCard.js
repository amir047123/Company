import React from "react";
import {
  downExperiences,
  upExperiences,
} from "../../../Data/HomeExperienceData";
import ExpLittleCardDown from "./ExpLittleCardDown";
import ExpLittleCardUp from "./ExpLittleCardUp";

const HomeExperienceCard = () => {
  return (
    // all little card
    <div className="w-full mt-20 lg:mt-0">
      {/* down card */}
      <div className="flex md:justify-between justify-center md:gap-0 gap-10 xs:gap-y-28 flex-wrap">
        {downExperiences.map((downExp) => (
          <ExpLittleCardDown key={downExp?.name} downExp={downExp} />
        ))}
      </div>
      {/* up Card */}
      <div className="flex justify-evenly">
        {upExperiences.map((upExp) => (
          <ExpLittleCardUp key={upExp?.name} upExp={upExp} />
        ))}
      </div>
    </div>
  );
};

export default HomeExperienceCard;
