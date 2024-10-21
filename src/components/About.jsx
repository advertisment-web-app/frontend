import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/aboutbg.jpg";
import teamImage from "../assets/images/about.jpg"; 

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleHomeClick = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex bg-white bg-opacity-80 shadow-lg rounded-lg p-6 max-w-4xl">
        <div className="mr-6">
          <img
            src={teamImage}
            alt="Our Team"
            className="w-48 h-48 rounded-lg border-4 border-orange-500"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">About Our Advertising Agency</h2>
          <p className="mb-4">
            At Tudu.Com, we are committed to helping businesses reach their full potential through effective advertising strategies.
            <span className={showMore ? "block" : "hidden"}>
              Our team of experienced professionals is dedicated to creating innovative campaigns that engage audiences and drive results.
            </span>
          </p>
          <div className="flex justify-between mt-4">
          <button
            onClick={handleToggle}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
          <button
            onClick={handleHomeClick}
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
          >
            Home
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default About;
