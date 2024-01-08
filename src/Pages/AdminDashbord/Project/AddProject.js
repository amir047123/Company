import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import moment from "moment/moment";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AddProject = () => {
  const editor = useRef(null);
  const date = moment().format("MMM Do YY");
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    description: "",
    technologies: [],
    tags: [], // New state for tags
  });
  const [category, setCategory] = useState("");
  const { id } = useParams();

  // load data
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/v1/project/getProjectsById/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data?.data));
    }
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/project/updateProjects/${formData?._id}`,
          { ...formData, img: img ? img : formData?.img, category }
        );
        toast?.success(`Project section Updated!`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/project/addProjects`,
          { ...formData, img: img ? img : formData?.img, date, category },
          `Project data posted`
        );
      }
    } catch (error) {
      toast?.success(error);
    }
  };

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImg);
  };

  // Add and remove technologies dynamically
  const handleAddTechnology = () => {
    setFormData((prevData) => ({
      ...prevData,
      technologies: [...prevData.technologies, ""],
    }));
  };

  const handleRemoveTechnology = (index) => {
    setFormData((prevData) => {
      const updatedTechnologies = [...prevData.technologies];
      updatedTechnologies.splice(index, 1);
      return {
        ...prevData,
        technologies: updatedTechnologies,
      };
    });
  };

  const handleChangeTechnology = (index, value) => {
    setFormData((prevData) => {
      const updatedTechnologies = [...prevData.technologies];
      updatedTechnologies[index] = value;
      return {
        ...prevData,
        technologies: updatedTechnologies,
      };
    });
  };

  // Add and remove tags dynamically
  const handleAddTag = () => {
    setFormData((prevData) => ({
      ...prevData,
      tags: [...prevData.tags, ""],
    }));
  };

  const handleRemoveTag = (index) => {
    setFormData((prevData) => {
      const updatedTags = [...prevData.tags];
      updatedTags.splice(index, 1);
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  const handleChangeTag = (index, value) => {
    setFormData((prevData) => {
      const updatedTags = [...prevData.tags];
      updatedTags[index] = value;
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };
  return (
    <div className=" text-black">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Project Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        <div className="flex gap-3 items-center">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Image
            </label>
            <input
              type="file"
              name="img"
              onChange={handleChangeUploadImage}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <img
            className="w-[70px] rounded-md shadow-lg"
            src={img ? img : formData?.img}
            alt="img"
          ></img>
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Author Name:
          </label>
          <input
            type="text"
            name="authorName"
            required
            onChange={handleChange}
            value={formData?.authorName}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData?.title}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Technologies:
          </label>
          {formData.technologies.map((technology, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={technology}
                onChange={(e) => handleChangeTechnology(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleRemoveTechnology(index)}
                className="ml-2 bg-red-500 text-black px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
              >
               Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTechnology}
            className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-600 focus:outline-none"
          >
            Add
          </button>
        </div>



        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Tags:
          </label>
          {formData.tags.map((tag, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={tag}
                onChange={(e) => handleChangeTag(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleRemoveTag(index)}
                className="ml-2 bg-red-500 text-black px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTag}
            className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-600 focus:outline-none"
          >
            Add
          </button>
        </div>


        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Category:
          </label>
          <select
            name="category"
            onChange={handleChangeCategory}
            value={category}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          >
            <option value="" disabled>
              Select a Project category
            </option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Customs Web Development">Customs Web</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Design">Design</option>

            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Description
          </label>
          <JoditEditor
            ref={editor}
            value={formData?.description}
            onChange={(newContent) => {
              setFormData({
                ...formData,
                description: newContent,
              });
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update Project !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
