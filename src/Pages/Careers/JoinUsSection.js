import React from "react";
import about from "../../Assets/Career/About-page.png";
import "./Carrers.css";
const JoinUsSection = () => {
  return (
    <div className="mid-container  bgRight p-2">
      <div className="max-w-[600px] mx-auto ">
        <h4 className="text-primary font-bold uppercase my-3">join us</h4>
        <h2 className="text-white font-semibold text-5xl">
          Take part in game changing projects
        </h2>
        <p className="text-lightGreen text-justify my-5">
          We build beautiful, seamless and high performing web solutions that
          make a real impact on our customers’ bottom lines. One project at a
          time, we elevate the stand- ards of modern web design and development.{" "}
          <br /> <br />
          We’re always looking for new talent. If you‘re passionate about web
          development and excellent customer service - we’d love to hear from
          you!
        </p>
      </div>
      <div className="max-w-[800px] mx-auto my-1">
        <img src={about} alt="about" className="w-full" />
      </div>
    </div>
  );
};

export default JoinUsSection;
