import { Icon } from "@iconify/react";
import { Polyline } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogDetailsContent = ({ blog }) => {
  const navigate = useNavigate();
  const { category, authorName, title, description, authorImg } = blog;
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
            <a
              href="https://www.facebook.com/thinkystorm"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon
                className="text-2xl"
                icon="typcn:social-facebook-circular"
              />
            </a>
          </button>
          <div className="flex items-center">
            {" "}
            <button className="text-primary hover:text-white">
              <a
                href="https://www.instagram.com/thinkystorm/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon className="text-lg" icon="lucide:instagram" />
              </a>
            </button>
          </div>
          <button className="text-primary hover:text-white">
            <a
              href="https://www.linkedin.com/company/thinky-storm/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Icon className="text-2xl" icon="jam:linkedin-circle" />
            </a>
          </button>
          <button className="text-primary hover:text-white">
            <a href="/" target={"_blank"} rel="noreferrer">
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
              <p className="text-xs text-lightGreen">10 Min to read</p>
            </div>
            <div className="flex justify-end gap-2 items-center">
              <img
                className="w-5 rounded-full bg-primary"
                src={authorImg}
                alt="author img"
              />
              <p className="text-lightGreen text-xs">{authorName}</p>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl my-10 font-semibold">{title}</h2>
            <p className="text-sm text-lightGreen">{description}</p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam laboriosam ipsa odio possimus,
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt.
            </p>
            <h2 className="text-lg mt-10 mb-2 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <p className="text-sm text-lightGreen">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam laboriosam ipsa odio possimus, ea tempore
              distinctio tenetur blanditiis libero necessitatibus, deserunt
              cumque accusantium odit repellendus iure error dolorem a id.
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam laboriosam ipsa odio possimus,
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt.
            </p>
            <h2 className="text-lg mt-10 mb-2 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h2>
            <p className="text-sm text-lightGreen">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam laboriosam ipsa odio possimus,
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Magnam laboriosam ipsa odio possimus, Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              sapiente ipsam atque voluptates asperiores necessitatibus soluta
              adipisci facere eum similique!
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae, ullam sapiente ipsum inventore
              rerum mollitia nesciunt.
            </p>
            <p className="text-sm text-lightGreen mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              voluptas harum alias molestiae,
            </p>
            {/* Blog details footer */}
            <div className="h-[2px] w-full bg-primary mt-10"></div>
            <div className="flex justify-start gap-2 items-center mt-5">
              <img
                className="w-5 rounded-full bg-primary"
                src={authorImg}
                alt="author img"
              />
              <p className="text-lightGreen text-xs">Naimur Rahman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
