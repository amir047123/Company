import React from "react";
import { Link } from "react-router-dom";
import Divider from "../../Shared/Divider";

const ProjectsCard = ({ projects }) => {
  const { _id, button, subName, img, name } = projects;
  return (
    <div
      key={_id}
      className="card_border_gradient rounded-xl md:w-[22rem] w-80 p-5"
    >
      <img
        className="h-64 w-full mb-4 rounded-xl"
        src={`${img}`}
        alt="card_image"
      />
      <Divider />
      <div className="flex flex-wrap justify-between items-center gap-2 mt-4">
        <div>
          <h4 className="text-xs text-lightGreen">{subName}</h4>
          <h2 className="text-3xl text-primary pt-1">{name}</h2>
        </div>
        <Link to={`/projects/${_id}`}>
          <button className="border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 duration-500 ease-in px-2 text-sm h-10 text-white rounded-md">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
