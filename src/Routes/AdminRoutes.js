import AdminIndex from "../Components/AdminDashbord/AdminIndex";
import AddJobPost from "../Pages/AdminDashbord/JobPost/AddJobPost";
import AllApplications from "../Pages/AdminDashbord/JobPost/AllApplications";
import AllJobTable from "../Pages/AdminDashbord/JobPost/AllJobTable";
import JobEdit from "../Pages/AdminDashbord/JobPost/JobEdit";
import ViewApplication from "../Pages/AdminDashbord/JobPost/ViewApplication";


const AdminRoutes = [
  { path: "dashboard", Component: AdminIndex },
  { path: "add-job-post", Component: AddJobPost },
  { path: "all-job-table", Component: AllJobTable },
  { path: "job-edit/:id", Component: JobEdit },

  { path: "allApplication", Component: AllApplications },
  { path: "viewApplication/:id", Component: ViewApplication },


];

export default AdminRoutes;
