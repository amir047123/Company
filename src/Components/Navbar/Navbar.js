import React from "react";
import MobNav from "./MobNav";
import WebNav from "./WebNav";

const Navbar = () => {
  return (
    <div className="pb-24" >
      <div className="lg:block hidden">
        <WebNav />
      </div>
      <div className="block lg:hidden">
        <MobNav />
      </div>
    </div>
  );
};

export default Navbar;
