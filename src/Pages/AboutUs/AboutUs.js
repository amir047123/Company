import React, { useEffect } from "react";
import OurDirection from "../../Components/AboutUs/OurDirection/OurDirection";
import OurVision from "../../Components/AboutUs/OurVision/OurVision";
import Team from "../../Components/AboutUs/Team/Team";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <OurVision />
      <Team />
      <OurDirection />
      <Subscribe />
    </div>
  );
};

export default AboutUs;
