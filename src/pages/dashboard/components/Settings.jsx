import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "vendor",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://backend-5kai.onrender.com/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile");
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.patch("https://backend-5kai.onrender.com/update", profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      toast.error("Failed to update profile");
      console.error("Error updating profile:", error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete("https://backend-5kai.onrender.com/delete", {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Profile deleted successfully!");
        navigate("/"); // Navigate to the home page or login page after deletion
      } catch (error) {
        toast.error("Failed to delete profile");
        console.error("Error deleting profile:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstname"
          value={profile.firstname}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={profile.lastname}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
        >
          Update Profile
        </button>
        
        <button
          type="button"
          onClick={handleDelete}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Delete Profile
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Settings;
