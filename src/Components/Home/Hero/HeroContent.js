import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroContent = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-2xl font-semibold w-[48vw] leading-tight whitespace-pre">
        Let's Build <br />
        <span>Something amazing</span> <br />
        <span className="text-primary flex">
          <span className="text-white">with </span>
          <Typewriter
            options={{
              strings: ["Thinky Storm"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <p className="text-lightGreen leading-6 mt-8 w-10/12 text-justify">
        The Thinky Storm is a company where you found your desired service. We
        are new born software company that will help you to build your desired
        software technology with your demanded features. We are always serious
        about your project done with a innovative way.
      </p>
      <Link to={"/hire"}>
        <button className="mt-10 flex gap-3 items-center bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md px-5 py-3 font-medium">
          <span>Get a quick quote</span>
          <span>
            <ArrowRightAltIcon />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default HeroContent;
