import { Icon } from "@iconify/react";
import React from "react";

const JobDetailsSocialIcon = () => {
  return (
    <div className="flex gap-2">
      <button className="hover:text-primary">
        <a
          href="https://www.facebook.com/thinkystorm"
          target={"_blank"}
          rel="noreferrer"
        >
          <Icon className="text-lg " icon="typcn:social-facebook-circular" />
        </a>
      </button>
      <div className="flex items-center">
        {" "}
        <button className="hover:text-primary">
          <a
            href="https://www.instagram.com/thinkystorm/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon className="" icon="lucide:instagram" />
          </a>
        </button>
      </div>
      <button className="hover:text-primary">
        <a
          href="https://www.linkedin.com/company/thinky-storm/"
          target={"_blank"}
          rel="noreferrer"
        >
          <Icon className="text-lg " icon="jam:linkedin-circle" />
        </a>
      </button>
      <button className="hover:text-primary">
        <a href="/" target={"_blank"} rel="noreferrer">
          <Icon className="text-lg " icon="jam:twitter-circle" />
        </a>
      </button>
    </div>
  );
};

export default JobDetailsSocialIcon;
