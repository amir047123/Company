import React from "react";
import logo from "../Assets/thinky-storm-icon.png";
import { Icon } from "@iconify/react";

const ContactInfo = () => {
  return (
    <>
      <img className="w-[50%] mx-auto" src={logo} alt="" />
      <div className="mt-20">
        <h1 className="text-2xl">Get in touch</h1>
        <p className="my-5 text-[15px] text-lightGreen">
          We love to hear from you. Our friendly team is always here to chat.
        </p>
        <div className="flex gap-5 my-10">
          <Icon className="text-lg mt-1 text-primary" icon="ic:baseline-mail" />
          <div>
            <h1 className="text-lg">Chat to us</h1>
            <p className="text-lightGreen text-[15px]">
              office@thinkystorm.com
            </p>
          </div>
        </div>
        <div className="flex gap-4 my-10">
          <Icon
            className="text-3xl text-primary"
            icon="material-symbols:location-on"
          />{" "}
          <div>
            <h1 className="text-lg ">Office</h1>
            <p className="text-lightGreen text-[15px]">
            Virtual Team
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Icon
            className="text-lg mt-1 text-primary"
            icon="icon-park-solid:iphone"
          />
          <div>
            <h1 className="text-lg ">Phone </h1>
            <p className="text-lightGreen text-[15px]">+880 1990180375</p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-20">
        <button className="hover:text-primary">
          <a
            href="https://www.facebook.com/thinkystorm"
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon className="text-5xl " icon="typcn:social-facebook-circular" />
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
              <Icon className="text-4xl" icon="lucide:instagram" />
            </a>
          </button>
        </div>
        <button className="hover:text-primary">
          <a
            href="https://www.linkedin.com/company/thinky-storm/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon className="text-5xl " icon="jam:linkedin-circle" />
          </a>
        </button>
        <button className="hover:text-primary">
          <a href="/" target={"_blank"} rel="noreferrer">
            <Icon className="text-5xl " icon="jam:twitter-circle" />
          </a>
        </button>
      </div>
    </>
  );
};

export default ContactInfo;
