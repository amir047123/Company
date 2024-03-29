import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import resetImg from "../../Assets/reset.svg";
import { Icon } from "@iconify/react";

const InsertOtp = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);

  const userLoginEmail = JSON.parse(localStorage.getItem("alalaEmail"));
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/v1/user/by-email?email=${userLoginEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToken(data?.data?.forgetPasswordToken);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleToken = (data) => {
setLoading(true)
    if (data.token !== token) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You entered a wrong OTP!",
      });
      setLoading(false)
    } else {
      Swal.fire("Bingo!", "OTP matched.", "success");
      setLoading(false)
      navigate("/setNewPassword");
    }
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-[#e4f6fa] min-h-screen">
      {/* Reset page image */}
      <div className="w-full flex justify-center items-center">
        <img className="w-[50%]" src={resetImg} alt="reset img" />
      </div>
      {/* login form */}
      <div className="w-[100%] bg-gradient-to-tr from-primary via-lightPrimary to-secondLightPrimary md:rounded-l-3xl">
        <div className="w-[75%] lg:w-[65%] mx-auto my-36">
          <h2 className="text-2xl font-medium text-white">
            Insert Your OTP Token
          </h2>
          {/*form start */}
          <form onSubmit={handleSubmit(handleToken)} className="py-10">
            {/* input email */}
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                OTP Token
              </span>
              <input
                {...register("token", { required: true })}
                type="number"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm text-black"
                placeholder="Your Four Digit OTP"
              />
            </label>

            <button
              type="submit"
              className="py-3 text-center w-full bg-gradient-to-tr from-primary via-lightPrimary to-secondLightPrimary  mt-6 border-2 border-whiteSmoke rounded-md text-white font-medium cursor-pointer mb-10 block"
            >
              
              {
                loading?<Icon className="mx-auto text-2xl" icon="eos-icons:bubble-loading"></Icon>:"Submit"
              }
            </button>

            <small className="text-white">
              <span className="pr-2 text-lg">←</span> Back to{" "}
              <Link to="/login" className="font-medium hover:underline">
                Home
              </Link>
            </small>
          </form>
          {/*form end */}
        </div>
      </div>
    </div>
  );
};

export default InsertOtp;
