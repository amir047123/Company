import React, { useState } from "react";
import { toast } from "react-hot-toast";

const BlogDetailsOurExperts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      agreeTerms: false,
      type: "blog", 

    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation logic goes here
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Post data to your API endpoint
    try {
      const response = await fetch("http://localhost:5000/api/v1/contact/addContacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast.success("Your request has been submitted.");
      resetForm();
    } catch (error) {
      toast.error("Failed to submit your question. Please try again later.");
    }
  };

  return (
    <div className="w-full p-8 bg-primary/5 rounded-xl">
      <h2 className="text-2xl font-medium">Ask Our Experts</h2>
      <p className="text-lightGreen my-5 text-sm">
        Feel free to ask us anything
      </p>
      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Your Name"
          type="text"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Your email address"
          type="email"
          required
        />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Write your thoughts here..."
        ></textarea>
        <label className="flex gap-2">
          <input
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="block"
            type="checkbox"
            required
          />
          <p className="text-xs">
            I have read and accept the{" "}
            <span className="text-primary">Terms of use</span> &{" "}
            <span className="text-primary">Privacy policy</span>
          </p>
        </label>
        <input
          className="block w-full py-2 px-10 bg-secondary rounded-lg mt-5 hover:scale-105 duration-300"
          type="submit"
          value="Ask Our Experts"
        />
      </form>
    </div>
  );
};

export default BlogDetailsOurExperts;
