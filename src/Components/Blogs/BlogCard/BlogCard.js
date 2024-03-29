import { Polyline } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Team/thinkystorm-amirfaysal-ceo.png";

const BlogCard = ({ blog }) => {
  const { category, img, authorName,  description, title, _id } = blog;
  return (
    <div className="">
      <div className="h-52 overflow-hidden rounded-3xl">
        <img
          className="w-full h-full rounded-3xl hover:scale-110 duration-300"
          src={img}
          alt="newest blog img"
        />
      </div>
      <div className="mt-7 mb-5 flex items-center justify-start gap-8">
        <div className="flex gap-2 items-center justify-start">
          <Polyline className="text-primary" />
          <p className="text-lightGreen">{category}</p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <img
            className="w-5 rounded-full bg-primary"
            src={logo}
            alt="author img"
          />
          <p className="text-lightGreen">{authorName}</p>
        </div>
      </div>
      <h2 className="text-lg my-3">{title.slice(0, 52)} .....</h2>
      <p className="text-lightGreen text-xs  text-justify mb-5" dangerouslySetInnerHTML={{ __html: description.slice(0, 300) + '...' }} />

      <Link
        to={`/blogDetails/${_id}`}
        className="px-10 py-2 border border-primary rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary hover:text-dark  duration-150 text-sm font-medium cursor-pointer"
      >
        See Details
      </Link>
    </div>
  );
};

export default BlogCard;
