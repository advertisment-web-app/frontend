import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="h-[10%] flex justify-between p-4 border shadow-md bg-white fixed top-0 left-0 right-0 z-10 text-[#4C4C4C]">
      <a href="/dashboard">
        <h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold">tudu.com</h1>
      </a>
      <ul className="flex justify-between align-center w-[30%] font-bold">
        <li><a href="/dashboard">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/getalladverts">Ads</a></li>
        <li><a href="/dashboard/prices">Pricing</a></li>
        <li><a href="/resources">Resources</a></li>
      </ul>
      <ul className="flex justify-between align-center gap-[5%] w-[20%]">
        <li>
          <a href="mailto:joycerhoda22@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-[1.2em]" />
          </a>
        </li>
        <li>
          <a href="https://maps.app.goo.gl/udajKJXg86kpCnST9" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLocationDot} className="text-[1.2em]" />
          </a>
        </li>
        <li>
          <a href="tel:+233553068108">
            <FontAwesomeIcon icon={faPhone} className="text-[1.2em]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
