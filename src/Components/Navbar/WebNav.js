import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Navbar/logo.png";
import AuthUser from "../../Hooks/authUser";

const WebNav = () => {
  const [show, setShow] = useState();
  const {userInfo}=AuthUser();
  console.log(userInfo?.role);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 60) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div
      style={{ maxWidth: "1440px", margin: "0 auto" }}
      className={
        show
          ? "fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50"
          : "nav_border_gradient fixed top-0 left-0 right-0 bg-dark/80 backdrop-blur-sm z-50"
      }
    >
      <nav className="w-10/12 mx-auto py-4">
        <ul className="flex justify-between items-center">
          <Link to="/">
            <li>
              <img className="w-44" src={logo} alt="Logo" />
            </li>
          </Link>
          <div className="flex gap-3 items-center text-lightGreen">
            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
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
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
                }
                to="services"
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
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
                }
                to={"aboutUs"}
              >
                About us
              </NavLink>
            </li>

            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
                }
                to={"blogs"}
              >
                Blog
              </NavLink>
            </li>

            <li className="font-medium text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary transparent px-3 py-2 text-primary"
                    : "px-3 py-2 hover:text-primary"
                }
                to={"careers"}
              >
                Career
              </NavLink>
            </li>
          </div>
          {
            userInfo?.role?<Link to={`/${userInfo?.role}Dashboard`}>
            <li>
              <button className="font-semibold bg-gradient-to-tr from-primary/80 to-secondary/80 px-4 py-2 rounded-md drop-shadow-xl text-[16px]">
                Dashboard
              </button>
            </li>
          </Link>:<Link to="hire">
            <li>
              <button className="font-semibold bg-gradient-to-tr from-primary/80 to-secondary/80 px-4 py-2 rounded-md drop-shadow-xl text-[16px]">
                Hire us!
              </button>
            </li>
          </Link>
          }
        </ul>
      </nav>
    </div>
  );
};

export default WebNav;
