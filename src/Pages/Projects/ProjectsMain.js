import React from "react";
import man from "../../Assets/naimur.png";
import TagBtn from "../Blogs/TagBtn";
import logo from "../../Assets/Team/thinkystorm-amirfaysal-ceo.png"

const ProjectsMain = ({ projectData }) => {
  const { description, technologies, tags } = projectData;
  console.log(technologies);
  return (
    <div className="lg:flex full gap-10 justify-between my-10 md:my-20">
      <div>
        <h1 className="text-xl text-start font-medium">Descriptions</h1>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-lightGreen pt-10 text-justify"
        ></p>
      </div>
      <div>
        <h2 className="text-lg font-medium">Tags:</h2>
        <div className="flex w-96 flex-wrap gap-2 items-center mt-5 md:mt-10">
          {tags?.map((tags, index) => (
            <TagBtn key={index} text={tags} />
          ))}
        </div>
        <div className="md:pt-20 pt-10">
          <h2 className="text-lg font-medium">using technology:</h2>
          <div className="flex w-96 flex-wrap gap-2 items-center mt-5 md:mt-10">
            {technologies?.map((technology, index) => (
              <TagBtn key={index} text={technology} />
            ))}
          </div>
        </div>
        <div className="md:pt-20 pt-10">
          <h2 className="text-lg font-medium">Author:</h2>
          <div className="flex w-96 gap-2 items-center mt-5 md:mt-10">
            <img
              className="w-28 rounded-2xl bg-white/80 drop-shadow-xl"
              src={logo}
              alt=""
            />
            <h1>
              <span className="uppercase text-primary">about: </span>
              <span className="text-lightGreen text-sm text-justify">
                I'm Passionate about coding, However I am also creative
              System designer. I have always enjoyed coding and doing creative
                Works.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
