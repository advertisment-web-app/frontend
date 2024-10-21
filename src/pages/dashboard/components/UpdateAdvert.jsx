import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../../../assets/images/update.jpg';

const UpdateAdvert = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState(''); // Set this to the logged-in user
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const { id } = useParams(); // Get advert ID from URL params
  const navigate = useNavigate();

  // Fetch advert details when the component mounts
  useEffect(() => {
    axios.get(`/api/adverts/${id}`)
      .then((response) => {
        const advert = response.data;
        setTitle(advert.title);
        setDescription(advert.description);
        setUser(advert.user);
        setDate(advert.date);
        setPrice(advert.price);
        setPreview(advert.image);
      })
      .catch((error) => {
        console.error('Error fetching advert details:', error);
        setAlertMessage('Failed to load advert details.');
        setAlertType('error');
      });
  }, [id]);

  // Handling image change and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    }
  };

  // Handling form submission to update advert
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !user || !date || !price) {
      setAlertMessage('Please fill in all fields.');
      setAlertType('error');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('user', user);
    formData.append('date', date);
    formData.append('price', price);

    if (image) {
      formData.append('image', image); // Add image only if it was changed
    }

    // Make the PUT request to update the advert
    axios.put(`/api/adverts/${id}`, formData)
      .then(() => {
        setAlertMessage('Advert updated successfully!');
        setAlertType('success');
        setTimeout(() => navigate('/getall'), 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        console.error('Error updating advert:', error);
        setAlertMessage('Failed to update advert.');
        setAlertType('error');
      });
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center mt-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[40%] p-8 bg-white bg-opacity-50 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Update Advert</h2>

        {/* Stylish Alert */}
        {alertMessage && (
          <div
            className={`p-4 mb-4 text-white font-bold rounded-lg transition-all duration-500 ${
              alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {alertMessage}
          </div>
        )}

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
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
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
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600"
            >
              Update Advert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdvert;
