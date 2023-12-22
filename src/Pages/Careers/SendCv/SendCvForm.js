import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Alert from "../../../Shared/Alert";

const SendCvForm = () => {
  const [sendCV, setSendCV] = useState({
    name: "",
    email: "",
    resume: "",
    importantLink: "",
    expectations: "",
    introduction: "",
    check: false,
  });

  const handleSendCV = (e) => {
    e.preventDefault();
    toast.success("Your job request has been submitted.");
    setSendCV({
      name: "",
      email: "",
      resume: "",
      importantLink: "",
      expectations: "",
      introduction: "",
      check: false,
    });
    document.getElementById("resume").value = "";
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  return (
    <div className="w-full">
      <Alert />

      <h3 className="text-3xl md:text-4xl my-10 md:mb-10 md:mt-0 font-[500] ">
        Level up your brand
      </h3>
      {/* form start */}
      <div>
        <form onSubmit={handleSendCV}>
          <label>Name</label>
          <input
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your Name"
            autoComplete="off"
            type="text"
            required
            onChange={(e) => setSendCV({ ...sendCV, name: e.target.value })}
            value={sendCV.name}
          />
          <label>Email</label>
          <input
            className="w-full block p-3 outline-none input_border_gradient rounded-xl mb-10 mt-1"
            placeholder="Your email"
            autoComplete="off"
            type="email"
            required
            onChange={(e) => setSendCV({ ...sendCV, email: e.target.value })}
            value={sendCV.email}
          />

          <label>Your resume</label>
          <div className="input_border_gradient rounded-lg flex justify-between items-center px-4 py-3 mt-1">
            <p className="text-sm">Browse Excel File</p>
            <label className="flex items-center justify-center py-[6px] px-6 bg-gradient-to-r from-primary to-secondary border-none cursor-pointer rounded-3xl ">
              <p className="font-medium uppercase text-xs text-dark">Browse</p>
              <input
                onChange={(e) =>
                  setSendCV({ ...sendCV, resume: e.target.files[0] })
                }
                className="hidden"
                type={"file"}
                autoComplete="off"
                id="resume"
                required
              />
            </label>
          </div>

          {/* end */}
          <label className="text-xs text-lightGreen">
            Acceptable file formats are, doc, docx, pdf, maximum file size is
            5MB
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div>
              <label>Important link</label>
              <input
                className="w-full block p-3 outline-none input_border_gradient rounded-xl mt-1 mb-10"
                placeholder="Portfolio/Web/Github URL"
                autoComplete="off"
                type="text"
                required
                onChange={(e) =>
                  setSendCV({ ...sendCV, importantLink: e.target.value })
                }
                value={sendCV.importantLink}
              />
            </div>
            <div>
              <label>Financial expectations? </label>
              <input
                className="w-full block p-3 outline-none input_border_gradient rounded-xl mt-1 mb-10"
                placeholder="Financial expectations"
                autoComplete="off"
                type="number"
                required
                onChange={(e) =>
                  setSendCV({ ...sendCV, expectations: e.target.value })
                }
                value={sendCV.expectations}
              />
            </div>
          </div>
          <textarea
            className="w-full block p-3 pb-10 outline-none input_border_gradient rounded-xl mt-1"
            placeholder="Introduce Yourself"
            autoComplete="off"
            type="text"
            required
            onChange={(e) =>
              setSendCV({ ...sendCV, introduction: e.target.value })
            }
            value={sendCV.introduction}
          />
          <div className="mt-10">
            <input
              type="checkbox"
              onChange={() => setSendCV({ ...sendCV, check: !sendCV.check })}
              required
            />
            <p className="ml-2 inline text-lightGreen">
              Consent to data processing can be withdrawn at any time, which
              will not affect the lawfulness of the processing carried out on
              the basis of this consent before its withdrawal. For more
              information, please visit. Terms of use.
            </p>
          </div>

          <input
            className="w-full mt-10 text-dark bg-gradient-to-r from-primary to-secondary rounded px-5  py-3 hover:scale-105 duration-300"
            type="submit"
            value="Submit Application"
          />
        </form>
      </div>
    </div>
  );
};

export default SendCvForm;
