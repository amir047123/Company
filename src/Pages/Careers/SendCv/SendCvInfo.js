import React, { useEffect } from "react";
import logo from "../../../Assets/thinky-storm-icon.png";
import { Icon } from "@iconify/react";

const SendCvInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="">
        <img className="w-1/3" src={logo} alt="" />
        <div className="mt-20">
          <h1 className="text-3xl font-[500]">Get in touch</h1>
          <p className="my-5 ">
            We love to hear from you. Our friendly team is <br /> always here to
            chat.
          </p>
          <div className="flex gap-4 my-10">
            <Icon className="text-3xl text-primary" icon="ic:baseline-mail" />
            <div>
              <h1 className="font-[500] text-xl">Chat to us</h1>
              <p>office@thinkystorm.com</p>
            </div>
          </div>
          <div className="flex gap-4 my-10">
            <Icon
              className="text-3xl text-primary"
              icon="material-symbols:location-on"
            />{" "}
            <div>
              <h1 className="text-xl font-[500]">Office</h1>
              <p>
                Office Address : Dhaka-1216,
                <br /> Pallabi, House-15, Block-B,
                <br />
                Section-12
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon
              className="text-3xl text-primary"
              icon="icon-park-solid:iphone"
            />
            <div>
              <h1 className="text-xl font-[500]">Phone </h1>
              <p>+880 1990180375</p>
            </div>
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
        <div className="flex items-center hover:text-primary">
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
    </div>
  );
};

export default SendCvInfo;
