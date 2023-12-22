import React from "react";
import { Link } from "react-router-dom";
import "./Carrers.css";

const CareerLastSection = () => {
  return (
    <div className="max-w-[800px] max-h-fit mx-auto block md:flex my-28 items-center">
      <div className="md:w-2/3 w-full pl-16 pr-8 py-8 position-card">
        <h3 className="text-white text-2xl">Nothing for you here?</h3>
        <p className="text-lightGreen my-3">
          Don't worry! If you can’t find a desired position for you now, send us
          your application onywoy. Let’s be in touch.
        </p>
        <Link to="/send-cv">
          <button className="px-10 py-1 border border-primary rounded-md bg-none hover:bg-primary hover:text-dark  duration-150">
            Send you CV
          </button>
        </Link>
      </div>
      <div className="h-[290px] overflow-hidden drop-shadow-2xl w-full md:w-1/2 cv-right-section rounded-lg m-0 md:-ml-1 z-10"></div>
    </div>
  );
};

export default CareerLastSection;
