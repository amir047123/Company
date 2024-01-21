import React from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import verifyImg from "../Assets/verify.json";

const VerifyEmail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleVerify = () => {
    fetch(
      `http://localhost:5000/api/v1/user/verify/user?id=${params.id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount === 1) {
          toast.success("Email verified successfully!", "success", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/");
        } else {
          toast.error("Email can't be verified. Try Again later.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
  return (
    <div className="h-screen grid md:grid-cols-2 grid-cols-1 items-center w-11/12 mx-auto">
      <div>
        <Lottie animationData={verifyImg} />
      </div>
      <div>
        <h1 className="text-5xl text-left font-semibold ">
          Please <span className="text-success">Verify</span> Email
        </h1>
        <p className="my-5">
          Thank you for creating an account with our website. Please verify your
          email address by clicking on the button below. The link will expire in
          12 hours. If you don't verify your email address within 12 hours, you
          will need to request a new verification email. Once your email address
          is verified, you will be able to login to our website. <br />
          <p className="text-lg font-semibold mt-5">Thank you,</p>
          <span className="">Alala</span>
        </p>
        <div className=" my-5">
          <button
            onClick={handleVerify}
            className="bg-transparent text-success border-2 border-success  hover:bg-gradient-to-r from-success to-success/20 rounded-lg px-3 py-2 hover:text-white font-medium cursor-pointer "
          >
            Click here to verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
