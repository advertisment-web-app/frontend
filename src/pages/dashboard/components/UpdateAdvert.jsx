import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAdvert = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [advert, setAdvert] = useState({
    title: "",
    description: "",
    category: "",
    img: "",
    price: "",
  });

  // Fetch the advert details
  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token retrieved:", token); // Log the token

        const response = await axios.get(
          `https://backend-5kai.onrender.com/getad/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAdvert(response.data);
      } catch (error) {
        console.error("Error fetching advert:", error);
      }
    };

    fetchAdvert();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setAdvert({ ...advert, [e.target.name]: e.target.value });
  };

  // Handle form submit
  useEffect(() => {
    // Show the confirmation toast when the form loads
    const toastId = toast.info("Are you sure you want to update?", {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      progress: undefined,
      pauseOnHover: true,
      position: "top-right",
      // Show an "OK" button
      onClose: () => toast.dismiss(toastId),
    });

    // Remove the toast when the component unmounts
    return () => toast.dismiss(toastId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Show confirmation toast with Yes/No buttons
    const confirmToast = toast.info(
      <div>
        <p>Are you sure you want to update?</p>
        <button
          onClick={async () => {
            toast.dismiss(confirmToast); // Dismiss the confirmation toast
            try {
              const token = localStorage.getItem("token");
              await axios.patch(
                `https://backend-5kai.onrender.com/updatead/${id}`,
                advert,
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              );
              toast.success("Advert updated successfully!");
              setTimeout(() => {
                navigate("/dashboard");
              }, 2000); // Adjust the delay as needed
            } catch (error) {
              toast.error("Not Authorized to Update This Advert");
              console.error("Error updating advert:", error);
            }
          }}
          className="bg-green-500 text-white px-2 py-1 rounded-md mx-1"
        >
          Yes
        </button>
        <button
          onClick={() => {
            toast.dismiss(confirmToast); // Dismiss the confirmation toast
            navigate("/dashboard"); // Go back to dashboard
          }}
          className="bg-red-500 text-white px-2 py-1 rounded-md mx-1"
        >
          No
        </button>
      </div>,
      { closeButton: false, autoClose: false }
    );
  };
  
  


  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(/src/assets/images/about.jpg)` }}
    >
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6">Update Advert</h2>

          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={advert.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={advert.description}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={advert.category}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg"
          >
            <option value="">Select Category</option>
            <option value="clothing and accessories">
              Clothing and accessories
            </option>
            <option value="Electronics and gadgets">
              Electronics and gadgets
            </option>
            <option value="Home and living">Home and living</option>
            <option value="Beauty and personal care">
              Beauty and personal care
            </option>
            <option value="Handmade and Craft Items">
              Handmade and Craft Items
            </option>
            <option value="Toys and games">Toys and games</option>
            <option value="Books and Stationary">Books and Stationary</option>
            <option value="Sports and Outdoor">Sports and Outdoor</option>
            <option value="Automotive">Automotive</option>
            <option value="Health and fitness">Health and fitness</option>
            <option value="Food and Beverages">Food and Beverages</option>
            <option value="Art and collectibles">Art and collectibles</option>
            <option value="Digital Product">Digital Product</option>
            <option value="Services">Services</option>
          </select>

          <label className="block mb-2">Image URL</label>
          <input
            type="text"
            name="img"
            value={advert.img}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={advert.price}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Update Advert
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UpdateAdvert;
