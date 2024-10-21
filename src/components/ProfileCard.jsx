import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaPlus, FaDollarSign, FaEdit } from "react-icons/fa"; // Added FaEdit icon
import axios from "axios";
import defaultProfilePic from "../assets/images/profilePic.jpg";

const ProfileCard = ({ vendor = {} }) => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [advertsCount, setAdvertsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (vendor?.id) {
      // Fetch the number of adverts added by the vendor
      axios
        .get(`/api/adverts/vendor/${vendor.id}`)
        .then((response) => setAdvertsCount(response.data.length))
        .catch((error) =>
          console.error("Error fetching adverts count:", error)
        );
    }
  }, [vendor.id]);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfilePic(fileURL);
    }
  };

  const handleLogout = () => {
    axios
      .post("/api/logout")
      .then(() => navigate("/login"))
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="w-1/6 bg-white shadow-lg absolute top-14 left-0 h-full p-6 flex flex-col items-center">
      {/* Profile Picture with Edit Button */}
      <div className="relative mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover"
        />
        {/* Edit button icon */}
        <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 border border-gray-300 cursor-pointer">
          <FaEdit className="text-gray-600" />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Vendor Name */}
      <h2 className="text-xl font-bold text-gray-800">
        {vendor.name || "Vendor Name"}
      </h2>

      {/* Number of Adverts */}
      <p className="text-gray-500 mt-2">Adverts Added: {advertsCount}</p>

      {/* Links */}
      <div className="mt-4 w-full">
        <button
          className="flex items-center justify-between w-full bg-orange-500 text-white py-2 px-4 rounded-md mb-3 hover:bg-purple-500"
          onClick={() => navigate("addform")}
        >
          <FaPlus className="mr-2" /> Add Advert
        </button>

        <button
          className="flex items-center justify-between w-full bg-orange-500 text-white py-2 px-4 rounded-md mb-3 hover:bg-purple-500"
          onClick={() => navigate("prices")}
        >
          <FaDollarSign className="mr-2" /> View Prices
        </button>

        {/* Add Advert Button */}
        <button
          className="flex items-center justify-between w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-purple-500"
          onClick={() => navigate("settings")}
        >
          <FaCog className="mr-2" /> Settings
        </button>
      </div>

      {/* Logout Button */}
      <button
        className="bg-purple-800 text-white py-2 px-4 rounded-md mt-6 hover:bg-orange-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
