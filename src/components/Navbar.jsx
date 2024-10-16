import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return (
        

        <div className="h-[10%] flex justify-between p-4 border shadow-md bg-[white] fixed top-0 left-0 right-0 z-10">
            <a href="../components/Header.jsx"><h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold">logo.</h1></a>
            <ul className="flex justify-between align-center w-[30%] font-bold">

                <li><a href="/">Home</a></li>
                <li><a href="../components/WebDevInfo.jsx">About</a></li>
                <li><a href="../components/Skills.jsx">Ads</a></li>
                <li><a href="../components/Portfolio.jsx">Pricing</a></li>
                <li><a href="../components/Footer.jsx">Resources</a></li>

            </ul>
            <ul className="flex justify-between align-center gap-[5%] w-[20%] ">
                <li><FontAwesomeIcon icon={faEnvelope} className="text-[1.2em]" /></li>
                <li><FontAwesomeIcon icon={faLocationDot} className="text-[1.2em]" /></li>
                <li><FontAwesomeIcon icon={faPhone} className="text-[1.2em]" /></li>

                {/* <button className="text-[white]  h-[2em] w-[6em] px-[1.5em] bold bg-black font-medium">CONTACT</button> */}
            </ul>
        </div>
    );
}

export default Navbar;
