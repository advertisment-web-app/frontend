import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserFooter = () => {
    return (
        <section id="footer-section" className="h-[30vh] bg-[#9932CC]">
            <div className="h-[80%] w-[80%] ml-[10%] flex justify-between align-center">
                <div className="w-[30%]">
                    <h2 className="text-[3em] text-[white] font-extrabold text-center mt-[10%]">tudu.com</h2>
                    
                </div>
                <div id="footer-btns" className="w-[30%] h-[100%]">
                {/* <button className="mr-16 mt-[1em] h-[3em] w-[8em] rounded-sm bg-[white] font-medium ">Download CV</button> */}
                <Link to="/vendorsignup"><button className="mr-16 mt-[13%] h-[3em] w-[10em] rounded-sm bg-[white] font-medium ">Become a vendor</button></Link>
                
                
                </div>
                <div id="footer-icons" className="w-[30%] text-[white] py-[0.5em]">
                    <div className="mb-[0.5em]"><h3 className="text-[1.5em]">Contact the support team</h3></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faEnvelope} className="mr-[1em]" />tuducomads@gmail.com</p></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faPhone} className="mr-[1em]" />+233 555 5544</p></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faLocationDot} className="mr-[1em]" />Osu, Accra</p></div>
                    
                </div>
            </div>
            <p className="text-center text-[white]">Copyright ©2024 All rights reserved | This website is made by JB3</p>
        </section>
    )
}
export default UserFooter;