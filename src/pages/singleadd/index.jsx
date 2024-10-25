import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImage from "../../assets/images/bgg.jpg";

const SingleAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdvert = async () => {
      try {

        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Authorization token missing.");
          return;
        }


        const response = await axios.get(
          `https://backend-5kai.onrender.com/getad/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAdvert(response.data);
      } catch (error) {
        toast.error("Failed to fetch advert details");
        console.error("Error fetching advert:", error);
      }
    };

    fetchAdvert();
  }, [id]);

  if (!advert) return <div className="text-center">Loading...</div>;

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">{advert.title}</h1>
        <img
          src={`https://savefiles.org/${advert.img}?shareable_link=464`} 
          alt={advert.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-xl mb-4">{advert.description}</p>
        <p className="text-lg font-bold mt-4">Category: {advert.category}</p>
        <p className="text-lg font-bold mt-2">Price: ${advert.price}</p>

        <button
          onClick={() => navigate("/getalladverts")}
          className="mt-6 w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-orange-500"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SingleAdvert;
