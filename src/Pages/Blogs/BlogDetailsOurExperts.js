import React from "react";

const BlogDetailsOurExperts = () => {
  return (
    <div className="w-full p-8 bg-primary/5 rounded-xl">
      <h2 className="text-2xl font-medium">Ask Your Experts</h2>
      <p className="text-lightGreen my-5 text-sm">
        Feel free to ask us anything
      </p>
      <form className="opacity-100">
        <input
          className="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Your Name"
          type="text"
          required
        />
        <input
          className="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Your email address"
          type="email"
          required
        />
        <textarea
          id="message"
          rows="4"
          class="w-full block p-2 outline-none rounded-lg mb-5 mt-1 bg-[#00f3a200] border border-[#00f3a262] text-sm"
          placeholder="Write your thoughts here..."
        ></textarea>
        <label className="flex gap-2">
          <input className="block" type="checkbox" name="check" id="" />
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
