import React from "react";
import partner1 from "../../../Assets/Business/Brand logo 01.svg";
import partner2 from "../../../Assets/Business/Brand logo 02.svg";
import partner3 from "../../../Assets/Business/Brand logo 03.svg";
import partner4 from "../../../Assets/Business/Brand logo 04.svg";
import partner5 from "../../../Assets/Business/Brand logo 05.svg";

const BusinessPartner = () => {
  return (
    <div className="md:my-32 my-20 grid grid-cols-5 justify-between items-center">
      <img
        className="lg:w-[50%] md:w-[60%] w-[70%]"
        src={partner1}
        alt="partner one"
      />
      <img
        className="lg:w-[50%] md:w-[60%] w-[70%]"
        src={partner2}
        alt="partner two"
      />
      <img
        className="lg:w-[50%] md:w-[60%] w-[70%]"
        src={partner3}
        alt="partner three"
      />
      <img
        className="lg:w-[50%] md:w-[60%] w-[70%]"
        src={partner4}
        alt="partner four"
      />
      <img
        className="lg:w-[50%] md:w-[60%] w-[70%]"
        src={partner5}
        alt="partner five"
      />
    </div>
  );
};

export default BusinessPartner;
