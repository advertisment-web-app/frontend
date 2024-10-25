import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faHeart,
    faUser,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
    const navigate=useNavigate();
    const handleClick = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("flex");
        dropdown.classList.toggle("flex-col");
    };
    const handleLogout=(token)=>{
        localStorage.removeItem("token",token)
        
        navigate("/userlogin");
    }

    return (
        <div className="h-[10%] flex justify-between p-4 border shadow-md bg-[white] fixed top-0 left-0 right-0 z-10 text-[#4C4C4C]">
            <a href="../components/Header.jsx">
                <h2 className="text-[2em] text-[#9932CC] font-extrabold text-center flex justify-center items-center">tudu.com</h2>
            </a>

            <ul className="flex justify-between align-center w-[20%] font-bold">
                <li>
                    <a href="/userviewads">Home</a>
                </li>
                {/* <li>
                    <a href="">Categories</a>
                </li>
                <li>
                    <a href="/about">View Ads</a>
                </li> */}
            </ul>


            <ul className="flex justify-between align-center gap-[5%] w-[25%] ">
                <li>
                    <FontAwesomeIcon icon={faHeart} className="text-[1.5em] text-[#9932CC]" />

                </li>
                <li>
                    <button onClick={handleLogout} >
                    <FontAwesomeIcon icon={faRightFromBracket} className="text-[1.5em] text-[#9932CC]" />
                    </button>
                </li>
                <li>
                    <button onClick={handleClick}><FontAwesomeIcon icon={faUser} className="text-[1.5em] text-[#9932CC]" /></button>
                    <div id="dropdown" className="p-[2em] w-[100%] h-[5em] border bg-[#E2A53F]  shadow-md hidden z-1">

                        <ul className="h-[100%]">
                            
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>

                </li>

                {/* <button className="text-[white]  h-[2em] w-[6em] px-[1.5em] bold bg-black font-medium">CONTACT</button> */}
            </ul>
        </div>
    );
};

export default UserNavbar;
