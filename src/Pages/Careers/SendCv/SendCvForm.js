import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { singleImageUpload } from "../../../Hooks/ImageUpload";
import moment from "moment";

const SendCvForm = ({ id }) => {
  const [img, setImg] = useState("");
  let date = moment().format("YYYY-MM-D");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    resume: "",
    importantLink: "",
    financialExpectations: "",
    introduceYourself: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/jobApply/addJobApplys`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            address: formData.address,
            email: formData.email,
            phone: formData.phone,
            resume: img, // Set resume to the uploaded image
            importantLink: formData.importantLink,
            financialExpectations: formData.financialExpectations,
            introduceYourself: formData.introduceYourself,
            date, // Use the formatted date
          }),
        }
      );

      if (response.ok) {
        toast.success("Your application has been submitted");
        setFormData({
          name: "",
          address: "",
          email: "",
          phone: "",
          resume: "",
          importantLink: "",
          financialExpectations: "",
          introduceYourself: "",
        });
        setImg("");

      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error creating order:", error.message);
      toast.error("An unexpected error occurred");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImg);
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl md:text-4xl my-10 md:mb-10 md:mt-0 font-[500] ">
        Level up your brand
      </h3>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Information</legend>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your Name"
            onChange={handleChange}
            name="name"
            required
            value={formData?.name}
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={formData?.email}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your phone"
            type="text"
            required
            onChange={handleChange}
            name="phone"
            value={formData?.phone}
          />

          <label htmlFor="address">Address</label>
          <input
            id="address"
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your address"
            type="text"
            required
            onChange={handleChange}
            name="address"
            value={formData?.address}
          />
        </fieldset>

        <label htmlFor="resume">Your resume</label>
        <div className="input_border_gradient rounded-lg flex justify-between items-center px-4 py-3 mt-1">
          <p className="text-sm">Browse File</p>
          <label className="flex items-center justify-center py-[6px] px-6 bg-gradient-to-r from-primary to-secondary border-none cursor-pointer rounded-3xl ">
            <p className="font-medium uppercase text-xs text-dark">Browse</p>
            <input
              onChange={handleChangeUploadImage}
              className="hidden"
              type="file"
              autoComplete="off"
              id="resume"
              required
            />
          </label>
        </div>

        <label className="text-xs text-lightGreen">
          Acceptable file formats are, doc, docx, pdf, maximum file size is 5MB
        </label>

        <fieldset>
          <legend>Additional Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div>
              <label htmlFor="importantLink">Important link</label>
              <input
                id="importantLink"
                className="w-full block p-3 outline-none input_border_gradient rounded-xl mt-1 mb-10"
                placeholder="Portfolio/Web/Github URL"
                type="text"
                required
                onChange={handleChange}
                name="importantLink"
                value={formData?.importantLink}
              />
            </div>
            <div>
              <label htmlFor="financialExpectations">Financial expectations? </label>
              <input
                id="financialExpectations"
                className="w-full block p-3 outline-none input_border_gradient rounded-xl mt-1 mb-10"
                placeholder="Financial expectations"
                type="number"
                required
                onChange={handleChange}
                name="financialExpectations"
                value={formData?.financialExpectations}
              />
            </div>
          </div>

          <textarea
            className="w-full block p-3 pb-10 outline-none input_border_gradient rounded-xl mt-1"
            placeholder="Introduce Yourself"
            type="text"
            required
            onChange={handleChange}
            name="introduceYourself"
            value={formData?.introduceYourself}
          />
        </fieldset>

        <div className="mt-10">
          <label>
            <input type="checkbox" required />
            Consent to data processing can be withdrawn at any time, which will not
            affect the lawfulness of the processing carried out on the basis of this
            consent before its withdrawal. For more information, please visit.
            Terms of use.
          </label>
        </div>

        <input
          className="w-full mt-10 text-dark bg-gradient-to-r from-primary to-secondary rounded px-5  cursor-pointer py-3 hover:scale-105 duration-300"
          type="submit"
          value="Submit Application"
        />
      </form>
    </div>
  );
};

export default SendCvForm;
