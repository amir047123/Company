import React from "react";

import img from "../../../Assets/OurVision/img1.jpg";
import img1 from "../../../Assets/OurVision/img2.jpg";
import img2 from "../../../Assets/OurVision/img3.jpg";
import img3 from "../../../Assets/OurVision/img4.jpg";
import img4 from "../../../Assets/OurVision/img5.jpg";

const OurVision = () => {
  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[40%] opacity-25 sm:opacity-100 ml-auto mb-auto -mt-10"
        src="img/AboutUs/OurVision/round.png"
        alt="round bg img"
      />
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-[50%] opacity-25 sm:opacity-100 mr-auto mb-auto"
        src="img/AboutUs/OurVision/pattern.png"
        alt="round bg img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto">
        {/* about us content */}
        <div className="max-w-sm mx-auto md:my-14 mt-5 mb-14">
          <h4 className="text-medium text-primary text-left uppercase">
            Our Vision
          </h4>
          <h2 className="text-3xl font-semibold text-left my-3">
            Getting the most out of your web presence
          </h2>
          <p className="text-left opacity-60 text-sm">
            We're a unique combination of a software house and creating custom
            web solutions custom-fit to support the growth of modern startups
          </p>
        </div>
        {/* our image card */}

        {/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="w-full block group rounded-lg lg:h-60 overflow-hidden relative ">
            <img src={img} alt="" className="w-full h-full absolute inset-0" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-20 transition duration-300 ease-in-out bg-primary"></div>
            <div class="relative h-full w-full">
              <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-[#051d2747] to-dark h-full w-full p-8">
                <div className="w-full h-fit mt-[50%]">
                  <p className="text-lg font-medium text-center">
                    Office space of Thinky Storm{" "}
                    <span className="text-primary">Chairman</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full block group rounded-lg lg:h-60 overflow-hidden relative ">
            <img src={img1} alt="" className="w-full h-full absolute inset-0" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-20 transition duration-300 ease-in-out bg-primary"></div>
            <div class="relative h-full w-full">
              <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-[#051d2747] to-dark h-full w-full p-8">
                <div className="w-full h-fit mt-[50%]">
                  <p className="text-lg font-medium text-center">
                    Thinky Storm development department{" "}
                    <span className="text-primary"> Workspace</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full block group rounded-lg h-full md:row-span-2 overflow-hidden relative border-2 border-primary">
            <img src={img2} alt="" className="w-full h-full absolute inset-0" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-20 transition duration-300 ease-in-out bg-primary"></div>
            <div class="relative h-full w-full">
              <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-[#051d2747] to-dark h-full w-full p-8">
                <div className="w-full h-fit mt-[100%]">
                  <p className="text-lg font-medium text-center">
                    Thinky Storm waiting space for our honorable{" "}
                    <span className="text-primary"> guests</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full block group rounded-lg lg:h-60 overflow-hidden relative ">
            <img src={img3} alt="" className="w-full h-full absolute inset-0" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-20 transition duration-300 ease-in-out bg-primary"></div>
            <div class="relative h-full w-full">
              <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-[#051d2747] to-dark h-full w-full p-8">
                <div className="w-full h-fit mt-[50%]">
                  <p className="text-lg font-medium text-center">
                    Office space of Thinky Storm{" "}
                    <span className="text-primary">CEO Room</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full block group rounded-lg lg:h-60 overflow-hidden relative ">
            <img src={img4} alt="" className="w-full h-full absolute inset-0" />
            <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-20 transition duration-300 ease-in-out bg-primary"></div>
            <div class="relative h-full w-full">
              <div class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-b from-[#051d2747] to-dark h-full w-full p-8">
                <div className="w-full h-fit mt-[50%]">
                  <p className="text-lg font-medium text-center">
                    Thinky Storm Conference/meeting{" "}
                    <span className="text-primary">room.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurVision;
