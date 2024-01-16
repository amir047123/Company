import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import saveAs from "file-saver";
import Loading from "../../../Shared/Loading/Loading";

const ViewApplication = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      fetch(`http://localhost:5000/api/v1/jobApply/getJobApplysById/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return <div>
    <h2 className="text-2xl font-semibold mb-3">Application Details</h2>
    <h2 className="text-lg font-semibold mb-3">{data?.jobDetails?.jobTitle}</h2>
    <div className="relative">
       <button  onClick={() => saveAs(data?.resume)} className="absolute top-2 right-4 "><Icon className="bg-white/70 rounded-full p-2 text-6xl text-green-500 " icon="line-md:download-outline-loop" ></Icon></button>
       <img className="w-full rounded-lg" src={data?.resume} alt="prescription"></img>
       </div>

    <div>
        <h2 className="text-lg"><span className="font-semibold">Name:</span> {data?.name}</h2>
        <h2 className="text-lg"><span className="font-semibold">Phone:</span> {data?.phone}</h2>
        <h2 className="text-lg"><span className="font-semibold">Email:</span> {data?.email}</h2>
        <h2 className="text-lg"><span className="font-semibold">Address:</span> {data?.address}</h2>
    </div>
  </div>;
};

export default ViewApplication;
