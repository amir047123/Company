import { Home } from "@mui/icons-material";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import Careers from "../Pages/Careers/Careers";
import HireUs from "../Pages/HireUs/HireUs";
import SendCv from "../Pages/Careers/SendCv/SendCv";
import JobDetails from "../Pages/Careers/OpportunitySection/JobDetails/JobDetails";
import SeeFullTeam from "../Components/AboutUs/Team/SeeFullTeam";
import ServicesCard from "../Pages/Services/ServicesCard";
import ServicesDetails from "../Pages/Services/ServicesDetails/ServicesDetails";
import BlogCard from "../Components/Blogs/BlogCard/BlogCard";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import ProjectsDetails from "../Pages/Projects/ProjectsDetails";


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "home", Component: Home },
  { path: "services", Component: Services },
  { path: "services/:id", Component: ServicesDetails },

  { path: "projects", Component: Projects },
  { path: "aboutUs", Component: AboutUs },
  { path: "blogs", Component: Blogs },
  { path: "blogDetails/:id", Component: BlogDetails },

  { path: "careers", Component: Careers },
  { path: "hire", Component: HireUs },
  { path: "send-cv/:id", Component: SendCv },
  { path: "send-cv", Component: SendCv },

  { path: "jobDetails/:id", Component: JobDetails },
  { path: "fullTeam", Component: SeeFullTeam },
  { path: "projectDetails/:id", Component: ProjectsDetails },



];

export default PublicRoutes;
