import React from "react";

const ProjectsDetailsHero = ({ projectData }) => {
  const { img } = projectData;
  console.log("projects", img);
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <h1 className="md:text-4xl text-2xl font-medium">{projectData?.title}</h1>
      </div>
      
      <div className="scroll-container md:h-96 rounded-2xl">
      <div className=" scroll-content ">
        <img className="mt-10 w-full lg:w-auto lg:h-auto h-full rounded-2xl" src={img} alt="this is img" />
      </div>
      </div>
      
    </div>
  );
};

export default ProjectsDetailsHero;
