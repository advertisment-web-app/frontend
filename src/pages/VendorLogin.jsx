import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiVendorLogin } from "../services/vendorLogin";
import { toast } from "react-toastify";

const VendorLogin = () => {
  //to navigate to dashboard after login
  const navigate = useNavigate();

  //usestate to show logging in on button
  const [logging, setLogging] = useState(false);

  //function to submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogging(true);

    //function to collect form data
    const form = event.target;
    const formData = new FormData(form);

    //convert form data to objects
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await apiVendorLogin(data);
      console.log("Response:", response.data); // Log the response data
      if (response.status === 200 || response.status === 201) {
        const token = response.data.accessToken; // Changed from token to accessToken


        // Save token in local storage
        localStorage.setItem("token", token);


        toast.success("You have logged in successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      setLogging(false);
      toast.error("Failed to log in. Please try again.");
    }
  };

  return (
    <section id="vendorLogin" className="h-[100vh] pt-[7%] text-[#4C4C4C]">
      <div className="h-[90%] bg-[white] shadow-lg w-[70%] border ml-[15%] rounded-xl flex justify-between">
        <div className="w-[40%] border h-[95%] mt-[1.5%] ml-[1em] rounded-xl , registerSide"></div>
        <div className="w-[50%] flex flex-col ">
          <div className="h-[95%] w-[95%] ml-[1.5%] mt-[1.5%]">
            <h2 className="text-[1.5em] font-bold mb-[1em] text-[black]">
              Log In
            </h2>
            <div className="w-[100%] h-[15%] mb-[1em] flex justify-between">
              <div className="border h-[70%] w-[60%] py-[0.5em] mr-[1em] rounded-md">
                <Link>Continue with Google</Link>
              </div>
              <div className="border h-[70%] w-[60%] py-[0.5em] rounded-md">
                <Link>Continue with Apple</Link>
              </div>
            </div>
            <hr />
            <h2 className=" font-semibold bg-[white] mt-[-0.8em] w-[10%] px-[8px] h-[5%] ml-[45%]">
              OR
            </h2>
            <form
              className="h-[60%] p-[0.5em] flex flex-col"
              onSubmit={handleSubmit}
            >
              <label htmlFor="username">Enter email</label>
              <input
                type="email"
                name="email"
                className="rounded-md border w-[100%] h-[15%] mb-[0.5em]"
              />

              <label htmlFor="username">Enter password</label>
              <input
                type="password"
                name="password"
                className="rounded-md border w-[100%] h-[15%]"
              />

              <button
                type="submit"
                disabled={logging}
                className="pb-[0.4em] h-[15%] mt-[1em] w-[100%] border font-extrabold text-[1.2em] text-[white] bg-[#9932CC] rounded-md"
              >
                {logging ? "Logging In..." : "Log In"}
              </button>
            </form>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="text-[#9932CC]" to="/vendorsignup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorLogin;
