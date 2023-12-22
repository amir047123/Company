import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import leftBg from "../../Assets/Subscribe/background-left.png";
import rightBg from "../../Assets/Subscribe/background-Right.png";

const Subscribe = () => {
  return (
    <div className="relative md:py-20 mt-10 md:w-10/12 mx-auto bg-gradient-to-t from-[#040C17] to-[#051D27] md:rounded-t-[100px] rounded-t-[40px] rounded-b-3xl">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover md:w-[40%] lg:w-[30%]  opacity-25 sm:opacity-100 mt-auto z-0 md:block hidden mr-auto"
        src={leftBg}
        alt="left png"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover md:w-[40%] lg:w-[30%]  opacity-25 sm:opacity-100 mt-auto ml-auto z-0 md:block hidden"
        src={rightBg}
        alt="right"
      />

      <div className="max-w-xs mx-auto md:my-0 py-10 lg:my-14 px-5 md:px-0">
        <h2 className="text-medium text-center text-primary text-lg">
          Hire us now!
        </h2>
        <h4 className="md:text-3xl text-2xl text-medium text-center my-3">
          Interested in wording together?
        </h4>
        <p className="text-sm opacity-60 text-center">
          Let's talk about you project and see how we can help you grow your
          business.
        </p>

        <Link to={"/hire"}>
          <button className="mt-10 flex gap-3 items-center bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md px-5 py-3 font-medium mx-auto">
            <span>Get a quick quote</span>
            <span>
              <ArrowRightAltIcon />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
