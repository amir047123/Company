import React, { useEffect } from "react";
import HomeAbout from "../../Components/Home/About/HomeAbout";
import HomeExperience from "../../Components/Home/Experience/HomeExperience";
import Hero from "../../Components/Home/Hero/Hero";
import HomeReview from "../../Components/Home/HomeReview/HomeReview";
import HomeProjects from "../../Components/Home/Projects/HomeProjects";
import HomeServices from "../../Components/Home/Services/HomeServices";
import HomeStep from "../../Components/Home/Step/HomeStep";
import Subscribe from "../../Shared/Subscribe/Subscribe";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeReview />
      <HomeExperience />
      <HomeStep />
      <Subscribe />
    </div>
  );
};

export default Home;
