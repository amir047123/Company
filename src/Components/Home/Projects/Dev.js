import React from "react";
import { data } from "../../../Data/ProjectsData";
import Divider from "../../../Shared/Divider";

const Dev = () => {
  return (
    <div>
      <div>
        {data.map((d) => {
          return (
            <div className="flex justify-center flex-wrap gap-5">
              {d.dev.map((da) => {
                return (
                  <div className="card_border_gradient rounded-xl md:w-[22rem] w-80 p-5">
                    <img
                      className="h-64 w-full mb-4 rounded-xl"
                      src={da.img}
                      alt="card_image"
                    />
                    <Divider />
                    <div className="flex flex-wrap justify-between items-center gap-2 mt-4">
                      <div>
                        <h4 className="text-xs text-lightGreen">
                          {da.subName}
                        </h4>
                        <h2 className="text-3xl text-primary pt-1">
                          {da.name}
                        </h2>
                      </div>
                      <button className="border border-primary bg-gradient-to-tr from-primary/80 to-secondary/80 duration-500 ease-in px-2 text-sm h-10 text-white rounded-md">
                        {da.button}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dev;
