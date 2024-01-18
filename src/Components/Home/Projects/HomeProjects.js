import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Divider from "../../../Shared/Divider";
import ProjectCard from "./ProjectCard";

const HomeProjects = () => {
  const [data, setData] = useState([]);
  const [onActiveMenu, setOnActiveMenu] = useState(""); // Initialize with an empty string

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/project/getProjects")
      .then((res) => res.json())
      .then((apiData) => {
        if (apiData?.data.length) {
          setData(apiData.data);

          // Set onActiveMenu to the first category in the data
          if (apiData.data[0]) {
            setOnActiveMenu(apiData.data[0].category);
          }
        }
      });
  }, []);

  const categories = [...new Set(data.map((project) => project.category))];
  const displayedCategories = categories.slice(0, 3); // Only show the first three categories

  const filteredProjects = data.filter(
    (project) => project.category === onActiveMenu
  );

  return (
    <div className="mt-40">
      <div className="">
        <img
          src={"img/Projects/background.png"}
          className="w-[600px] md:left-[28%] sm:left-[0%] -mt-20 absolute"
          alt=""
        />
      </div>
      <div className="md:w-10/12 w-11/12 mx-auto relative">
        <div className="flex justify-center">
          <div className="">
            <h1 className="uppercase font-medium text-xl text-center text-primary leading-loose">
              What We're proud of
            </h1>
            <p className="h-1 w-40 mx-auto leading-loose bg-white"></p>
            <h1 className="font-semibold text-xl md:text-3xl mt-4 text-center">
              Our Projects
            </h1>
          </div>
        </div>
        <div className="my-20">
          <div className="sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden">
            <div className="flex flex-wrap gap-3">
              {displayedCategories.map((category) => (
                <div key={category}>
                  <button
                    onClick={() => setOnActiveMenu(category)}
                    className={
                      onActiveMenu === category
                        ? "border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 px-10 py-2 text-white rounded-md"
                        : "border border-primary px-10 py-2 text-white rounded-md"
                    }
                  >
                    {category.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
            <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
