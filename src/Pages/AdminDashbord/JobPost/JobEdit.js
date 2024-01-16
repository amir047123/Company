import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobEdit = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming your API endpoint is '/api/jobs/:id'
        const response = await fetch(
          `http://localhost:5000/api/v1/jobPosts/getJobPostsById/${id}`
        );
        const data = await response.json();
        setJobData(data.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, [id]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  console.log(id, jobData);

  return (
    <div>
      <div class=" text-black ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          View Job{" "}
        </h1>
      </div>
      {/* Display your job data here */}
      {jobData && (
        <div>
          <h1 className=" text-black text-xl font-bold">{jobData?.jobTitle}</h1>

          {/* Add more fields as needed */}
          <div className="bg-gray-300 text-black p-2 mt-2 text-xl font-bold">
            <h1>Job Details</h1>
          </div>
          <p className=" text-black">{jobData?.jobType}</p>
          <p className=" text-black">{jobData?.jobLocation}</p>
          <div className="bg-gray-300 text-black p-2 mt-2 text-xl font-bold">
            <h1>Apply Last Date </h1>
          </div>
          <p className=" text-black">{jobData?.applyLastDate && formatDate(jobData.applyLastDate)}</p>

          <div className="bg-gray-300 text-xl font-bold text-black p-2 mt-2">
            <h1>Company</h1>
          </div>
          <p  className=" text-black">{jobData?.company}</p>
          <p className=" text-black">{jobData?.address}</p>
          <div className="bg-gray-300 text-black p-2 mt-2">
            <h1 className="text-xl font-bold">Job Description</h1>
          </div>
          <div className=" text-black" dangerouslySetInnerHTML={{ __html: jobData?.jobDescription }} />
        </div>
      )}
    </div>
  );
};

export default JobEdit;
