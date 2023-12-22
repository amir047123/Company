import React from "react";
import { useState } from "react";
import Design from "./Design";
import Dev from "./Dev";
import UiUxDesign from "./UiUxDesign";
import "./Projects.css";

const HomeProjects = () => {
  const [onActiveMenu, setOnActiveMenu] = useState("design");
  return (
    <div className="mt-40">
      <div className="">
        <img
          src={"img/Projects/background.png"}
          className="w-[600px] md:left-[28%] sm:left-[0%] -mt-20 absolute"
          alt=""
        />
      </div>
      <div className="w-10/12 mx-auto relative">
        <div className="flex justify-center">
          <div className="">
            <h1 className="uppercase font-medium text-xl text-center text-primary leading-loose">
              What We're proud of
            </h1>
            <p className="h-1 w-40 mx-auto leading-loose bg-white"></p>
            <h1 className="font-semibold text-xl md:text-3xl mt-4 text-center">
              Our Projects
            </h1>
          </div>
        </div>
        <div className="my-20">
          <div className="sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden">
            <div className="flex flex-wrap gap-3">
              <div>
                <button
                  onClick={() => setOnActiveMenu("design")}
                  className={
                    onActiveMenu === "design"
                      ? "border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 px-10 py-2 text-white rounded-md"
                      : "border border-primary px-10 py-2 text-white rounded-md"
                  }
                >
                  Design
                </button>
              </div>
              <div>
                <button
                  onClick={() => setOnActiveMenu("ui-ux")}
                  className={
                    onActiveMenu === "ui-ux"
                      ? "border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 px-10 py-2 text-white rounded-md"
                      : "border border-primary px-10 py-2 text-white rounded-md"
                  }
                >
                  UI-UX
                </button>
              </div>
              <div>
                <button
                  onClick={() => setOnActiveMenu("dev")}
                  className={
                    onActiveMenu === "dev"
                      ? "border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 px-10 py-2 text-white rounded-md"
                      : "border border-primary px-10 py-2 text-white rounded-md"
                  }
                >
                  DEV
                </button>
              </div>
            </div>
            <div className="my-10">
              {onActiveMenu === "design" && <Design />}
              {onActiveMenu === "dev" && <Dev />}
              {onActiveMenu === "ui-ux" && <UiUxDesign />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
