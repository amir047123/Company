import { Icon } from "@iconify/react";
import React from "react";

const ProjectsDetailsHero = ({ projectData }) => {
  const { img } = projectData;
  console.log("projects", img);
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <h1 className="md:text-4xl text-2xl font-medium">Projects Details</h1>
        <button className="text-primary text-sm md:text-[16px] font-medium flex gap-2 items-center">
          <Icon
            className="md:w-6 md:h-6 h-4 w-4"
            icon="ph:link-simple-bold"
            rotate={2}
          />
          <p>Copy Link</p>
        </button>
      </div>
      <div className="md:h-96 overflow-hidden w-full rounded-2xl">
        <img className="mt-10 w-full h-full rounded-2xl" src={img} alt="this is img" />
      </div>
    </div>
  );
};

export default ProjectsDetailsHero;
