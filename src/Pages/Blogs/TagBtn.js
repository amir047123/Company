import React from "react";

const TagBtn = ({ text }) => {
  return (
    <button className="border border-primary rounded-md py-1 px-5 text-xs text-lightGreen hover:bg-primary hover:duration-300 transition-colors duration-300 hover:text-dark">
      #{text}
    </button>
  );
};

export default TagBtn;
