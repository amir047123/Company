import { Icon } from "@iconify/react";
import { Polyline } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Team/thinkystorm-amirfaysal-ceo.png";

const BlogDetailsContent = ({ blog }) => {
  const navigate = useNavigate();
  const { category, authorName, title, description, createdAt } = blog;

  // Function to encode URI component
  const encodeURIcomponent = (data) => {
    return encodeURIComponent(data);
  };

  // Function to create dynamic share links
  const getShareLink = (socialMedia) => {
    const baseLink = window.location.href; // Current page URL

    switch (socialMedia) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIcomponent(
          baseLink
        )}`;
      case "instagram":
        // Instagram doesn't support direct sharing via URL, so you may need to use a third-party library or redirect users to your Instagram profile.
        return "https://www.instagram.com/thinkystorm/";
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?url=${encodeURIcomponent(
          baseLink
        )}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodeURIcomponent(
          baseLink
        )}&text=${encodeURIcomponent(title)}`;
      default:
        return baseLink;
    }
  };

  return (
    // blog details div
    <>
      <div className="md:flex gap-x-10">
        {/* Social icon */}
        <div className="flex md:flex-col md:gap-y-8 gap-x-8 md:gap-x-0 items-center mb-10 md:mb-0">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-primary"
          >
            <Icon
              className="text-4xl"
              icon="material-symbols:arrow-circle-left-outline-rounded"
            />
          </button>

          <button className="text-primary hover:text-white">
            <a href={getShareLink("facebook")} target="_blank" rel="noreferrer">
              <Icon
                className="text-2xl"
                icon="typcn:social-facebook-circular"
              />
            </a>
          </button>
          <div className="flex items-center">
            <button className="text-primary hover:text-white">
              <a
                href={getShareLink("instagram")}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="text-lg" icon="lucide:instagram" />
              </a>
            </button>
          </div>
          <button className="text-primary hover:text-white">
            <a href={getShareLink("linkedin")} target="_blank" rel="noreferrer">
              <Icon className="text-2xl" icon="jam:linkedin-circle" />
            </a>
          </button>
          <button className="text-primary hover:text-white">
            <a href={getShareLink("twitter")} target="_blank" rel="noreferrer">
              <Icon className="text-2xl" icon="jam:twitter-circle" />
            </a>
          </button>
        </div>
        {/* Blog details content */}
        <div className="w-full">
          <h2 className="text-lg">
            {" "}
            <Polyline className="text-primary mr-2" /> <span>{category}</span>
          </h2>
          <div className="h-[2px] w-full bg-primary my-3"></div>
          <div className="flex justify-start gap-x-10">
            <div className="flex items-center gap-x-2">
              <button className="text-primary hover:text-white">
                <Icon
                  className="text-lg"
                  icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                />
              </button>
              <p className="text-xs text-lightGreen">
                {" "}
                {new Date(createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex justify-end gap-2 items-center">
              <img
                className="w-5 rounded-full bg-primary"
                src={logo}
                alt="author img"
              />
              <p className="text-lightGreen text-xs">{authorName}</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl my-10 font-semibold">{title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-sm text-lightGreen"
            ></p>

            {/* Blog details footer */}
            <div className="h-[2px] w-full bg-primary mt-10"></div>
            <div className="flex justify-start gap-2 items-center mt-5">
              <img
                className="w-5 rounded-full bg-primary"
                src={logo}
                alt="author img"
              />
              <p className="text-lightGreen text-xs">{authorName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
