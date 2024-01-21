import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../../../Assets/thinky-storm-icon.png";
import JobDetailsSocialIcon from "./JobDetailsSocialIcon";

const JobDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [job, setJob] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/jobPosts/getJobPostsById/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const data = await response.json();
        setJob(data.data); // Assuming the response data is a JSON object representing the job details
      } catch (error) {
        console.error("Error fetching job details:", error.message);
      }
    };

    fetchJobDetails();
  }, [id]);
  const shareUrl = window.location.href; // Get the current URL
  console.log("shareUrl:", shareUrl); // Log the shareUrl to the console

  return (
    <div className="relative">
      {/* <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      /> */}
      <div className="lg:w-9/12 w-10/12 mx-auto mt-10 text-lightGreen md:grid md:grid-cols-12 lg:gap-10 gap-5">
        <div className="lg:col-span-8 md:col-span-7 lg:w-[90%]">
          <div className="">
            <div>
              <Link
                className="text-primary font-medium text-xs hover:underline"
                to="/careers"
              >
                <span className="mr-2 text-lg"> ← </span>Back to Career
              </Link>
            </div>
            <h2 className="text-4xl text-white font-semibold mt-5">
              {job?.jobTitle}
            </h2>
            <div className="flex gap-x-5 mt-2 items-center">
              <div className="flex items-center gap-2">
                <Icon
                  className="text-primary text-2xl"
                  icon="material-symbols:location-on-outline"
                />
                <p>{job?.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  className="text-primary text-2xl"
                  icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                />
                <p>{job?.jobType}</p>
              </div>
            </div>
          </div>

          <p className="my-5 text-white">
            Thinky Storm Looking for an <span>{job?.jobTitle}</span>
          </p>

          <p
            className="my-5"
            dangerouslySetInnerHTML={{ __html: job?.jobDescription }}
          ></p>
        </div>
        <div className="col-span-4 lg:col-span-4 md:col-span-5 w-full bg-primary/10 rounded-b-3xl pt-12 h-fit overflow-hidden">
          <img className="w-1/3 mx-auto" src={logo} alt="Thinky Strom logo" />
          <h3 className=" my-7 text-xl text-center text-white">Apply now!</h3>
          <Link to={`/send-cv/${id}`}>
            <button className="py-3 lg:px-10 md:px-6 rounded-lg bg-primary/10 block mx-auto text-xs my-5 hover:scale-105 duration-300">
              Apply For This Position
            </button>
          </Link>

          <div className="px-5 py-7 bg-primary/10 flex justify-between">
            <p className="text-xs">Share This offer</p>
            <JobDetailsSocialIcon shareUrl={shareUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
