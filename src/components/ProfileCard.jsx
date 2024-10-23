import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaPlus, FaDollarSign, FaEdit } from "react-icons/fa";
import axios from "axios";
import defaultProfilePic from "../assets/images/profilePic.jpg";
import { toast } from "react-toastify";

const ProfileCard = () => {
  const [profile, setProfile] = useState({});
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [advertsCount, setAdvertsCount] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // // Fetch vendor profile
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://backend-5kai.onrender.com/profile",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setProfile(response.data);

  //     //   // Fetch number of adverts by vendor
  //     //   const advertsResponse = await axios.get(
  //     //     `https://backend-5kai.onrender.com/getallad?user=${response.data.id}`,
  //     //     {
  //     //       headers: {
  //     //         Authorization: `Bearer ${token}`,
  //     //       },
  //     //     }
  //     //   );
  //     //   setAdvertsCount(advertsResponse.data.length);
  //     // } catch (error) {
  //     //   toast.error("Failed to fetch profile or adverts.");
  //     //   console.error("Error fetching profile or adverts:", error);
  //     // }
  //   };
  //   fetchProfile();
  // }, [token]);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfilePic(fileURL); // Update the profile picture locally
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/vendorlogin");
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
        {/* Edit button */}
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
      {/* <h2 className="text-xl font-bold text-gray-800">
        {profile.firstname} {profile.lastname}
      </h2> */}

      {/* Number of Adverts */}
      {/* <p className="text-gray-500 mt-2">Adverts Added: {advertsCount}</p> */}

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
