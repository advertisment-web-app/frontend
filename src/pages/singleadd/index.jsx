import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImage from "../../assets/images/usergetone.jpg";

const SingleAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

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
      className="container mx-auto p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{advert.title}</h1>
        <img
          src={advert.img}
          alt={advert.title}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-xl mb-4">{advert.description}</p>
        <p className="text-lg font-bold mt-4">Category: {advert.category}</p>
        <p className="text-lg font-bold mt-2">Price: ${advert.price}</p>
      </div>
      {/* Home Button */}
      <button
          onClick={() => navigate("/dashboard")} // Navigate to dashboard
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go to Dashboard
        </button>
    </div>
  );
};

export default SingleAdvert;
