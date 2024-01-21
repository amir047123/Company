import React from "react";
import { Link } from "react-router-dom";
import Divider from "../../Shared/Divider";

const ProjectsCard = ({ projects }) => {
  const { _id,  title, img, authorName } = projects;
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
      <div className=" mt-4">
        <div className="">
          <h4 className="text-xs text-lightGreen">{title}</h4>
        </div>
        <div className=" lg:flex justify-between items-center mt-2">
        <h2 className="text-3xl text-primary  pb-2">{authorName}</h2>
        <Link className=" mt-1 " to={`/projectDetails/${_id}`}>
          <button className="border border-primary  bg-gradient-to-tr from-primary/80 to-secondary/80 duration-500 ease-in px-2 text-sm h-10 text-white rounded-md">
            More Details
          </button>
        </Link>
        </div>
       
      </div>
    </div>
  );
};

export default ProjectsCard;
