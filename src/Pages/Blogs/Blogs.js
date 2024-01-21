import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../Components/Blogs/BlogCard/BlogCard";
import { Polyline } from "@mui/icons-material";
import logo from "../../Assets/Team/thinkystorm-amirfaysal-ceo.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [show, setShow] = useState("All Category");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/Blog/getBlogs"
        );
        setBlogs(response.data.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const departments = [...new Set(blogs.map((blog) => blog.category))];

  const handleDepartmentClick = (department) => {
    setShow(department);
  };

  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1] mt-[80%]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto mt-10">
        <div className="md:grid grid-cols-12 lg:gap-0 md:gap-10">
          <div className="lg:col-span-4 md:col-span-5">
            <div className="flex flex-col gap-2 text-start font-semibold">
              <button
                onClick={() => handleDepartmentClick("All Category")}
                className={`text-start focus:text-primary focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-10 py-3 font- text-sm  block w-56 cursor-pointer ${
                  show === "All Category" ? "text-primary font-extrabold" : ""
                }`}
              >
                All Category ({blogs.length})
              </button>
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => handleDepartmentClick(department)}
                  className={` text-start focus:text-primary focus:font-extrabold bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-10 py-3 font- text-sm  block w-56 cursor-pointer${
                    show === department ? "text-primary font-extrabold" : ""
                  }`}
                >
                  {department} (
                  {blogs.filter((blog) => blog.category === department).length})
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 md:md:col-span-7 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-10 md:mt-0">
            <div className="w-full">
              <p className="uppercase text-primary">Latest</p>
              {blogs.length > 0 && (
                <>
                  <div className="mt-7 mb-5 flex items-center justify-start gap-8">
                    <div className="flex gap-2 items-center justify-start">
                      <Polyline className="text-primary" />
                      <p className="text-lightGreen">{blogs[0].category}</p>
                    </div>
                    <div className="flex justify-end gap-2 items-center">
                      <img
                        className="w-5 rounded-full bg-primary"
                        src={logo}
                        alt="author img"
                      />
                      <p className="text-lightGreen">{blogs[0].authorName}</p>
                    </div>
                  </div>
                  <h2 className="text-lg my-3">{blogs[0].title}</h2>
                  <p className="text-lightGreen text-xs  mb-5 text-justify" dangerouslySetInnerHTML={{ __html: blogs[0].description.slice(0, 300) + '...' }} />

                 
      <Link
        to={`/blogDetails/${blogs[0]._id}`}
        className="px-10 py-2 border border-primary rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary hover:text-dark  duration-150 text-sm font-medium cursor-pointer"
      >
        See Details
      </Link> 
                </>
              )}
            </div>
            {blogs.length > 0 && (
              <img
                className="lg:w-[45%] md:w-full rounded-3xl"
                src={blogs[0].img}
                alt="newest blog img"
              />
            )}
          </div>
        </div>

        {show === "All Category" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mt-20">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {show !== "All Category" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mt-20">
            {blogs
              .filter((blog) => blog.category === show)
              .map((filteredBlog) => (
                <BlogCard key={filteredBlog.id} blog={filteredBlog} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
