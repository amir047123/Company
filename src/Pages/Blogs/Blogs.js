import React, { useEffect } from "react";
import BlogCard from "../../Components/Blogs/BlogCard/BlogCard";
import NewestBlog from "../../Components/Blogs/NewestBlog/NewestBlog";
import BlogData from "../../Data/BlogData";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative ">
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
        <NewestBlog />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mt-20">
          {BlogData.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
