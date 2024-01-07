import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import moment from "moment/moment";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import PostHooks from "../../../Hooks/PostHooks";
import { singleImageUpload } from "../../../Hooks/ImageUpload";

const AdminBlog = () => {
  const editor = useRef(null);
  const date = moment().format("MMM Do YY");
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    description: "",
  });
  const [category, setCategory] = useState(""); // New state for category
  const { id } = useParams();

  //   load data
  useEffect(() => {
    fetch(`https://server.niroghealthplus.com/api/v1/blog/getBlogsById/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data?.data));
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/blog/updateBlogs/${formData?._id}`,
          { ...formData, img: img ? img : formData?.img, category }
        );
        toast?.success(`Blog section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/Blog/addBlogs`,
          { ...formData, img: img ? img : formData?.img, date, category },
          `Blog data posted`
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

  return (
    <div className=" text-black">
      <div className="w-fit  text-xl font-semibold mb-5">
        <h1>Update Blog Section</h1>
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
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Category:
          </label>
          <select
            name="category"
            onChange={handleChangeCategory}
            value={category}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          >
            <option value="" disabled>
              Select a Blog category
            </option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
            <option value="Programming">Programming</option>
            <option value="React Js">React JS</option>
            <option value="Next Js">Next JS</option>
            <option value="Node Js">Node JS</option>
            <option value="Customs Web Development">Customs Web Development</option>
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
            Update Blog !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlog;
