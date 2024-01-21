import React from "react";
// import partner1 from "../../../Assets/Business/Brand logo 01.svg";
// import partner2 from "../../../Assets/Business/Brand logo 02.svg";
// import partner3 from "../../../Assets/Business/Brand logo 03.svg";
// import partner4 from "../../../Assets/Business/Brand logo 04.svg";
// import partner5 from "../../../Assets/Business/Brand logo 05.svg";

const BusinessPartner = () => {
  return (
    <div className=" my-10">
      <p className="text-primary uppercase text-sm mb-5">
        Our Business Partner
        </p>
      <div className=" grid lg:grid-cols-4  justify-center items-center">
      <p className=" font-bold uppercase focus:text-primary text-center focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-5 py-3 font- text-sm  block w-56 cursor-pointer">Drive Shikhun Ldt.</p>
      <p className=" text-center font-bold uppercase focus:text-primary focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-5 py-3 font- text-sm  block w-56 cursor-pointer">Nirog Health Pulse Ltd.</p>
      <p className="text-center font-bold uppercase focus:text-primary focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-5 py-3 font- text-sm  block w-56 cursor-pointer">Care See BD Ltd.</p>
      <p className="text-center font-bold uppercase focus:text-primary focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-5 py-3 font- text-sm  block w-56 cursor-pointer">Renix  Laboratories Ltd.</p>
    </div>
    </div>
  );
};

export default BusinessPartner;
