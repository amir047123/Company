import { Polyline } from "@mui/icons-material";
import React from "react";
import FilterButton from "../../../Shared/FilterButton";

const NewestBlog = () => {
  return (
    <div className="md:grid grid-cols-12 lg:gap-0 md:gap-10">
      <div className="lg:col-span-4 md:col-span-5">
        {/* Filter btn */}
        <FilterButton text={"All Blogs"} />
        <FilterButton text={"Design"} />
        <FilterButton text={"Programming"} />
        <FilterButton text={"E-Commerce"} />
        <FilterButton text={"Marketing"} />
        <FilterButton text={"Others"} />
      </div>
      <div className="lg:col-span-8 md:md:col-span-7 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-10 md:mt-0">
        <div className="w-full">
          <p className="uppercase text-primary">newest</p>
          <div className="mt-7 mb-5 flex items-center justify-start gap-8">
            <div className="flex gap-2 items-center justify-start">
              <Polyline className="text-primary" />
              <p className="text-lightGreen">Design</p>
            </div>
            <div className="flex justify-end gap-2 items-center">
              <img
                className="w-5 rounded-full bg-primary"
                src="./img/AboutUs/Team/naimur.png"
                alt="author img"
              />
              <p className="text-lightGreen">Naimur Rahman</p>
            </div>
          </div>
          <h2 className="text-lg my-3">
            The Importance of User Research and Testing
          </h2>
          <p className="text-lightGreen text-xs text-left">
            User research and testing are essential components of UI/UX design.
            They help designers to understand the needs and perspectives of
            users, identify areas for improvement, and ensure that the final
            product meets the needs of users.
          </p>
          <button className="px-10 py-2 mt-5 border border-primary rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary hover:text-dark  duration-150 text-sm font-medium">
            See Details
          </button>
        </div>
        {/* newest blog image */}
        <img
          className="lg:w-[45%] md:w-full rounded-3xl"
          src="./img/Blogs/img1.jpg"
          alt="newest blog img"
        />
      </div>
    </div>
  );
};

export default NewestBlog;
