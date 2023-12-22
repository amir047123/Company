import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Navbar/logo.png";

const MobNav = () => {
  const [show, setShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = (side) => (
    <div
      className="w-60 h-full bg-dark"
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ul>
        <div className="font-medium w-10/12 mx-auto flex flex-col my-5 text-lightGreen">
          <Link to="/" className="mb-10">
            <li>
              <img className="w-32" src={logo} alt="Logo" />
            </li>
          </Link>
          <div className="flex flex-col h-full gap-4 text-lightGreen">
            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent justify-start flex p-2 text-primary"
                    : "justify-start flex p-2 hover:text-primary"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent justify-start flex p-2 text-primary"
                    : "justify-start flex p-2 hover:text-primary"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
                }
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent justify-start flex p-2 text-primary"
                    : "justify-start flex p-2 hover:text-primary"
                }
                to={"/aboutUs"}
              >
                About us
              </NavLink>
            </li>

            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent justify-start flex p-2 text-primary"
                    : "justify-start flex p-2 hover:text-primary"
                }
                to={"/blogs"}
              >
                Blog
              </NavLink>
            </li>
            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent justify-start flex p-2 text-primary"
                    : "justify-start flex p-2 hover:text-primary"
                }
                to={"/careers"}
              >
                Career
              </NavLink>
            </li>
            <Link to="/hire">
              <li>
                <button className="font-semibold bg-gradient-to-tr from-primary/60 to-secondary/60 w-full py-2 rounded-md drop-shadow-xl text-[16px]">
                  Hire us!
                </button>
              </li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
  return (
    <section
      className={
        show
          ? "fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50"
          : "nav_border_gradient fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50"
      }
    >
      <nav className="w-10/12 mx-auto flex flex-wrap justify-between items-center py-4">
        <Link to="/">
          <img className="w-48" src={logo} alt="Logo" />
        </Link>
        <div>
          <button className="" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </button>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
        </div>
      </nav>
    </section>
  );
};

export default MobNav;
