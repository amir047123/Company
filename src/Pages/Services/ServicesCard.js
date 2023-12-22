import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, icon, description, title, name, btnText } = service;
  return (
    <div className="bg-primary/5 px-7 py-10 rounded-xl border-2 border-primary/50 relative">
      <img className="w-16" src={icon} alt="This is service icon" />
      <p className="text-primary uppercase text-xs my-5">{name}</p>
      <h4 className="text-2xl font-medium">{title}</h4>
      <p className="text-lightGreen text-sm mb-16">{description}</p>
      <Link to={`/services/${_id}`}>
        <button className="absolute w-10/12 bottom-5 flex gap-3 items-center bg-gradient-to-r from-primary/80 to-secondary/80 rounded-md px-5 py-3 font-medium mx-auto text-sm hover:scale-105 duration-300">
          <p className="mx-auto">{btnText}</p>
        </button>
      </Link>
    </div>
  );
};

export default ServicesCard;
