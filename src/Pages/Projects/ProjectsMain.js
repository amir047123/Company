import React from "react";
import man from "../../Assets/naimur.png";
import TagBtn from "../Blogs/TagBtn";

const ProjectsMain = () => {
  return (
    <div className="lg:flex full gap-10 justify-between my-10 md:my-20">
      <div>
        <h1 className="text-xl text-start font-medium">Descriptions</h1>
        <p className="text-lightGreen pt-10">
          Design is the job whose aim is to achieve the goal and usually, it is
          done by multiple means, techniques, and tricks. Anyway, design is a
          professional activity that has to solve a problem. From a design
          perspective, even purely artistic elements have to perform some tasks
          and play their role in achieving the goal. In the vast majority of
          cases, we design not for ourselves or our clients: we design for users
          who have pains, needs, and wishes and our task is to set the goals and
          find effective solutions. It’s like math: you get the problem – you
          find the formula and way to solve it – you work over the solution –
          you get the result. To get the result you need to set the goal at the
          very first step of a design process. Plenty of websites and mobile
          applications are created with a sort of business idea or scheme behind
          them. That makes them goal-oriented and customer-oriented. For
          designers it can be both help and challenge: they get a clear goal,
          <br />
          <br />
          <br />
          which means they know what result is expected, but with the goal, they
          also get a set of limitations and restrictions to consider. Designing
          for business, it is necessary to understand not only user experience
          and behavior, the psychology of interaction and decision making, but
          also business goals and processes which influence the general result.
          It is important to understand the business language to have quick
          contact with customers, who sometimes don’t know much about design,
          but definitely, know what are their business goals and expectations.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-medium">Tags:</h2>
        <div className="flex w-96 flex-wrap gap-2 items-center mt-5 md:mt-10">
          <TagBtn text={"design"} />
          <TagBtn text={"ui design"} />
          <TagBtn text={"development"} />
          <TagBtn text={"prototyping"} />
        </div>
        <div className="md:pt-20 pt-10">
          <h2 className="text-lg font-medium">using technology:</h2>
          <div className="flex w-96 flex-wrap gap-2 items-center mt-5 md:mt-10">
            <TagBtn text={"React"} />
            <TagBtn text={"javascript"} />
            <TagBtn text={"tailwind css"} />
            <TagBtn text={"Node js"} />
            <TagBtn text={"Mongodb"} />
          </div>
        </div>
        <div className="md:pt-20 pt-10">
          <h2 className="text-lg font-medium">Author:</h2>
          <div className="flex w-96 gap-2 items-center mt-5 md:mt-10">
            <img
              className="w-28 rounded-2xl bg-white/80 drop-shadow-xl"
              src={man}
              alt=""
            />
            <h1>
              <span className="uppercase text-primary">about: </span>
              <span className="text-lightGreen text-sm">
                I'm Passionate about coding, However I am also creative
                designer. I have always enjoyed coding and doing creative
                designs.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
