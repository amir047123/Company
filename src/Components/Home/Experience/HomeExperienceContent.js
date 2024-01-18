import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const HomeExperienceContent = () => {
  return (
    <div className="w-full">
      <div className="md:w-9/12 w-11/12">
        <h4 className="text-lg uppercase font-medium text-primary">
          Experience that shows
        </h4>
        <h3 className="text-3xl md:text-4xl lg:text-3xl font-semibold my-10">
          Make your product really matter
        </h3>
        <p className="text-left">
          Thinky Storm IT Company is a leading provider of technology-based
          solutions and services. With their expertise and commitment to
          delivering high-quality work, they are well-positioned to help their
          clients succeed in the competitive world of technology.
        </p>
        <Link to={"life-cycle"}>
          <button className="mt-10 flex gap-3 items-center bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md px-5 py-3 font-medium">
            <span>See Development Life Cycle</span>
            <span>
              <ArrowRightAltIcon />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeExperienceContent;

