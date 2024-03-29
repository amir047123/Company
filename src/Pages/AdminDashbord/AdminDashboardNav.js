import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import AuthUser from "../../Hooks/authUser";
const AdminDashboardNav = () => {
  const {userInfo,logout}=AuthUser();
  const [issideNavOpen, setSidenavOpen] = useState(false);

  //show  notice
  const [openNotice, setOpenNotice] = useState(false);
  const [openNotice2, setOpenNotice2] = useState(false);
  //show  Complain
  const [openComplain, setOpenComplain] = useState(false);
  //show  frontend
  const [openFrontend, setOpenFrontend] = useState(false);

  //show blog
  const [openBlog, setOpenBlog] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [openPrescription, setOpenPrescription] = useState(false);
  const [openOffline, setOpenOffline] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    issideNavOpen === true ? setSidenavOpen(false) : setSidenavOpen(true);
  };

  let activeStyle = {
    backgroundColor: "#01AEEF",
  };
  return (
    <ul className="space-y-2 pt-8">
      <li>
        <NavLink
          to="dashboard"
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="bxs:dashboard" />
          </span>

          <span className="">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="allUsers"
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="fa6-solid:user-gear" />
          </span>

          <span className="">All Users</span>
        </NavLink>
      </li>

      <li>
        <span
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Seller</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openCategory === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openCategory === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="add-seller"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Seller</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="all-seller"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Seller</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <span
          onClick={() => setOpenInventory(!openInventory)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Inventory Control</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openInventory === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${
            openInventory === true ? "block" : "hidden"
          }`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="product-add-seller"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Product Add Seller</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="seller-product-history"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">Seller Product History</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <span
          onClick={() => setOpenPrescription(!openPrescription)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Manage Prescription</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openPrescription === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${
            openPrescription === true ? "block" : "hidden"
          }`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="pending-prescription"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Pending Prescription </span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="prescription-history"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">Prescription History</span>
            </NavLink>
          </li>
        </ul>
      </li>


      <li>
        <NavLink
          to={"updateShipping"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-[15px]">
            <Icon icon="fa-solid:chalkboard-teacher" />
          </span>

          <span className="">Update Shipping</span>
        </NavLink>
      </li>

      <li>
        <span
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Category</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openCategory === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openCategory === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="addCategory"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Category</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="allCategory"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Category</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* notice */}
      <li>
        <span
          onClick={() => setOpenNotice(!openNotice)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon className=" text-xl" icon="carbon:product" />
            </span>

            <span className="">Projects</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openNotice === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openNotice === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="add-project"
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Project</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="all-projects"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Project</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* coupon  */}

      <li>
        <span
          onClick={() => setOpenNotice2(!openNotice2)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon className=" text-xl" icon="mdi:coupon-outline" />
            </span>
            <span className="">Team</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openNotice2 === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openNotice2 === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="add-member"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Team</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="allCoupon"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Coupon</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Category  */}

      {/* Complain */}
      <li>
        <span
          onClick={() => setOpenComplain(!openComplain)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[18px]">
              <Icon icon="eos-icons:cronjob" />
            </span>

            <span className="">Career</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openComplain === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openComplain === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to={"add-job-post"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon className=" text-xl" icon="material-symbols:add" />

              <span className="ml-3">Add Job Post</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"all-job-table"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon className=" text-xl" icon="material-symbols:done-all" />

              <span className="ml-3">All Job</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allApplication"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">All Applications</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* order */}

      <li>
        <span
          onClick={() => setOpenOrder(!openOrder)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[18px]">
              <Icon icon="mdi:cart" />
            </span>

            <span className="">Review</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openBlog === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul className={`drop_down  ${openOrder === true ? "block" : "hidden"}`}>
          <li onClick={handleToggle}>
            <NavLink
              to={"AddReview"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon
                className=" text-xl"
                icon="fluent:branch-request-20-filled"
              />

              <span className="ml-3">Add Review</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allReviews"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon
                className=" text-xl"
                icon="fluent:branch-request-20-filled"
              />

              <span className="ml-3">All Review</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <span
          onClick={() => setOpenBlog(!openBlog)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Blogs</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openBlog === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul className={`drop_down  ${openBlog === true ? "block" : "hidden"}`}>
          <li onClick={handleToggle}>
            <NavLink
              to={"addBlog"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Add Blog</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allBlogs"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">All Blogs</span>
            </NavLink>
          </li>
        </ul>
      </li>
      {/* frontend */}
      <li>
        <span
          onClick={() => setOpenFrontend(!openFrontend)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Update Frontend</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openFrontend === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openFrontend === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to={"updateBanner"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Banner</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updateHowToOrder"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update How to order</span>
            </NavLink>
          </li>
         
          <li onClick={handleToggle}>
            <NavLink
              to={"updateFooter"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Footer</span>
            </NavLink>
          </li>
        </ul>
      </li>

      

      <li>
        <NavLink
          to={"request-medicine"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="charm:git-request" />
          </span>

          <span className="">Request Medicine</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"changePassword"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="ic:outline-change-circle" />
          </span>

          <span className="">Change Password</span>
        </NavLink>
      </li>
      <li
         onClick={()=>logout()}
        className="flex cursor-pointer items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
      >
        <span className="text-lg">
          <Icon icon="tabler:logout" />
        </span>

        <span className="">LogOut</span>
      </li>
    </ul>
  );
};

export default AdminDashboardNav;
