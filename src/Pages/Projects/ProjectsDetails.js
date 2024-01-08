import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectsPageData from "../../Data/ProjectsPageData";
import Subscribe from "../../Shared/Subscribe/Subscribe";
import ProjectsDetailsHero from "./ProjectsDetailsHero";
import ProjectsMain from "./ProjectsMain";

const ProjectsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const { id } = useParams();

  //   load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/project/getProjectsById/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, [id]);


  return (
    <div>
      <div className="lg:w-9/12 w-10/12 mx-auto md:my-20 ">
        <ProjectsDetailsHero projectData={data} />
        <ProjectsMain projectData={data} />
      </div>
      <Subscribe />
    </div>
  );
};

export default ProjectsDetails;
