import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../../../assets/images/aboutbg.jpg";
import { FaPlus, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

const VendorGet = () => {
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [advertsPerPage] = useState(4); // Number of adverts per page
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch adverts on mount
  useEffect(() => {
    const fetchAdverts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await axios.get(
          "https://backend-5kai.onrender.com/getallad",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAdverts(response.data);
        setFilteredAdverts(response.data); // Initialize filtered adverts
      } catch (error) {
        console.error("Error fetching adverts:", error);
      }
    };

    fetchAdverts();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = adverts.filter(
      (advert) =>
        advert.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        advert.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAdverts(filtered);
  };

  // Pagination Logic
  const indexOfLastAdvert = currentPage * advertsPerPage;
  const indexOfFirstAdvert = indexOfLastAdvert - advertsPerPage;
  const currentAdverts = filteredAdverts.slice(
    indexOfFirstAdvert,
    indexOfLastAdvert
  );
  const totalPages = Math.ceil(filteredAdverts.length / advertsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this advert?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://backend-5kai.onrender.com/deletedad/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdverts(adverts.filter((advert) => advert.id !== id));

      // Show the success toast
      toast.success("Advert deleted successfully!", {
        onClose: () => {
          // After the toast closes, refresh the page
          setTimeout(() => {
            navigate("/dashboard");
            window.location.reload();
          }, 500); // Short delay to ensure smooth transition
        },
      });
    } catch (error) {
      toast.error("Not Authorized to Delete This Advert");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-8 top-14"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <button
        className="absolute top-4 right-4 bg-purple-800 text-white p-4 rounded-full shadow-lg hover:bg-orange-500"
        onClick={() => navigate("addform")}
      >
        <FaPlus className="text-2xl" />
      </button>

      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold text-white bg-purple-800 border border-orange-500 rounded-md py-2 px-4 inline-block shadow-lg">
          Your Adverts
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center bg-transparent border-4 border-purple-800 rounded-full p-2 shadow-lg w-3/4 sm:w-1/2 md:w-1/3">
          <input
            type="text"
            placeholder="Search by title or category"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-transparent text-white placeholder-white w-full p-2 focus:outline-none"
          />
          <FaSearch className="text-white ml-2" />
        </div>
      </div>

      {currentAdverts.length === 0 ? (
        <p className="text-center text-xl text-white">No added adverts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentAdverts.map((advert) => (
            <div
              key={advert.id}
              className="bg-white bg-opacity-60 rounded-lg shadow-lg p-4"
            >
              <img
                src={advert.img || "/src/assets/images/default.jpg"} // Default image fallback
                alt={advert.title}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => navigate(`/advert/${advert.id}`)}
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{advert.title}</h2>
                <p className="text-gray-600 mt-2">{advert.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => navigate(`updateadvert/${advert.id}`)}
                    className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-orange-500"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(advert.id)}
                    className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-purple-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1
                ? "bg-purple-800 text-white"
                : "bg-gray-300"
            } transition-colors duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VendorGet;
