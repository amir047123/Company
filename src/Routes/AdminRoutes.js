import AdminIndex from "../Components/AdminDashbord/AdminIndex";
import AdminBlog from "../Pages/AdminDashbord/Blogs/AdminBlog";
import AddJobPost from "../Pages/AdminDashbord/JobPost/AddJobPost";
import AllApplications from "../Pages/AdminDashbord/JobPost/AllApplications";
import AllJobTable from "../Pages/AdminDashbord/JobPost/AllJobTable";
import JobEdit from "../Pages/AdminDashbord/JobPost/JobEdit";
import ViewApplication from "../Pages/AdminDashbord/JobPost/ViewApplication";
import AddProject from "../Pages/AdminDashbord/Project/AddProject";
import AllProjects from "../Pages/AdminDashbord/Project/AllProjects";
import AddTeamMember from "../Pages/AdminDashbord/Team/AddTeamMember";


const AdminRoutes = [
  { path: "dashboard", Component: AdminIndex },
  { path: "add-job-post", Component: AddJobPost },
  { path: "all-job-table", Component: AllJobTable },
  { path: "job-edit/:id", Component: JobEdit },

  { path: "allApplication", Component: AllApplications },
  { path: "viewApplication/:id", Component: ViewApplication },

  { path: "AddBlog", Component: AdminBlog },
  { path: "add-member", Component: AddTeamMember },
  { path: "add-project", Component: AddProject },
  { path: "updateProject/:id", Component: AddProject },

  { path: "all-projects", Component: AllProjects },


];

export default AdminRoutes;
