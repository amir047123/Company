import React, { useState } from "react";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import logo from "../../Assets/Navbar/logo.png";
import payment from "../../Assets/footer/image 7.svg";
import { toast } from "react-hot-toast";

const Footer = () => {
  const data = [
    {
      content: "+880 1990180375",
      img: <AdUnitsIcon />,
    },
    {
      content: "office@thinkystorm.com",
      img: <EmailIcon />,
    },
    {
      content: "www.thinkystorm.com",
      img: <LanguageIcon />,
    },
    {
      content: "Office Address: Virtual Team | Dhaka, Bangladesh",
      img: <LocationOnIcon />,
    },
  ];

  const [email, setEmail] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // Validation logic for the email address
    const emailRegEx = /^\S+@\S+\.\S+$/;
    if (!emailRegEx.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Post data to your API endpoint
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/contact/addContacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, type: "subscribe" }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast.success("You have subscribed to our newsletter!");
      setEmail(""); // Clear the email input after successful submission
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-t from-[#040C17] to-[#051D27] py-16 mt-12">
        <div className="w-11/12 md:w-9/12 mx-auto">
          <img className="w-48" src={logo} alt="Logo" />
          <div className="flex flex-wrap justify-between mt-5">
            <div className="text-xs text-white max-w-xs pr-5">
              {data.map((info, index) => (
                <div key={index} className="flex items-start my-2">
                  <span className="text-primary w-4 mr-5">{info.img}</span>
                  <p>{info.content}</p>
                </div>
              ))}
            </div>
            <div className="text-xs my-5 md:my-0 mr-10">
              <p className="my-2">
                <Link to={"/"}>Home</Link>
              </p>
              {/* <p className="my-2"><Link to={"/services"}>Services</Link></p> */}
              <p className="my-2">
                <Link to={"/aboutUs"}>About Us</Link>
              </p>
              <p className="my-2">
                <Link to={"/blogs"}>Blogs</Link>
              </p>
              <p className="my-2">
                <Link to={"/careers"}>Careers</Link>
              </p>
            </div>
            <div className="mt-0 md:mt-5 lg:mt-0">
              <p className="text-white text-xl font-medium">Our NewsLetter</p>
              <div>
                <form
                  className="flex gap-5 mt-3 items-end"
                  onSubmit={handleEmailSubmit}
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 px-2 outline-none border-b-2 border-b-primary bg-[#051D27] w-2/3 text-xs"
                    placeholder="Enter your email"
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <button
                    type="submit"
                    className="text-primary font-semibold text-lg tracking-[4px] uppercase"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <p className="text-xs mt-5">
                © {new Date().getFullYear()} Thinky Storm All Rights Reserved.
              </p>
            </div>
          </div>
          <img
            className="w-full n_md:w-auto flex justify-center"
            src={payment}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
