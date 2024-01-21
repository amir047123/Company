import React, { useEffect, useState } from "react";
import BlogDetailsContent from "./BlogDetailsContent";
import bgImg from "../../Assets/team-bg.png";
import BlogDetailsOurExperts from "./BlogDetailsOurExperts";
import SeeAlsoCard from "./SeeAlsoCard";
import TagBtn from "./TagBtn";
import BlogCard from "../../Components/Blogs/BlogCard/BlogCard";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const [blog,setBlogs]=useState([])
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/Blog/getBlogsById/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data?.data));
  }, [id]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog/getBlogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setAllData(data?.data);
        }
      });
  }, [id]);
  
  console.log(blog)
  return (
    <div className="relative ">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-360 z-[-1]"
        src={bgImg}
        alt="blog details page bg-img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1] mt-[80%]"
        src={bgImg}
        alt="blog details page bg-img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto md:mt-10 ">
        <div className="grid lg:grid-cols-12 z-10 gap-10">
          <div className="lg:col-span-8">
            <BlogDetailsContent blog={blog} />
          </div>
          <div className="lg:col-span-4 mx-auto">
            <BlogDetailsOurExperts />
            {/* see also */}
            <h2 className="my-5 text-lg">See Also:</h2>
            {allData?.slice(0, 3)?.map((blog) => (
              <SeeAlsoCard key={blog?._id} blog={blog} />
            ))}

            {/* tags */}
            {/* <h2 className="my-5 text-lg font-medium">Tags:</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <TagBtn text={"Design"} />
              <TagBtn text={"Ui Design"} />
              <TagBtn text={"Development"} />
              <TagBtn text={"Programming"} />
            </div> */}
          </div>
        </div>
        {/* Your may also like those post */}
        <h2 className="text-2xl font-medium mt-20 ">
          Your may also like these post
        </h2>
        <div className="h-[2px] w-full bg-primary my-3 mb-10"></div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20 mb-20">
          {allData?.slice(0, 3).map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
