import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import Card from "./Card";
import directionData from './DirectionData';

const Directions = () => {
  const [directions, setDirections] = useState([])

  useEffect(() => {
    setDirections(directionData)
  }, [])

  return (
    <div>
      {/* our direction content */}
      <div className="max-w-sm">
        <SectionTitle
          highlights="What we atand for"
          title="Our Direction"
          des="We're passionate about delivering hight quality solution that make a real impact on the growth Here's how we approach it."
        />
      </div>
      {/* all direction here */}
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 md:grid-cols-3 lg:gap-20 md:gap-10 mt-16">
        {
          directions.length > 0 && directions.map((direction) => {
            const { _id, name, des, icon } = direction;
            return (
              <Card key={_id} name={name} des={des} icon={icon} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Directions;
