import React, { useEffect } from "react";
import bg from "../../../Assets/team-bg.png";
import { useParams } from "react-router-dom";
import roundImg from "../../../Assets/round.png";
import pattern from "../../../Assets/pattern.png";
import ServiceDetailsHero from "./ServiceDetailsHero";
import BusinessPartner from "./BusinessPartner";
import ServicesDescription from "./ServicesDescription";
import ServicesDetailsCard from "./ServicesDetailsCard";
import OurProjectImage from "./OurProjectImage";
import ServicesReview from "./ServicesReview/ServicesReview";
import WhyUs from "./WhyUs";
import Subscribe from "../../../Shared/Subscribe/Subscribe";
import servicesPageData from "../../../Data/ServicesPageData";
const ServicesDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const service = servicesPageData.filter((item) => item._id === id);
  const [serviceData] = service;
  console.log(serviceData);
  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[40%] opacity-25 sm:opacity-100 ml-auto mb-auto -mt-10 z-[-1]"
        src={roundImg}
        alt="round bg img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[50%] opacity-25 sm:opacity-100 mr-auto mb-auto z-[-1]"
        src={pattern}
        alt="round bg img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1] mt-[80%]"
        src={bg}
        alt="round bg img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto md:mt-10 ">
        <ServiceDetailsHero serviceData={serviceData} />
        <BusinessPartner />
        <ServicesDescription serviceData={serviceData} />
        <ServicesDetailsCard serviceData={serviceData} />
        {/* <OurProjectImage /> */}
        <ServicesReview />
        <WhyUs />
      </div>
      <Subscribe />
    </div>
  );
};

export default ServicesDetails;
