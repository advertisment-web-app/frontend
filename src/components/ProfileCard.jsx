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
    <div className="w-64 bg-purple-800 shadow-lg fixed top-14 left-0 h-full p-6 flex flex-col items-center">
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
      <h2 className="text-xl font-bold text-white text-center">
        {profile.firstname} {profile.lastname}
      </h2>
      <p className="text-white text-center mt-1">{profile.email}</p>

      {/* Links */}
      <div className="mt-4 w-full flex flex-col items-center">
        <button
          className="flex items-center justify-center w-32 bg-orange-500 text-white py-1 px-2 rounded-md mb-2 text-sm hover:bg-orange-800"
          onClick={() => navigate("addform")}
        >
          <FaPlus className="mr-2" /> Add Advert
        </button>

        <button
          className="flex items-center justify-center w-32 bg-orange-500 text-white py-1 px-2 rounded-md mb-2 text-sm hover:bg-orange-800"
          onClick={() => navigate("prices")}
        >
          <FaDollarSign className="mr-2" /> View Prices
        </button>

        <button
          className="flex items-center justify-center w-32 bg-orange-500 text-white py-1 px-2 rounded-md text-sm hover:bg-orange-800"
          onClick={() => navigate("settings")}
        >
          <FaCog className="mr-2" /> Settings
        </button>
      </div>

      {/* Logout Button */}
      <button
        className="bg-orange-500 text-white py-1 px-2 rounded-md mt-6 text-sm hover:bg-purple-800"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
