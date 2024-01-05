import React, { useState } from "react";
import JoditEditor from "jodit-react";

const AddJobPost = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobType: "",
    jobLocation: "",
    company: "",
    applyLastDate: "",
    address: "",
    jobDescription: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (value) => {
    setFormData({ ...formData, jobDescription: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/jobPosts/addJobPosts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add job post");
      }

      console.log("Job post added successfully");
      // Optionally, you can redirect the user to a different page or perform other actions.
    } catch (error) {
      console.error("Error adding job post:", error.message);
    }

    // Reset the form data
    setFormData({
      jobTitle: "",
      jobType: "",
      jobLocation: "",
      company: "",
      applyLastDate: "",
      address: "",
      jobDescription: "",
      department: "",
    });
  };

  return (
    <div className="text-black  ">
      <div class=" ">
        <h1 class="text-4xl font-bold     leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Job Post
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="jobTitle"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="jobType"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.jobType}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="jobLocation"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Job Location
          </label>
          <select
            id="jobLocation"
            name="jobLocation"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.jobLocation}
            onChange={handleChange}
            required
          >
            <option value="">Select Job Location</option>
            <option value="On site">On site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="applyLastDate"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Apply Last Date
          </label>
          <input
            type="date"
            id="applyLastDate"
            name="applyLastDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.applyLastDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="jobDescription"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Job Description
          </label>
          <JoditEditor
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleEditorChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white   bg-dark hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJobPost;
