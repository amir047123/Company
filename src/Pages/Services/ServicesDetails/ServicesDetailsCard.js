import React, { useState } from "react";

const ServicesDetailsCard = ({ serviceData }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadMore1, setIsReadMore1] = useState(true);
  const [isReadMore2, setIsReadMore2] = useState(true);
  const [isReadMore3, setIsReadMore3] = useState(true);
  const [isReadMore4, setIsReadMore4] = useState(true);
  const [isReadMore5, setIsReadMore5] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleReadMore1 = () => {
    setIsReadMore1(!isReadMore1);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };
  const toggleReadMore3 = () => {
    setIsReadMore3(!isReadMore3);
  };
  const toggleReadMore4 = () => {
    setIsReadMore4(!isReadMore4);
  };
  const toggleReadMore5 = () => {
    setIsReadMore5(!isReadMore5);
  };
  const {
    stepImg,
    stepTitle1,
    stepTitle2,
    stepTitle3,
    stepTitle4,
    stepTitle5,
    stepTitle6,
    stepDetail1,
    stepDetail2,
    stepDetail3,
    stepDetail4,
    stepDetail5,
    stepDetail6,
  } = serviceData;
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 md:grid-cols-3 lg:gap-20 md:gap-10 mt-16 lg:mt-28">
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle1}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore ? stepDetail1.slice(0, 150) : stepDetail1}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle2}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore1 ? stepDetail1.slice(0, 150) : stepDetail2}
          <span onClick={toggleReadMore1} className="read-or-hide">
            {isReadMore1 ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle3}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore2 ? stepDetail1.slice(0, 150) : stepDetail3}
          <span onClick={toggleReadMore2} className="read-or-hide">
            {isReadMore2 ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle4}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore3 ? stepDetail1.slice(0, 150) : stepDetail4}
          <span onClick={toggleReadMore3} className="read-or-hide">
            {isReadMore3 ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle5}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore4 ? stepDetail1.slice(0, 150) : stepDetail5}
          <span onClick={toggleReadMore4} className="read-or-hide">
            {isReadMore4 ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
      <div className="max-w-xs lg:pr-5">
        <img className="w-5" src={stepImg} alt="" />
        <h2 className="font-medium my-5 text-[17px]">{stepTitle6}</h2>
        <p className="text-start text-sm text-lightGreen">
          {isReadMore5 ? stepDetail1.slice(0, 150) : stepDetail6}
          <span onClick={toggleReadMore5} className="read-or-hide">
            {isReadMore5 ? (
              <button className="text-primary">...read more</button>
            ) : (
              <button className="text-primary">...show less</button>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ServicesDetailsCard;
