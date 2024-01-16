import { Routes, Route } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import Loading from "./Shared/Loading/Loading";
import AdminDashboard from "./Pages/AdminDashbord/AdminDashboard";
import AdminIndex from "./Components/AdminDashbord/AdminIndex";
import AdminRoutes from "./Routes/AdminRoutes";
import Notfound from "./Shared/Notfound";
import Home from "./Pages/Home/Home";
import PublicRoutes from "./Routes/PublicRoutes";
import Main from "./Pages/Main/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // Top Progress bar edit
  TopBarProgress.config({
    barColors: {
      0: "#12FFFE",
      0.5: "#00F3A1",
      1: "#00F3A1",
    },
    shadowBlur: 5,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            {PublicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* Admin routes */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route index element={<AdminIndex />} />
            {AdminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
        
      )}
      
            <ToastContainer />

    </div>
  );
}

export default App;
