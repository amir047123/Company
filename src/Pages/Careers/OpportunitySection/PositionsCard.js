import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon2 from "../../../Assets/Career/position/Ui-UX.png";
import "../Carrers.css";
import axios from "axios";

const PositionsCard = () => {
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    const fetchJobPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/jobPosts/getJobPosts"
        );
        setJobPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching job posts:", error.message);
      }
    };

    fetchJobPosts();
  }, []);

  console.log(jobPosts);

  return (
    <>
      {jobPosts?.map((jobs, index) => (
        <div
          key={jobs._id}
          className="position-card flex flex-col md:flex-row items-center gap-5 py-8 px-12 my-4 justify-around max-w-[800px] mx-auto"
        >
          <div className="flex gap-5 items-center">
            <div className="bg-dark rounded-full w-16 h-16 p-4">
              <img src={icon2} alt="position" className="w-12 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold  text-white">
                {jobs?.jobTitle}
              </h3>
              <div className="flex items-center text-lightGreen">
                {/* <Icon icon="material-symbols:location-on-outline" fontSize={12} /> */}
                <p className="text-xs my-2">{jobs?.address}</p>
              </div>
            </div>
          </div>
          <Link
            to={`/jobDetails/${jobs._id}`} // Include the job ID in the URL
            className="px-10 py-1 border border-primary rounded-md bg-none hover:bg-primary hover:text-dark duration-150"
          >
            See Details
          </Link>
        </div>
      ))}
    </>
  );
};

export default PositionsCard;
