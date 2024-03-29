import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <h1 className="font-black text-black text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-black">We can't find that page.</p>

          <Link
            to="/"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white  bg-primary rounded hover:bg-primary/90 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
