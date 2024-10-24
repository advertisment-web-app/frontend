// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "../../assets/images/about.jpg"; 

// const UserSettings = () => {
//   const [profile, setProfile] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://backend-5kai.onrender.com/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(response.data);
//       } catch (error) {
//         toast.error("Failed to fetch profile");
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       await axios.patch("https://backend-5kai.onrender.com/update", profile, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       toast.success("Profile updated successfully!");
//       setTimeout(() => {
//         navigate("/userviewads");
//       }, 2000); // Navigate after 2 seconds
//     } catch (error) {
//       toast.error("Failed to update profile");
//       console.error("Error updating profile:", error);
//     }
//   };

//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete your profile?");
//     if (confirmDelete) {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.delete("https://backend-5kai.onrender.com/delete", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         toast.success("Profile deleted successfully!");
//         navigate("/userviewads"); // Navigate to the home page or login page after deletion
//       } catch (error) {
//         toast.error("Failed to delete profile");
//         console.error("Error deleting profile:", error);
//       }
//     }
//   };

//   return (
//     <div
//       className="h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="w-[40%] p-6 bg-white bg-opacity-50 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold mb-4 text-center">Settings</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="block mb-1">First Name</label>
//           <input
//             type="text"
//             name="firstname"
//             value={profile.firstname}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="block mb-1">Last Name</label>
//           <input
//             type="text"
//             name="lastname"
//             value={profile.lastname}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="block mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="block mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={profile.password}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-purple-800 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
//           >
//             Update Profile
//           </button>

//           <button
//             type="button"
//             onClick={handleDelete}
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-purple-800"
//           >
//             Delete Profile
//           </button>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default UserSettings;
