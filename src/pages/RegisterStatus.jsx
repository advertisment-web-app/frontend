import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


const RegisterStatus = () => {
    const navigate = useNavigate();
    const[userType, setUserType] = useState("user");
    // const[userType, setUserType] = useState("user");
    const handleContinue = () =>{
        if (userType === "vendor"){
            navigate("/vendorsignup");
        }
        else{
            navigate("/usersignup");
        }
    };
    return (
        <section className="registerStatus">
            <div className="bg-[white] h-[90%] w-[40%] ml-[5%] mr-auto border p-[2%] rounded-lg">
                <h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold mb-[0.7em]">LOGO</h1>
                <h2 className="text-[2em] text-[black] font-bold">Create an account with us.</h2>
                <p className="text-[1em] mb-[1em] text-[black]">Get started with us now, create and view amazing ads.</p>
                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    {/* Vendor selection */}
                    <input 
                     type="radio"
                     id="vendor" 
                     name="accountType"
                     value="vendor" 
                     
                     checked={userType === "vendor"}
                     onChange={()=>setUserType("vendor")}
                     className="accent-[#9932CC]"
                     />
                     <label className="text-[black] ml-[1em] text-[1.2em]" htmlFor="vendor">I am a vendor</label>
                    <p className="text-[0.8em] ml-[2em]">I want to create ads to sell my products.</p>
                </div>

                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    {/* User selection */}
                    <input type="radio"
                     id="user" 
                     name="accountType"
                     value="user"
                     checked={userType === "user"}
                     onChange ={() =>setUserType("user")}
                     className="accent-[#9932CC]"
                     />
                     <label className="text-[black] ml-[1em] text-[1.2em]" htmlFor="userStat">I am a user/viewer</label>
                    <p className="text-[0.8em] ml-[2em]">I want to view ads and make the right purchase.</p>
                </div>
                {/* <div className="h-[10%] w-[90%] font-extrabold border shadow-md rounded-md py-[0.5em] px-[30%] bg-[#9932CC] text-[white] text-center">
                    <Link to="/vendorsignup">Continue</Link>
                </div> */}
                <button type="button" onClick={handleContinue} className="h-[10%] w-[90%] font-extrabold border shadow-md rounded-md py-[0.5em] px-[30%] bg-[#9932CC] text-[white] text-center">Continue</button>

                {/* <Link to="/" className="text-[blue]">Go back</Link> */}
            </div>
        </section>
    )
}

export default RegisterStatus;