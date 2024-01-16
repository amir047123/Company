import React from "react";
import HomeExperienceCard from "./HomeExperienceCard";
import HomeExperienceContent from "./HomeExperienceContent";
const HomeExperience = () => {
  return (
    <div className="relative py-20 mt-10">
    
      <div className="lg:w-9/12 w-10/12 mx-auto lg:flex justify-center items-center gap-5">
        <HomeExperienceContent />
        <HomeExperienceCard />
      </div>
    </div>
  );
};

export default HomeExperience;
