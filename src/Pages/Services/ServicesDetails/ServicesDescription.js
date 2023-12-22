import React from "react";

const ServicesDescription = ({ serviceData }) => {
  const {
    detailsTitle1,
    detailsDescription1,
    detailsTitle2,
    detailsDescription2,
  } = serviceData;
  return (
    <div className="flex md:flex-row flex-col justify-between lg:gap-20 gap-10">
      <div className="w-full">
        <h2 className="text-2xl font-medium mb-5">{detailsTitle1}</h2>
        <p className="text-sm text-lightGreen">{detailsDescription1}</p>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-medium mb-5">{detailsTitle2}</h2>
        <p className="text-sm text-lightGreen">{detailsDescription2}</p>
      </div>
    </div>
  );
};

export default ServicesDescription;
