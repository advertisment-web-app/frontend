import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaPlus, FaDollarSign, FaEdit } from "react-icons/fa";
import axios from "axios";
import defaultProfilePic from "../assets/images/profilePic.jpg";
import { toast } from "react-toastify";

const ProfileCard = () => {
  const [profile, setProfile] = useState({});
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch vendor profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://backend-5kai.onrender.com/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile.");
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  // Handle profile picture change
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfilePic(fileURL);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/vendorlogin");
  };

  return (
    <div className="w-64 bg-white shadow-lg fixed top-14 left-0 h-full p-6 flex flex-col items-center">
      {/* Profile Picture with Edit Button */}
      <div className="relative mb-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover"
        />
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

      {/* Vendor Name and Email */}
      <h2 className="text-xl font-bold text-gray-800 text-center">
        {profile.firstname} {profile.lastname}
      </h2>
      <p className="text-gray-600 text-center mt-1">{profile.email}</p>

      {/* Links */}
      <div className="mt-4 w-full">
        <button
          className="flex items-center justify-between w-full bg-purple-800 text-white py-2 px-4 rounded-md mb-3 hover:bg-orange-500"
          onClick={() => navigate("addform")}
        >
          <FaPlus className="mr-2" /> Add Advert
        </button>

        <button
          className="flex items-center justify-between w-full bg-purple-800 text-white py-2 px-4 rounded-md mb-3 hover:bg-orange-500"
          onClick={() => navigate("prices")}
        >
          <FaDollarSign className="mr-2" /> View Prices
        </button>

        <button
          className="flex items-center justify-between w-full bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-orange-500"
          onClick={() => navigate("settings")}
        >
          <FaCog className="mr-2" /> Settings
        </button>
      </div>

      {/* Logout Button */}
      <button
        className="bg-orange-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-purple-800"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
