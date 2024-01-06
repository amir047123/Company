import { Icon } from "@iconify/react";
import React from "react";

const JobDetailsSocialIcon = ({ shareUrl }) => {
  const encodedShareUrl = encodeURIComponent(shareUrl);

  return (
    <div className="flex gap-2">
      <div className="hover:text-primary">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="text-lg" icon="typcn:social-facebook-circular" />
        </a>
      </div>
      <div className="flex items-center hover:text-primary">
        <a
          href={`https://www.instagram.com/sharer.php?u=${encodedShareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="" icon="lucide:instagram" />
        </a>
      </div>
      <div className="hover:text-primary">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="text-lg" icon="jam:linkedin-circle" />
        </a>
      </div>
      <div className="hover:text-primary">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="text-lg" icon="jam:twitter-circle" />
        </a>
      </div>
    </div>
  );
};

export default JobDetailsSocialIcon;
