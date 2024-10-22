
import UserNavbar from "../../../components/UserPageNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { Link } from "react-router-dom";
import Footer from "../../../components/UserFooter";
import UserFooter from "../../../components/UserFooter";


const UserViewAds = () => {


    return (
        <section className="h-[100vh] w-[100%]">
            <UserNavbar />
            <div className="h-[50%] w-[90%] rounded-2xl mt-[7%] bg-[#F8EEEC] ml-[5%] mr-auto border">

            </div>
            <div className="flex"><p className="font-bold ml-[5%] mt-[2em]">Categories</p><p className="font-bold ml-[75%] mt-[2em]"><Link>Show more</Link></p></div>
            <div className="w-[90%] h-[15%] mt-[1em] border ml-[5%] mr-auto flex">
            </div>

            <div className="w-[50%] h-[10%] mt-[2em] ml-[25%]">
                <input type="text" placeholder="Search for an ad" className="border-[2px] rounded-3xl w-[90%] p-[0.5em] pl-[1em]" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[1.5em] text-[#9932CC] ml-[-2em]" />
            </div>

            <div className="h-[40%] w-[90%] mb-[10%]">
                <div className="flex"><p className="font-bold ml-[5%]">Most Recent</p><p className="font-bold ml-[75%] mt-[2em]"></p></div>
                <div className="w-[100%] h-[100%] mt-[1em] border ml-[5%] mr-auto flex"></div>
            </div>
            <UserFooter/>
        </section>
    )
}

export default UserViewAds;
