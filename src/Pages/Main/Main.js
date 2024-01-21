import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Bot from "../Chat/Bot";

const Main = () => {
  return (
    <div>
      <Navbar  />
      <Outlet />
      <Footer />{" "}
      <Bot/>
    </div>
  );
};

export default Main;
