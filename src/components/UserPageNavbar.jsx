import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faHeart,
    faMagnifyingGlass,
    faUser,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
const UserNavbar = () => {
    const handleClick = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("flex");
        dropdown.classList.toggle("flex-col");
    };
    return (
        <div className="h-[10%] flex justify-between p-4 border shadow-md bg-[white] fixed top-0 left-0 right-0 z-10 text-[#4C4C4C]">
            <a href="../components/Header.jsx">
                <h2 className="text-[2em] text-[#9932CC] font-extrabold text-center">tudu.com</h2>
            </a>

            <ul className="flex justify-between align-center w-[20%] font-bold">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">Categories</a>
                </li>
                <li>
                    <a href="/about">View Ads</a>
                </li>
            </ul>


            <ul className="flex justify-between align-center gap-[5%] w-[25%] ">
                <li>
                    <FontAwesomeIcon icon={faHeart} className="text-[1.5em] text-[#9932CC]" />

                </li>
                <li>
                    <FontAwesomeIcon icon={faRightFromBracket} className="text-[1.5em] text-[#9932CC]" />
                </li>
                <li>
                    <button onClick={handleClick}><FontAwesomeIcon icon={faUser} className="text-[1.5em] text-[#9932CC]" /></button>
                    <div id="dropdown" className="p-[2em] w-[100%] h-[5em] border shadow-md hidden z-10">

                        <ul className="h-[100%]">
                            <li>Profile</li>
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
