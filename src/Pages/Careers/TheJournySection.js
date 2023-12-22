import React from "react";
import icon1 from "../../Assets/Career/Icon 01.svg";
import icon2 from "../../Assets/Career/Icon 02.svg";
import icon3 from "../../Assets/Career/Icon 03.svg";
import icon4 from "../../Assets/Career/Icon 04.svg";

const data = [
  {
    title: "1. Apply",
    describe: "Update your resume before send us and apply for Thinky Storm team",
    img: icon1,
  },
  {
    title: "2. Let's talk",
    describe:
      " Tell us about your experience and expectations. We'll talk you through how we work and your responsibilities.",
    img: icon2,
  },
  {
    title: "3. Challenge yourself",
    describe:
      "We'll prepare 0 task for you to solve, so you know what to expect and we know how you perform.",
    img: icon3,
  },
  {
    title: "4. Welcome on board!",
    describe:
      " Now you can join the team and start your next great adventure with us!",
    img: icon4,
  },
];

const TheJournySection = () => {
  return (
    <div className=" w-10/12 mx-auto">
      <div className="my-28">
        <div>
          <h2 className="text-primary uppercase font-semibold text-center">
            the journey
          </h2>
          <hr className="border mt-2 bg-white w-[100px] mx-auto" />
        </div>
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-white font-semibold text-4xl my-5">
            How to start working with us?
          </h3>
          <p className="text-center">
            Only 4 simple steps separate you from joining us. We respect your
            time and effort, and are committed to keeping you updated on the
            application status at all times.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 ">
        {data.map((journey) => {
          return (
            <div className="p-1">
              <img src={journey.img} alt="service" className="w-12 h-20 mb-5" />
              <h3 className="font-semibold text-white">{journey.title}</h3>
              <p className="text-lightGreen my-2">{journey.describe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheJournySection;
