import { useState } from "react";
import { Link } from "react-router-dom";


const RegisterStatus = () => {
    // create state for when radio button is selected
    const [selectedStatus, setSelectedStatus]=useState();
    // function to handle change when radio button is selected
    const handleStatusChange =(event)=>{
        setSelectedStatus(event.target.value);
    }
    //logic for conditional routing depending on selectedStatus
    const routeTo =()=>{
        if(selectedStatus==="vendor"){
            return "/vendorsignup";
        }
        else if(selectedStatus==="user"){
            return "/usersignup";
        }
       
    }
    return (
        <section className="registerStatus">
            <div className="bg-[white] h-[90%] w-[40%] ml-[5%] mr-auto border p-[2%] rounded-lg">
                <h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold mb-[0.7em]">LOGO</h1>
                <h2 className="text-[2em] text-[black] font-bold">Create an account with us.</h2>
                <p className="text-[1em] mb-[1em] text-[black]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    <input type="radio" value="vendor" id="vendorStat" name="statusradio" onChange={handleStatusChange} className="accent-[#9932CC]"/><label className="text-[black] ml-[1em] text-[1.2em]" for="vendorStat">I am a vendor</label>
                    <p className="text-[0.8em] ml-[2em]">I want to create ads to sell my products.</p>
                </div>
                <div className="h-[15%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                    <input type="radio" value="user" id="userStat" name="statusradio" onChange={handleStatusChange} className="accent-[#9932CC]"/><label className="text-[black] ml-[1em] text-[1.2em]" for="userStat">I am a user/viewer</label>
                    <p className="text-[0.8em] ml-[2em]">I want to view ads and make the right purchase.</p>
                </div>
                <div >
                    <Link to={routeTo()}><button className="h-[10%] w-[90%] font-extrabold border shadow-md rounded-md py-[0.5em] px-[30%] bg-[#9932CC] text-[white] text-center">Continue</button></Link>
                </div>

                {/* <Link to="/" className="text-[blue]">Go back</Link> */}
            </div>
        </section>
    )
}

export default RegisterStatus;