import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const AllJobTable = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/api/v1/jobPosts/getJobPosts"
      );
      setJobs(Array.isArray(result.data.data) ? result.data.data : []);
    } catch (error) {
      console.error("Error fetching job posts:", error.message);
      setJobs([]);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/jobPosts/deleteJobPosts/${jobId}`
      );
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      toast.success("Successfully Delete");
    } catch (error) {
      console.error("Error deleting job post:", error.message);
    }
  };

  return (
    <div className=" text-black">
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All Job
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential All Job for Nirog Health . Act now to secure the
          latest items
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-slate-700 uppercase border-b dark:border-gray-700 bg-slate-100  ">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Job Title</th>
                <th className="px-4 py-3">Job Type</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Last Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y ">
              {jobs.map((job, index) => (
                <tr key={job._id} className=" text-black">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{job.jobTitle}</td>
                  <td className="px-4 py-3">{job.jobType}</td>
                  <td className="px-4 py-3">{job.jobLocation}</td>
                <td className="px-4 py-3">{job.company}</td>

                  <td className="px-4 py-3">
                    {new Date(job.applyLastDate).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <Link to={`/adminDashboard/job-edit/${job._id}`}>
                        <button className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300">
                          <Icon className=" text-2xl text-secondary" icon="grommet-icons:view"></Icon>
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteJob(job._id)}
                        className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                      >
                        <Icon className=" text-2xl text-secondary" icon="fluent:delete-16-filled"></Icon>{" "}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllJobTable;
