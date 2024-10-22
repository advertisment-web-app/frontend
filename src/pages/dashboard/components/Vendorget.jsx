import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import backgroundImage from '../../../assets/images/getallbg.jpg';
import { FaPlus } from 'react-icons/fa'; 

const VendorGet = () => {
  const [adverts, setAdverts] = useState([]);
  const navigate = useNavigate();
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTYzZjBkMjMyM2UzOGY4YjIxOWJlMCIsImlhdCI6MTcyOTUyMTk4OSwiZXhwIjoxNzI5NjA4Mzg5fQ.23G_68SFWt0vHWou3Obx9sScEtXU4i6ANDv4KSx1qDg';

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await axios.get('https://backend-5kai.onrender.com/getallad', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAdverts(response.data.filter(advert => advert.user === '6712df80df25face71f07e43')); // Replace with dynamic user ID
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };

    fetchAdverts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-5kai.onrender.com/ad/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdverts(adverts.filter(advert => advert.id !== id)); // Assuming `_id` is the correct field for ID
    } catch (error) {
      console.error('Error deleting advert:', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-8 top-14"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <button
        className="absolute top-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600"
        onClick={() => navigate("addform")}
      >
        <FaPlus className="text-2xl" />
      </button>

      <div className='flex justify-center mb-6'>
        <h1 className="text-3xl font-bold text-white bg-orange-500 border border-purple-700 rounded-md py-2 px-4 inline-block shadow-lg">
          Your Adverts
        </h1>
      </div>

      {adverts.length === 0 ? (
        <p className="text-center text-xl text-white">No added adverts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {adverts.map((advert) => (
            <div key={advert._id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={advert.img} 
                alt={advert.title}
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => navigate(`/advert/${advert.id}`)}
              />
              <div className="mt-4">
                <h2 className="text-xl font-bold">{advert.title}</h2>
                <p className="text-gray-600 mt-2">{advert.description}</p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => navigate(`/advert/update/${advert.id}`)} 
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

export default VendorGet;
