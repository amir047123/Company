import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceDetailsHero = ({ serviceData }) => {
  const { description, icon, name, title } = serviceData;
  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 md:gap-0 justify-between items-center">
      {/* first part */}
      <div className="w-full">
        <div className="max-w-md">
          <div className="text-primary flex items-center lg:gap-20 gap-5 uppercase lg:text-sm text-xs">
            <p>{name}</p>
            <div>
              <Link
                className="text-primary font-medium hover:underline uppercase"
                to="/services"
              >
                <span className="mr-2 text-xl"> ← </span>Back to Services
              </Link>
            </div>
          </div>
          <h3 className="text-3xl font-medium my-3">{title}</h3>
          <p className="text-lightGreen text-sm">{description}</p>
          <Link to={"/hire"}>
            <button className="mt-10 flex gap-3 items-center bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md px-5 py-3 font-medium">
              <span>Get a quick quote</span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* second part */}
      <div className="w-full">
        <img
          className="lg:w-[50%] w-[70%] mx-auto md:mx-0 md:ml-auto"
          src={icon}
          alt="this is cover img"
        />
      </div>
    </div>
  );
};

export default ServiceDetailsHero;
