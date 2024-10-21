// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";



// const UserSignUp = () => {
// // create state to capture form data
// const [formData, setFormData]=useState({
//   firstname:"",
//   lastname:"",
//   email:"",
//   password:"",
  
// });

// const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

// // update form state when input changes
// const handleInputChange=(event)=>{
//   const {name,value}=event.target;
//   setFormData({
//     formData,
//     [name]:value,
//   });
// };
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   setLoading(true);
//   setError(null);

//   try {
//     // Call the API function to submit the form data
//     const response = await apiUserSignup(formData);
//     setLoading(false);

//     // Handle success (e.g., redirect to a login page or show success message)
//     if (response.status === 200 || response.status === 201) {
//       alert("Account created successfully!");
//       navigate("/"); // Redirect to home page after signup
//     }
//   } catch (err) {
//     setLoading(false);
//     setError("Failed to create account. Please try again.");
//   }
// };
//   return (
//     <section className="h-[100vh] bg-[#F8EEEC] pt-[7%]">
//       <div className="h-[90%] bg-[white] shadow-lg w-[70%] border ml-[15%] rounded-xl flex justify-between">
//         <div className="w-[40%] border h-[95%] mt-[1.5%] ml-[1em] rounded-xl , registerSide">

//         </div>
//         <div className="w-[50%] flex flex-col ">
//           <div className="h-[95%] w-[95%] ml-[1.5%] mt-[1.5%]">
//             <h2 className="text-[1.5em] font-bold mb-[1em] text-[black]">Create an account with us.</h2>
//             <div className="w-[100%] h-[15%] mb-[1em] flex justify-between">
//               <div className="border h-[70%] w-[60%] py-[0.5em] mr-[1em] rounded-md"><Link>Continue with Google</Link></div>
//               <div className="border h-[70%] w-[60%] py-[0.5em] rounded-md"><Link>Continue with Apple</Link></div>
//             </div>
//             <hr />
//             <h2 className=" font-semibold bg-[white] mt-[-0.8em] w-[10%] px-[8px] h-[5%] ml-[45%]">OR</h2>
//             <form className="h-[60%] p-[0.5em] flex flex-col" onSubmit={handleSubmit}>
//               {/* <label htmlFor="username">Enter username</label>
//               <input type="text" name="username" className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"/> */}
              
//                 <label>Enter username</label>
//                 <div className="h-[20%]">
//                 <input  
//                 value={formData.firstname} 
//                 onChange={handleInputChange} 
//                 type="text"
//                  name="first-name" 
//                  placeholder="First name" 
//                 className="rounded-md border w-[45%] h-[80%] mb-[0.5em] mr-[10%]" />
//                 <input value={formData.lastname}
//                  onChange={handleInputChange} 
//                  type="text" 
//                  name="last-name"
//                   placeholder="Last name"
//                    className="rounded-md border w-[45%] h-[80%] mb-[0.5em]" />
//               </div>

//               <label htmlFor="email">Enter email</label>
//               <input 
//               value={formData.email} 
//               onChange={handleInputChange} 
//               type="email" 
//               name="email" 
//               className="rounded-md border w-[100%] h-[15%] mb-[0.5em]" required/>

//               <label htmlFor="password">Enter password</label>
//               <input 
//               value={formData.password} 
//               onChange={handleInputChange}
//                type="password" 
//                name="password"
//               className="rounded-md border w-[100%] h-[15%]" />

//               <button type="submit" className="pb-[0.4em] h-[15%] mt-[1em] w-[100%] border font-extrabold text-[1.2em] text-[white] bg-[#9932CC] rounded-md" disabled={loading} >Create account</button>
//             </form>
//             <p className="text-center">Already have an account? <Link className="text-[#9932CC]" to="/userlogin">Sign in</Link></p>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default UserSignUp;






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUserSignup } from "../services/userSignup";
import { toast } from "react-toastify";

const UserSignUp = () => {
  const navigate = useNavigate();

  // Step 1: Define state for form inputs, initialize with empty strings
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'user'
  });

  // usestate to show creating account in on button
  const [loading, setLoading] = useState(false);

  // Step 2: Update form state when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setError(null);

    try {
      const response = await apiUserSignup(formData);
      if (response.status === 200 || response.status === 201) {
        toast.success("Account created successfully!");
        navigate("/userlogin");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <section className="h-[100vh] bg-[#F8EEEC] pt-[7%]">
      <div className="h-[90%] bg-[white] shadow-lg w-[70%] border ml-[15%] rounded-xl flex justify-between">
        <div className="w-[40%] border h-[95%] mt-[1.5%] ml-[1em] rounded-xl , registerSide"></div>
        <div className="w-[50%] flex flex-col">
          <div className="h-[95%] w-[95%] ml-[1.5%] mt-[1.5%]">
            <h2 className="text-[1.5em] font-bold mb-[1em] text-[black]">Sign Up as a User</h2>
            <div className="w-[100%] h-[15%] mb-[1em] flex justify-between">
              <div className="border h-[70%] w-[60%] py-[0.5em] mr-[1em] rounded-md">
                <Link>Continue with Google</Link>
              </div>
              <div className="border h-[70%] w-[60%] py-[0.5em] rounded-md">
                <Link>Continue with Apple</Link>
              </div>
            </div>
            <hr />
            <h2 className=" font-semibold bg-[white] mt-[-0.8em] w-[10%] px-[8px] h-[5%] ml-[45%]">OR</h2>

            <form className="h-[60%] p-[0.5em] flex flex-col" onSubmit={handleSubmit}>
              <label>Enter username</label>
              <div className="h-[20%]">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  className="rounded-md border w-[45%] h-[80%] mb-[0.5em] mr-[10%]"
                  value={formData.firstname || ''}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  className="rounded-md border w-[45%] h-[80%] mb-[0.5em]"
                  value={formData.lastname || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <label htmlFor="email">Enter email</label>
              <input
                type="email"
                name="email"
                className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"
                value={formData.email || ''}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="password">Enter password</label>
              <input
                type="password"
                name="password"
                className="rounded-md border w-[100%] h-[15%]"
                value={formData.password || ''}
                onChange={handleInputChange}
                required
              />

              <button
                type="submit"
                className="pb-[0.4em] h-[15%] mt-[1em] w-[100%] border font-extrabold text-[1.2em] text-[white] bg-[#9932CC] rounded-md"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </form>

            {/* {error && <p className="text-red-500">{error}</p>} */}

            <p className="text-center">
              Already have an account? <Link className="text-[#9932CC]" to="/userlogin">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSignUp;
