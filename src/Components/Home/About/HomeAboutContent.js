import React from "react";
import { Link } from "react-router-dom";
import GradientButton from "../../../Shared/GradientButton";

const HomeAboutContent = () => {
  return (
    <section className="flex lg:w-full w-10/12 mx-auto">
      <div>
        <div>
          <h1 className="uppercase font-medium text-primary">Who we are</h1>
          <p className="bg-white h-[2px] w-20 rounded-2xl mt-2 ml-10"></p>
        </div>
        <div className="mt-10 w-11/12">
          <h1 className="text-4xl font-semibold leading-tight">
            What's it like when you feel like you need something very much?
          </h1>
          <p className="text-lightGreen mt-10 leading-6 text-justify">
            Thinky Storm is an IT company that provides various technology-based
            solutions and services to its clients. The content created for such
            a company should be informative, technical, and educational. The
            purpose of the content is to showcase the company's expertise,
            knowledge, and experience in the IT industry, as well as to
            communicate the benefits and value that their products and services
            can provide to their target audience.
          </p>
        </div>
        <div className="mt-10">
          <Link to={"/aboutUs"}>
            <GradientButton text={"Learn more about us"}></GradientButton>
          </Link>
        </div>
      </div>
      <div>
        <img
          className="h-full w-[60vw] hidden md:block"
          src="img/About/Right-bg-img.png"
          alt="side img"
        />
      </div>
    </section>
  );
};

export default HomeAboutContent;
