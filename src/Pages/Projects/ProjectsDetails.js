import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectsPageData from "../../Data/ProjectsPageData";
import Subscribe from "../../Shared/Subscribe/Subscribe";
import ProjectsDetailsHero from "./ProjectsDetailsHero";
import ProjectsMain from "./ProjectsMain";

const ProjectsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = ProjectsPageData.filter((item) => item._id === id);
  const [projectData] = project;
  console.log(projectData);
  return (
    <div>
      <div className="lg:w-9/12 w-10/12 mx-auto md:my-20 ">
        <ProjectsDetailsHero projectData={projectData} />
        <ProjectsMain />
      </div>
      <Subscribe />
    </div>
  );
};

export default ProjectsDetails;
