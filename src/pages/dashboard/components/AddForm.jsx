import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../../assets/images/add.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null); // For file upload
  const navigate = useNavigate();

  // Hardcoded categories
  const categories = [
    "clothing and accessories",
    "Electronics and gadgets",
    "Home and living",
    "Beauty and personal care",
    "Handmade and Craft Items",
    "Toys and games",
    "Books and Stationary",
    "Sports and Outdoor",
    "Automotive",
    "Health and fitness",
    "Food and Beverages",
    "Art and collectibles",
    "Digital Product",
    "Services",
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authorization token missing.");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);

      // Append the image file to formData
      if (imageFile) {
        formData.append("img", imageFile);
      } else {
        toast.error("Please upload an image.");
        return;
      }

      // API call
      const response = await axios.post(
        "https://backend-5kai.onrender.com/ad",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );

      toast.success("Advert added successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      // Delay navigation to allow the toast to show
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error adding advert:", error.response || error);
      toast.error("Error adding advert. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center mt-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[40%] p-8 bg-white bg-opacity-50 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Advert</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <div className="space-y-2">
            {/* Upload file from local storage */}
            <input
              type="file"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-purple-800"
              onClick={() => navigate("/dashboard")}
            >
              Back to Home
            </button>
            <button
              type="submit"
              className="bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddForm;
