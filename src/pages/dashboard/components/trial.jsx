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
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user", user);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("image", image);

    // Token dynamically added from the stored token (for example after login)
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTYzZjBkMjMyM2UzOGY4YjIxOWJlMCIsImlhdCI6MTcyOTUyMTk4OSwiZXhwIjoxNzI5NjA4Mzg5fQ.23G_68SFWt0vHWou3Obx9sScEtXU4i6ANDv4KSx1qDg";

    // POST request to the API
    axios
      .post("https://backend-5kai.onrender.com/ad", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Advert added successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/getall");
      })
      .catch((error) => {
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
          >
            <option value="">Select Category</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="beauty">Beauty</option>
            <option value="handmade">Handmade</option>
            <option value="games">Games</option>
            <option value="books">Books</option>
            <option value="sports">Sports</option>
            <option value="automotive">Automotive</option>
            <option value="health">Health</option>
            <option value="food">Food</option>
            <option value="art">Art</option>
            <option value="digital">Digital</option>
            <option value="services">Services</option>
          </select>

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 w-full h-40 object-cover rounded-lg"
              />
            )}
          </div>
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
