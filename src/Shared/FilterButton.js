import React from "react";

const FilterButton = ({ text }) => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-primary transition-colors duration-500 hover:text-dark px-10 py-3 font- text-sm mt-2 block w-56 cursor-pointer">
      <span className="text-start">{text}</span>
    </div>
  );
};

export default FilterButton;
