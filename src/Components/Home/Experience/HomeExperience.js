import React from "react";
import HomeExperienceCard from "./HomeExperienceCard";
import HomeExperienceContent from "./HomeExperienceContent";

const HomeExperience = () => {
  return (
    <div className="relative py-20 mt-10">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[35%] opacity-25 sm:opacity-100 ml-auto my-auto"
        src="./img/Projects/background.png"
        alt="Couple on a bed with a dog"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto lg:flex justify-center items-center gap-5">
        <HomeExperienceContent />
        <HomeExperienceCard />
      </div>
    </div>
  );
};

export default HomeExperience;
