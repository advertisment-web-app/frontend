import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import backgroundImage from "../../assets/images/bgg.jpg";

const GetAllAdverts = () => {
  const [adverts, setAdverts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [advertsPerPage] = useState(6);
  const navigate = useNavigate();

  // Fetch adverts from the API
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Authorization token missing.");
          return;
        }

        const response = await axios.get(
          "https://backend-5kai.onrender.com/getallad",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAdverts(response.data);
        setFilteredAdverts(response.data); // Initialize with all adverts
      } catch (error) {
        toast.error("Failed to fetch adverts");
        console.error("Error fetching adverts:", error);
      }
    };

    fetchAdverts();
  }, []);

  // Search adverts by title or category
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = adverts.filter(
      (advert) =>
        advert.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        advert.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredAdverts(filtered);
  };

  // Pagination: Get current adverts
  const indexOfLastAdvert = currentPage * advertsPerPage;
  const indexOfFirstAdvert = indexOfLastAdvert - advertsPerPage;
  const currentAdverts = filteredAdverts.slice(
    indexOfFirstAdvert,
    indexOfLastAdvert
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle advert click to navigate to single advert page
  const handleAdvertClick = (id) => {
    navigate(`/advert/${id}`);
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl text-white font-bold mb-4">Adverts</h1>

      {/* Search Bar */}
      <div className="flex items-center mb-4 bg-orange-500 rounded-md shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search by title or category"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-full border-none focus:outline-none"
        />
        <FaSearch className="ml-2 text-gray-500" />
      </div>

      {/* Advert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentAdverts.map((advert) => (
          <div
            key={advert._id}
            className="border bg-white bg-opacity-90 p-4 rounded-md shadow hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleAdvertClick(advert.id)}
          >
            <img
              src={advert.img ? advert.img : "/src/assets/images/default.jpg"} // Fallback to default image
              alt={advert.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-bold">{advert.title}</h2>
            <p className="text-black">{advert.category}</p>
            <p className="text-black font-semibold">${advert.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {[
          ...Array(Math.ceil(filteredAdverts.length / advertsPerPage)).keys(),
        ].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === number + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-300"
            } transition-colors duration-300`}
          >
            {number + 1}
          </button>
        ))}
      </div>
      {/* Home Button */}
      <button
        onClick={() => navigate("/dashboard")} // Navigate to dashboard
        className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-purple-800"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default GetAllAdverts;
