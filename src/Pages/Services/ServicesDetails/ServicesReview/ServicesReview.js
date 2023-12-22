import React from "react";
import ServicesReviewSlider from "./ServicesReviewSlider";

const ServicesReview = () => {
  return (
    <div>
      {/* review content heder */}
      <div className="max-w-md">
        <p className="text-primary uppercase text-sm">
          Your success in safe hands
        </p>
        <h2 className="text-3xl font-medium my-5">Success Stories</h2>
        <p className="text-lightGreen text-sm">
          There's no better reward for a successful project than a new client
          becoming a long-term partner.
        </p>
      </div>
      {/* Review slider */}
      <div className="mt-20">
        <ServicesReviewSlider />
      </div>
    </div>
  );
};

export default ServicesReview;
