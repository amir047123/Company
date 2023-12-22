import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Assets/thinky-storm-icon.png";
import JobDetailsSocialIcon from "./JobDetailsSocialIcon";

const JobDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 rotate-180 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="lg:w-9/12 w-10/12 mx-auto mt-10 text-lightGreen md:grid md:grid-cols-12 lg:gap-10 gap-5">
        <div className="lg:col-span-8 md:col-span-7 lg:w-[90%]">
          <div className="max-w-xs">
            <div>
              <Link
                className="text-primary font-medium text-xs hover:underline"
                to="/careers"
              >
                <span className="mr-2 text-lg"> ← </span>Back to Career
              </Link>
            </div>
            <h2 className="text-4xl text-white font-semibold mt-5">
              Jonior UI/UX Designer
            </h2>
            <div className="flex gap-x-5 mt-2 items-center">
              <div className="flex items-center gap-2">
                <Icon
                  className="text-primary text-2xl"
                  icon="material-symbols:location-on-outline"
                />
                <p>Dhaka,Bangladesh</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  className="text-primary text-2xl"
                  icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                />
                <p>Full-Time</p>
              </div>
            </div>
          </div>

          <p className="my-5">
            Thinky Storm Looking for an Intern in the Ul/UX Design Department.
          </p>

          <p className="my-5">
            We are urgently looking for a Ul/UX Intern, The UI/UX Design Intern
            will help to design software and Gpplication for national brands in
            the software industry. We're looking to build a team of smart,
            passionate individuals. This is a unique opportunity to get hands-on
            experience with great brands. This is also an opportuni- ty to have
            your work go viral-our work often gets seen by millions of people.
          </p>
          <p>Establishment: Thinky Storm</p>
          <p>Vacancy: 03</p>
          <div className="my-5">
            <h4 className="my-5 text-white text-lg">Job Location</h4>
            <p className="my-5">
              Remote (Meaning You can do this job from anywhere) The Role:{" "}
            </p>
            1. Create Ul/ux for software and applications.
            <br />
            2. Design simple icons.
            <br />
            3. Craft email newsletters.
            <br />
            4. Animate simple GlFS.
            <br />
            5. Organize files in Google Drive.
            <br />
            6. You pick up new tools and software quickly.
            <br />
            7. You are clever and resourceful.
            <br />
            8. Likewise, you are self-motivated to learn new skills.
            <br />
            9. You are proactive and a self-starter who likes to keep busy.
            <br />
            10. You love the details and will take áction on improving any
            little thing. You see that needs it.
            <br />
            1. Furthermore, you love solving problems, no matter how big or
            small, and are a creative thinker.
            <br />
            12. You have a passion for design.
            <br />
            13. You take ownership of your work and always strive to improve.
            <h4 className="my-5 text-lg font-medium text-white">
              Requirements:
            </h4>
            1. A current or recent undergraduate student
            <br />
            2. Experience with Adobe XD, Figma, llustrator and Photoshop.
            <br />
            3. Formal education not required, but experience is necessary.
            <br />
            4. Knowledge of major social media platforms.
            <br />
          </div>

          <div className="my-5">
            <h4 className="my-5 text-lg font-medium text-white">
              Qualification
            </h4>
            1. You have an excellent portfolio to showcase your skills. <br />
            2. Excellent understanding of Adobe XD, Figma, llustrator and
            Photoshop.
            <br />
            3. Reasonable control over color theory.
            <br />
            4. Experience working with creative/web agencies and production
            houses will be a plus.
            <br />
            5. Team player with a startup spirit and able to fit in a
            fast-paced, diversified, and dynamic Working environment
            <br />
            Benefits of Joining as an Intern: . Job Recommendation letter arter
            three months
            <br />
            2. Various project work facilities
            <br />
            3.Opportunity to work with teammates
            <br />
            4. Opportunity to get certificate after three months
            <br />
            Permanent job opportunity based on performance during internship and
            com pletion Certificate after completing the internship. Job
            recommendation letter considering pertormance.
            <h4 className="my-5 text-lg font-medium text-white">
              Terms & Conditions:
            </h4>
            During the internship period, you cant leave the company During the
            intern time, it you wil, you are not being eligible to receive any
            comple- tion certificate and other paperwork. We can assign you
            tasks, and you have to complete the tasks within due time.
          </div>

          <div className="my-5">
            <h4 className="my-5 text-lg font-medium text-white">
              office hours
            </h4>
            9:00 AM- 4:00 PM (Sat - Thu) <br />
            off on Friday
            <br />
            Date Posted: 31/01/2023
            <br />
            Closing Date: 05/02/2023
            <br />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-4 md:col-span-5 w-full bg-primary/10 rounded-b-3xl pt-12 h-fit overflow-hidden">
          <img className="w-1/3 mx-auto" src={logo} alt="Thinky Strom logo" />
          <h3 className=" my-7 text-xl text-center text-white">Apply now!</h3>
          <Link to={"/send-cv"}>
            <button className="py-3 lg:px-10 md:px-6 rounded-lg bg-primary/10 block mx-auto text-xs my-5 hover:scale-105 duration-300">
              Apply For This Position
            </button>
          </Link>
          <div className="px-5 py-7 bg-primary/10 flex justify-between">
            <p className="text-xs">Share This offer</p>
            <JobDetailsSocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
