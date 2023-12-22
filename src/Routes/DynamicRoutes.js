import BlogDetails from "../Pages/Blogs/BlogDetails";
import ProjectsDetails from "../Pages/Projects/ProjectsDetails";
import ServicesDetails from "../Pages/Services/ServicesDetails/ServicesDetails";

export const DynamicRoutes = [
  { path: "/blogDetails/:id", Component: BlogDetails },
  { path: "/services/:id", Component: ServicesDetails },
  { path: "/projects/:id", Component: ProjectsDetails },
];
