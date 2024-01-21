import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import DeleteHook from "../../../Hooks/DeleteHook";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

function AllApplications() {
  const [applys, setApplys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/jobApply/getJobApplys"
        );
        setApplys(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCoupons();
  }, [refetch]);



  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div class=" text-black ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All Applications
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          All Applications here
        </p>
      </div>
      {/* <AllCouponWithDetails totalCoupons={applys.length} /> */}
     

      <div className=" mb-3">
        <span className="  text-black">
          {" "}
          Showing {applys?.length} Results
        </span>
      </div>
      <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left rounded "
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
              #
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
              Candidate Name
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
             address
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
             Pone
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
             email
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
              apply Date
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-black"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered applys instead of all applys */}
          {applys.map((a, index) => (
            <tr key={a._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {index + 1}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {a?.name}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {a?.address}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {a?.phone}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {a?.email}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-black">
                {a?.date}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-black text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:5000/api/v1/jobApply/deleteJobApplys/${a?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 text-black rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>
                <Link to={`/adminDashboard/viewApplication/${a?._id}`}
                 
                  className="border border-secondary text-black py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="carbon:view-filled" />
                </Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllApplications;
