import { Home, Login } from "@mui/icons-material";
import Services from "../Pages/Services/Services";
import Projects from "../Pages/Projects/Projects";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import Careers from "../Pages/Careers/Careers";
import HireUs from "../Pages/HireUs/HireUs";
import SendCv from "../Pages/Careers/SendCv/SendCv";
import JobDetails from "../Pages/Careers/OpportunitySection/JobDetails/JobDetails";
import SeeFullTeam from "../Components/AboutUs/Team/SeeFullTeam";
import ServicesDetails from "../Pages/Services/ServicesDetails/ServicesDetails";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import ProjectsDetails from "../Pages/Projects/ProjectsDetails";
import LoginPage from "../Pages/Login/Login";
import RegistrationPage from "../Pages/Login/RegistrationPage";
import DevelopmentLifeCycle from "../Pages/Development life cycle/DevelopmentLifeCycle";
import BuildTechnology from "../Pages/Development life cycle/BuildTechnology";
import Faq from "../Pages/FAQ/Faq";
import VerifyEmail from "../Shared/VerifyEmail";
import ResetPassword from "../Shared/ResetPassword/ResetPassword";
import InsertOtp from "../Shared/ResetPassword/InsertOtp";
import SetNewPassword from "../Shared/ResetPassword/SetNewPassword";


const PublicRoutes = [
  { path: "", Component: Home },
  { path: "home", Component: Home },
  { path: "services", Component: Services },
  { path: "services/:id", Component: ServicesDetails },
  { path: ":id/verify", Component: VerifyEmail },
  { path: "resetPassword", Component: ResetPassword },
  { path: "/insert-token", Component: InsertOtp },
  { path: "/setNewPassword", Component: SetNewPassword },

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
  { path: "login", Component: LoginPage },
  { path: "registration", Component: RegistrationPage },


  { path: "life-cycle", Component: DevelopmentLifeCycle },
  { path: "build-technology", Component: BuildTechnology },

  { path: "Faq", Component: Faq },

];

export default PublicRoutes;
