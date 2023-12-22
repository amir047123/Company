import React from "react";
import PositionsCard from "./PositionsCard";

const OpportunitySection = () => {
  return (
    <div>
      <div className="my-28">
        <div>
          <h2 className="text-primary uppercase font-semibold text-center">
            THE OPPORTUNITY
          </h2>
          <hr className="border mt-2 bg-white w-[100px] mx-auto" />
        </div>
        <div className="text-center max-w-[600px] mx-auto">
          <h3 className="text-white font-semibold text-4xl my-5">
            Open positions
          </h3>
          <p className="text-center">
            Have a look at who we are currently looking for.
          </p>
        </div>
      </div>
      <PositionsCard />
    </div>
  );
};

export default OpportunitySection;
