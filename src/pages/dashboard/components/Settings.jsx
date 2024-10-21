import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/images/userInnerSide.png";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-4xl mx-auto p-8 mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Settings</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Business Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your business name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Business Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="3"
              placeholder="Describe your business"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Notification Preferences</label>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Profile Picture</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="text-purple-500 underline hover:text-purple-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
