import React, { useEffect } from "react";
import servicesPageData from "../../Data/ServicesPageData";
import Subscribe from "../../Shared/Subscribe/Subscribe";
import ServicesCard from "./ServicesCard";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative ">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[40%] opacity-25 sm:opacity-100 ml-auto mb-auto -mt-10"
        src="img/AboutUs/OurVision/round.png"
        alt="round bg img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[50%] opacity-25 sm:opacity-100 mr-auto mb-auto"
        src="img/AboutUs/OurVision/pattern.png"
        alt="round bg img"
      />
      <div className="w-10/12 mx-auto my-20">
        {/* Services content */}
        <div className="max-w-sm mx-auto md:my-14 mt-5 mb-14">
          <h4 className="text-medium text-primary text-left uppercase">
            Find The Perfect Solution for you
          </h4>
          <h2 className="text-3xl font-semibold text-left my-3">
            One stop studio for all your web needs
          </h2>
          <p className="text-left opacity-60 text-sm">
            We design and develop web apps, custom websites,landing
            pages,creatives,translation,and e-commerce-all under one roof.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mt-20">
          {servicesPageData?.map((service) => (
            <ServicesCard key={service?._id} service={service} />
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Services;
