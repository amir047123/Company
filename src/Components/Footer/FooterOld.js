import React from 'react';
import { Link } from "react-router-dom";
import Divider from "../../Shared/Divider";
const FooterOld = () => {
    return (
        <div className="bg-gradient-to-t from-[#040C17] to-[#051D27] md:w-9/12 mx-auto rounded-3xl py-16 mt-20">
        <div>
          <img className="w-52 mx-auto" src="./img/Navbar/logo.png" alt="" />
        </div>
        <div className="flex flex-wrap md:gap-10 gap-5 justify-center py-10 p-1">
          <Link to={"/"}>Home</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/careers"}>Careers</Link>
        </div>
        <Divider />
        <div className="flex flex-wrap gap-5 items-center justify-between pt-10 p-2">
          <div className="flex flex-wrap gap-5">
            <input
              className="p-2 outline-none input_border_gradient rounded"
              placeholder="Enter Your email"
              autoComplete="off"
              type="email"
              name="email"
              id="email"
            />
            <button className="bg-gradient-to-tr from-primary to-secondary rounded px-5  py-2 text-dark font-semibold">
              Subscribe
            </button>
          </div>
          <div>
            <p className="text-xs font-[300]">
              © {new Date().getFullYear()} Thinky Storm All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FooterOld;
