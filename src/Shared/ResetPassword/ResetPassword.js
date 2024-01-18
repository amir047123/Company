import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import resetImg from "../../Assets/reset.svg";
import { server_url } from "../../Config/API";
import { Icon } from "@iconify/react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const forgot = (data) => {
    setLoading(true);
    const { email } = data;
    localStorage.setItem("alalaEmail", JSON.stringify(email));
    const baseUrl = server_url + "/user/forgot-password";

    // FetchPostMethod(baseUrl, { email });

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          swal("success", data.message, "success");
          setLoading(false);
          navigate("/insert-token");
        } else {
          setLoading(false);
          swal("Oops", data.message, "error");
        }
      });
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-[#e4f6fa] min-h-screen py-5">
      {/* Reset page image */}
      <div className="w-full flex justify-center items-center">
        <img className="w-[50%]" src={resetImg} alt="reset img" />
      </div>
      {/* login form */}
      <div className="w-[100%] bg-gradient-to-tr from-primary via-lightPrimary to-secondLightPrimary md:rounded-l-3xl">
        <div className="w-[75%] lg:w-[65%] mx-auto my-36">
          <h2 className="text-2xl font-medium text-white">
            Forget password?{" "}
            
          </h2>
          {/*form start */}
          <form onSubmit={handleSubmit(forgot)} className="py-10">
            {/* input email */}
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Email
              </span>
              <input required
                {...register("email", { required: true })}
                type="email"
                className="mt-2 px-3 py-3 border border-secondary text-secondary placeholder:text-secondary shadow-sm focus:outline-none border-whiteSmoke bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="you@example.com"
              />
            </label>

            <button
              type="submit"
              className="py-3 text-center w-full bg-gradient-to-tr from-secondary via-lightPrimary to-secondLightPrimary  mt-6  rounded-md text-white font-medium cursor-pointer mb-10 block "
            >
              {
                loading?<Icon className="mx-auto text-2xl" icon="eos-icons:bubble-loading"></Icon>:"Reset password"
              }
              
              
            </button>

            <small className="text-white">
              <span className="pr-2 text-lg">←</span> Back to{" "}
              <Link to="/" className="font-medium hover:underline">
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

export default ResetPassword;
