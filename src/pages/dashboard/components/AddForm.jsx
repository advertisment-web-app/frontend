import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../../assets/images/add.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState(""); // Set this to the logged-in user
  const [category, setCategory] = useState(""); // New category field
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      user,
      category,
      price,
      img: image,
    };

    console.log("Submitting form with data:", formData);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTYzZjBkMjMyM2UzOGY4YjIxOWJlMCIsImlhdCI6MTcyOTUyMTk4OSwiZXhwIjoxNzI5NjA4Mzg5fQ.23G_68SFWt0vHWou3Obx9sScEtXU4i6ANDv4KSx1qDg";

    axios
      .post("https://backend-5kai.onrender.com/ad", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("Advert added successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/getalladverts");
      })
      .catch((error) => {
        console.error("Error adding advert:", error.response || error);
        toast.error("Error adding advert. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Error adding advert:", error);
      });
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
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Category dropdown */}
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
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
              onClick={() => navigate("/dashboard")}
            >
              Back to Home
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
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
