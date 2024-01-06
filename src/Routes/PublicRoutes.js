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


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "home", Component: Home },
  { path: "services", Component: Services },
  { path: "projects", Component: Projects },
  { path: "aboutUs", Component: AboutUs },
  { path: "blogs", Component: Blogs },
  { path: "careers", Component: Careers },
  { path: "hire", Component: HireUs },
  { path: "send-cv/:id", Component: SendCv },
  { path: "jobDetails/:id", Component: JobDetails },
  { path: "fullTeam", Component: SeeFullTeam },



];

export default PublicRoutes;
