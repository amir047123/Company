import { Route } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Navbar from "./Components/Navbar/Navbar";
import CustomRoutes from "./Routes/CustomRoutes";
import { routes } from "./Routes/routes";
// import Cursor from "./Shared/Cursor/Cursor";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Footer from "./Components/Footer/Footer";
import { DynamicRoutes } from "./Routes/DynamicRoutes";
import { useEffect, useState } from "react";
import Loading from "./Shared/Loading/Loading";

function App() {
  //Top Progress bar edit
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
        <div>
          <div className="pb-24">
            <Navbar />
          </div>
          <div>
            <CustomRoutes>
              {routes.map(({ path, Component }, index) => (
                <Route key={index + 1} path={path} element={<Component />} />
              ))}
            </CustomRoutes>
            {/* Dynamic routes */}
            <CustomRoutes>
              {DynamicRoutes.map(({ path, Component }, index) => (
                <Route key={index + 1} path={path} element={<Component />} />
              ))}
            </CustomRoutes>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
