import AdminIndex from "../Components/AdminDashbord/AdminIndex";
import AddJobPost from "../Pages/AdminDashbord/JobPost/AddJobPost";
import AllJobTable from "../Pages/AdminDashbord/JobPost/AllJobTable";


const AdminRoutes = [
  { path: "dashboard", Component: AdminIndex },
  { path: "add-job-post", Component: AddJobPost },
  { path: "all-job-table", Component: AllJobTable },



];

export default AdminRoutes;
