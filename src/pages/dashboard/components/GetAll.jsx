import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import backgroundImage from '../../../assets/images/getallbg.jpg';
import { FaPlus } from 'react-icons/fa'; 


const GetAll = () => {
  const [adverts, setAdverts] = useState([]); // Initialize as an empty array
  const navigate = useNavigate();

  // Fetch all added adverts from the API or local storage
  useEffect(() => {
    // You can replace this with your API call if fetching from a server
    axios.get('/api/adverts') // Replace with your API endpoint
      .then(response => {
        // Ensure response data is an array before setting it
        if (Array.isArray(response.data)) {
          setAdverts(response.data);
        } else {
          setAdverts([]); // Default to an empty array if response isn't an array
        }
      })
      .catch(error => console.error('Error fetching adverts:', error));
  }, []);

  // Function to delete an advert
  const handleDelete = (id) => {
    // Replace with actual API call for deletion
    axios.delete(`/api/adverts/${id}`) // Replace with your API endpoint
      .then(() => {
        // Update state after deleting the advert
        setAdverts(adverts.filter(advert => advert.id !== id));
      })
      .catch(error => console.error('Error deleting advert:', error));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-8 top-14"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      
      {/* Plus Button to Add Advert */}
      <button
        className="absolute top-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600"
        onClick={() => navigate("addform")}
      >
        <FaPlus className="text-2xl" />
      </button>

      <div className='flex justify-center mb-6'><h1 className="text-3xl font-bold text-white bg-orange-500 border border-purple-700 
             rounded-md py-2 px-4 inline-block shadow-lg">Your Adverts</h1></div>

      {adverts.length === 0 ? (
        <p className="text-center text-xl text-white">No added adverts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {adverts.map((advert) => (
            <div key={advert.id} className="bg-white rounded-lg shadow-lg p-4">
              {/* Clickable image leading to the single advert details page */}
              <img
                src={advert.imageUrl} // Replace with your image URL field
                alt={advert.title}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => navigate(`/advert/${advert.id}`)} // Route to single advert details page
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{advert.title}</h2>
                <p className="text-gray-600 mt-2">{advert.description}</p>

                {/* Update and Delete buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => navigate(`/advert/update/${advert.id}`)} // Route to update page
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(advert.id)} // Handle advert deletion
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
                
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAll;
