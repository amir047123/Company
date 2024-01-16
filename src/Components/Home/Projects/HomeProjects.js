import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Divider from "../../../Shared/Divider";

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

  const filteredProjects = data.filter((project) => project.category === onActiveMenu);

  return (
    <div className="mt-40">
      <div className="">
        <img
          src={"img/Projects/background.png"}
          className="w-[600px] md:left-[28%] sm:left-[0%] -mt-20 absolute"
          alt=""
        />
      </div>
      <div className="w-10/12 mx-auto relative">
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
            <div className="my-10 flex flex-wrap  gap-5">
              {filteredProjects.map((project) => (
                 <div
                 key={project._id}
                 className="card_border_gradient rounded-xl md:w-[22rem] w-80 p-5"
               >
                 <img
                   className="h-auto w-auto mb-4 rounded-xl"
                   src={`${project?.img}`}
                   alt="card_image"
                 />
                 <Divider />
                 <div className=" mt-4">
                   <div className="">
                     <h4 className="text-xs text-lightGreen">{project?.title}</h4>
                   </div>
                   <div className=" lg:flex  justify-between items-center mt-2">
                   <h2 className="text-3xl text-primary  pb-2">{project?.authorName}</h2>
                   <Link className=" mt-1 " to={`/projectDetails/${project?._id}`}>
                     <button className="border border-primary  bg-gradient-to-tr from-primary/80 to-secondary/80 duration-500 ease-in px-2 text-sm h-10 text-white rounded-md">
                       More Details
                     </button>
                   </Link>
                   </div>
                  
                 </div>
               </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
