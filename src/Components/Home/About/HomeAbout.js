import React from "react";
import HomeAboutCarousel from "./HomeAboutCarousel";
import HomeAboutContent from "./HomeAboutContent";

const HomeAbout = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto mb-20">
        <HomeAboutCarousel />
        <HomeAboutContent />
      </div>
    </div>
  );
};

export default HomeAbout;
