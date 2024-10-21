import { useState } from "react";
import { apiVendorSignup } from "../services/vendorSignup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VendorSignUp = () => {
  //function to navigate to login page after submission
  const navigate = useNavigate();
  
  // usestate to show logging in on button
  const [loading,setLoading] = useState(false);
  // function to submit form
   const handleSubmit = async (event)=>{
    event.preventDefault();
    setLoading(true);
    // function to collect form data
    const form = event.target;
    const formData=new FormData(form);

// convert form data to objects
    const data ={
      firstname:formData.get("firstname"),
      lastname:formData.get("lastname"),
      email:formData.get("email"),
      password:formData.get("password"),
      role:"vendor"
    }
    try{
      const response = await apiVendorSignup(data);
      if(response.status===200 || response.status===201){
        toast.success("Account created successfully");
        navigate("/vendorlogin");
      }}
      catch(error){
        setLoading(false);
        toast.error("Failed to create account. Please try again")
      }
    };

  return (
    <section id="vendorSignup" className="h-[100vh] pt-[7%]">
      <div className="h-[90%] bg-[white] shadow-lg w-[70%] border ml-[15%] rounded-xl flex justify-between">
        <div className="w-[40%] border h-[95%] mt-[1.5%] ml-[1em] rounded-xl " id="vendorInnerSide">

        </div>
        <div className="w-[50%] flex flex-col ">
          <div className="h-[95%] w-[95%] ml-[1.5%] mt-[1.5%]">
            <h2 className="text-[1.5em] font-bold mb-[1em] text-[black]">Create an account with us.</h2>
            <div className="w-[100%] h-[15%] mb-[1em] flex justify-between">
              <div className="border h-[70%] w-[60%] py-[0.5em] mr-[1em] rounded-md"><Link>Continue with Google</Link></div>
              <div className="border h-[70%] w-[60%] py-[0.5em] rounded-md"><Link>Continue with Apple</Link></div>
            </div>
            <hr />
            <h2 className=" font-semibold bg-[white] mt-[-0.8em] w-[10%] px-[8px] h-[5%] ml-[45%]">OR</h2>
            <form className="h-[60%] p-[0.5em] flex flex-col" onSubmit={handleSubmit}>
              {/* <label htmlFor="username">Enter username</label>
              <input type="text" name="username" className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"/> */}

              <label>Enter username</label>
              <div className="h-[20%]">
                <input type="text" 
                name="firstname"  
                placeholder="First name" 
                className="rounded-md border w-[45%] h-[80%] mb-[0.5em] mr-[10%]" />
                
                <input type="text" 
                name="lastname" 
                placeholder="Last name" 
                className="rounded-md border w-[45%] h-[80%] mb-[0.5em]" />
              </div>

              <label htmlFor="email">Enter email</label>
              <input
               type="email"
               name="email"
               className="rounded-md border w-[100%] h-[15%] mb-[0.5em]" 
               required/>

              <label htmlFor="password">Enter password</label>
              <input type="password" 
              name="password" 
              className="rounded-md border w-[100%] h-[15%]" 
              required/>

              <button 
              type="submit" 
              disabled={loading}
              className="pb-[0.4em] h-[15%] mt-[1em] w-[100%] border font-extrabold text-[1.2em] text-[white] bg-[#9932CC] rounded-md">
                {loading ? "Creating account..." : "Create account"}
                </button>
            </form>
            <p className="text-center">Already have an account? <Link className="text-[#9932CC]" to="/vendorlogin">Sign in</Link></p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VendorSignUp;