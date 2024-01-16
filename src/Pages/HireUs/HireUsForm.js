import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Alert from "../../Shared/Alert";
import servicesName from "./Services";

const HireUsForm = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesName);
  }, []);

  const [hireUs, setHireUs] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);

  const removeFromSelectedServices = (_name) => {
    const filterResult = selectedServices.filter(
      (service) => service !== _name
    );
    setSelectedServices(filterResult);
  };

  const resetForm = () => {
    setHireUs({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
    setSelectedServices([]);
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleHireUs = async (e) => {
    e.preventDefault();

    const emailRegEx = /^\S+@\S+\.\S+$/;
    const phoneRegEx = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (!emailRegEx.test(hireUs.email)) {
      toast.error("Email address is not valid");
      return;
    }
    if (!phoneRegEx.test(hireUs.phone)) {
      toast.error("Phone number is not valid");
      return;
    }
    if (selectedServices.length < 1) {
      toast.error("You must select at least one service");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/contact/addContacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: hireUs.name,
          email: hireUs.email,
          phone: hireUs.phone,
          description: hireUs.description,
          services: selectedServices.join(", "),
          type: "hire", 
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast.success("Your request has been submitted.");

      resetForm();
    } catch (error) {
      toast.error("Failed to submit your request. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <Alert />

      <h3 className="text-3xl md:text-4xl my-10 md:mb-10 md:mt-0 font-medium">
        Level up your brand
      </h3>
      {/* form start */}
      <div>
        <form onSubmit={handleHireUs}>
          <label>Name</label>
          <input
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your Name"
            autoComplete="off"
            type="text"
            required
            onChange={(e) => setHireUs({ ...hireUs, name: e.target.value })}
            value={hireUs.name}
          />
          <label>Email</label>
          <input
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your email"
            autoComplete="off"
            type="email"
            required
            onChange={(e) => setHireUs({ ...hireUs, email: e.target.value })}
            value={hireUs.email}
          />
          <label>Phone</label>
          <input
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mt-1 mb-10"
            placeholder="+880 XXXXXXXXXX"
            autoComplete="off"
            type="tel"
            required
            onChange={(e) => setHireUs({ ...hireUs, phone: e.target.value })}
            value={hireUs.phone}
          />
          <label>How can We help? </label>
          <textarea
            className="w-full block p-3 pb-10 outline-none input_border_gradient rounded-xl mt-1"
            placeholder="Tell us a little about the project..."
            autoComplete="off"
            type="tel"
            required
            onChange={(e) => setHireUs({ ...hireUs, description: e.target.value })}
            value={hireUs.description}
          />
          <div className="mt-10">
            <h1 className="text-3xl mb-5">Services</h1>
            <div className="grid md:grid-cols-2">
              {services.length > 0 &&
                services.map((service, index) => {
                  if (selectedServices.includes(service)) {
                    return (
                      <div key={index} className="text-lightGreen">
                        <input
                          type="checkbox"
                          onClick={() => removeFromSelectedServices(service)}
                        />

                        <label
                          className="form-check-label text-[16px] inline text-gray-800 ml-1 md:ml-3"
                          value={service}
                        >
                          {service}
                        </label>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="text-lightGreen">
                        <input
                          type="checkbox"
                          onClick={() =>
                            setSelectedServices([...selectedServices, service])
                          }
                        />
                        <label
                          className="form-check-label text-[16px] inline text-gray-800 ml-1 md:ml-3"
                          value={service}
                        >
                          {service}
                        </label>
                      </div>
                    );
                  }
                })}
            </div>
          </div>

          <input
            className="w-full mt-10 bg-gradient-to-r from-primary to-secondary rounded px-5  py-3 hover:scale-105 duration-300 text-dark"
            type="submit"
            value=" Send Request"
          />
        </form>
      </div>
    </div>
  );
};

export default HireUsForm;
