import React from "react";
import "./GradientButton.css";

const GradientButton = ({ text }) => {
  return (
    <button className="button">
      <span className="button__label">{text}</span>
    </button>
  );
};

export default GradientButton;
