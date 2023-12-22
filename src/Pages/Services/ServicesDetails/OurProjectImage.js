import React from "react";
import img1 from "../../../Assets/Services/Img1.jpg";
import img2 from "../../../Assets/Services/Img2.jpg";
import img3 from "../../../Assets/Services/Img3.jpg";

const OurProjectImage = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:my-32 my-20">
      <img className="rounded-2xl" src={img1} alt="demo img 1" />
      <img className="rounded-2xl" src={img2} alt="demo img 2" />
      <img className="rounded-2xl" src={img3} alt="demo img 3" />
    </div>
  );
};

export default OurProjectImage;
