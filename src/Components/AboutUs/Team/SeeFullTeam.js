import React, { useEffect, useState } from "react";
import FullTeamData from "./FullTeamData";
import TeamMember from "./TeamMember";

const SeeFullTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [team, setTeam] = useState([]);
  useEffect(() => {
    setTeam(FullTeamData);
  }, []);
  return (
    <div className="relative">
      <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover opacity-25 sm:opacity-100 z-[-1]"
        src="./img/AboutUs/Team/team-bg.png"
        alt="round bg img"
      />
      <div className="py-10 lg:w-9/12 w-10/12 mx-auto">
        {/* team title */}
        <div className="max-w-sm mx-auto">
          <h4 className="uppercase text-medium text-center text-primary">
            We are virtual team
          </h4>
          <div className="h-[3px] w-[100px] bg-white mx-auto my-3"></div>
          <h2 className="text-3xl font-medium text-center">
            Meet With Our Full Team
          </h2>
        </div>
        {/* team member */}
        <div className="grid lg:grid-cols-4 align-middle md:grid-cols-3 grid-cols-1 gap-x-10 md:gap-y-32 gap-y-48 md:mt-32 mt-40">
          {team.length > 0 &&
            team.map((member) => {
              const { _id, name, position, image } = member;
              return (
                <TeamMember
                  key={_id}
                  name={name}
                  position={position}
                  image={image}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SeeFullTeam;
