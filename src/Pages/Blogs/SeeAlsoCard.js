import React from "react";
import img from "../../Assets/blog-demo.jpg";

const SeeAlsoCard = ({ blog }) => {
  const { id, title, authorName } = blog;
  return (
    <div className="p-5 grid grid-cols-12 gap-5 justify-between items-center">
      <img
        className="col-span-4 w-full rounded-2xl"
        src={img}
        alt="this is img"
      />
      <div className="col-span-8">
        <h3 className="text-[16px] font-medium">{title.slice(0, 25)}...</h3>
        <p className="text-lightGreen text-xs">{authorName}</p>
      </div>
    </div>
  );
};

export default SeeAlsoCard;
