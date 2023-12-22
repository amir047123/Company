import SeeFullTeam from "../Components/AboutUs/Team/SeeFullTeam";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import Careers from "../Pages/Careers/Careers";
import JobDetails from "../Pages/Careers/OpportunitySection/JobDetails/JobDetails";
import SendCv from "../Pages/Careers/SendCv/SendCv";
import HireUs from "../Pages/HireUs/HireUs";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";

export const routes = [
  { path: "/", Component: Home },
  { path: "/services", Component: Services },
  { path: "/projects", Component: Projects },
  { path: "/aboutUs", Component: AboutUs },
  { path: "/blogs", Component: Blogs },
  { path: "/careers", Component: Careers },
  { path: "/hire", Component: HireUs },
  { path: "/send-cv", Component: SendCv },
  { path: "/jobDetails", Component: JobDetails },
  { path: "/fullTeam", Component: SeeFullTeam },
];
