import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="card_border_gradient rounded-xl max-w-sm p-5">
      <div className="scroll-container h-32">
        <div className="scroll-content">
          <img
            className="h-full w-auto mb-4 rounded-xl"
            src={`${project?.img}`}
            alt="card_image"
          />
        </div>
      </div>

      <Divider />
      <div className=" mt-4">
        <div className="flex justify-between items-center">
          <h2 className=" text-xs text-lightGreen">{project?.authorName}</h2>
          <p className=" text-xs text-lightGreen">12 jan 2024</p>
        </div>

        <h4 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text my-2">
          {project?.title}
        </h4>

        <Link className="" to={`/projectDetails/${project?._id}`}>
          <button className="border border-primary  bg-gradient-to-tr from-primary/80 to-secondary/80 duration-500 ease-in px-2 text-sm h-10 text-white rounded-md">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
