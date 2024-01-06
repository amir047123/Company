import React, { useEffect, useState } from "react";
import ContactInfo from "../../../Shared/ContactInfo";
import SendCvForm from "./SendCvForm";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { useParams } from "react-router-dom";

const SendCv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const {id }= useParams()
console.log(id)
 
  return (
    <div className="background relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-10 md:gap-x-5">
        <div className="col-span-5 bg-secondary/5 lg:p-16 p-10 rounded-r-xl">
          <ContactInfo />
        </div>
        <div className="col-span-7 lg:py-16 lg:px-24 p-10">
          <SendCvForm  id={id} ></SendCvForm>
        </div>
      </div>
    </div>
  );
};

export default SendCv;
