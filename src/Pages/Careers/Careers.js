import React, { useEffect } from "react";
import JoinUsSection from "./JoinUsSection";
import TheJournySection from "./TheJournySection";
import "./Carrers.css";
import OpportunitySection from "./OpportunitySection/OpportunitySection";
import CareerLastSection from "./CareerLastSection";
const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-10 bgLeft ">
      <div className="bg-career">
        <JoinUsSection />
        <TheJournySection />
        <OpportunitySection />
        <CareerLastSection />
      </div>
    </div>
  );
};

export default Careers;
