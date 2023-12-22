import React, { useEffect } from "react";
import HireUsForm from "./HireUsForm";
import "./HireUs.css";
import ContactInfo from "../../Shared/ContactInfo";

const HireUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-10 md:gap-x-5">
        <div className="col-span-5 bg-secondary/5 lg:p-16 p-10 rounded-r-xl">
          <ContactInfo />
        </div>
        <div className="col-span-7 lg:py-16 lg:px-24 p-10">
          <HireUsForm />
        </div>
      </div>
    </div>
  );
};

export default HireUs;
