
import UserNavbar from "../../../components/UserPageNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import UserFooter from "../../../components/UserFooter";
import C from "../../../services/UserViewAds";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Pagination from "./Pagination";


const UserViewAds = () => {

    //useState to filter search
    const [filteredAdverts, setFilteredAdverts] = useState([]);

    // useState for search functionality
    const [searchTerm, setSearchTerm] = useState("");

    //useState to mount ads
    const [adverts, setAdverts] = useState([]);

    //useState for navigate
    const navigate=useNavigate();

    //useState for category selection
    const [selectedCategory, setSelectedCategory]=useState("")

    //useState for current page 
    const [currentPage,setCurrentPage]=useState(1);

    //useState for number of ads shown per page
    const [adsPerPage]=useState(6);

    //useState for selelcting random ads from adverts
    const [randomAd, setRandomAd]=useState(null);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("got token", token)
                if (!token) {
                    toast.error("Authorization token missing.");
                    return;


                }
                const response = await axios.get("https://backend-5kai.onrender.com/getallad",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,

                        },
                    }
                );
                setAdverts(response.data);
                setFilteredAdverts(response.data);
            } catch (error) {
                toast.error("Failed to fetch adverts");
                console.error("Couldn't fetch ads: ", error);
            }

        };
        fetchAds();
    }, []);

    //function to handle search
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        const filtered = adverts.filter(
            (advert) =>
                advert.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
                advert.category.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredAdverts(filtered);
    }
    //function to handle onclick to single ad
    const handleClick=(id)=>{
        navigate(`/user/singlead/${id}`)
    }

    //function to handle category click
    const categoryClick =(category)=>{
        setSelectedCategory(category);
        if(category){
            const filtered = adverts.filter((advert)=>advert.category.toLowerCase()===category.toLowerCase());
            setFilteredAdverts(filtered);
        }
         else{
            setFilteredAdverts(adverts);
         }
        }

    //function to handle pagination
    const handlePagination=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    //Get current ads to display based on pagination
    const indexOfLastAd=currentPage*adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    const currentAds = filteredAdverts.slice(indexOfFirstAd, indexOfLastAd);

    //useEffect for setting interval to change ads
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(adverts.length>0){
                const randomAd = adverts[Math.floor(Math.random()*adverts.length)];
                setRandomAd(randomAd);
            }
        },4000);
        return()=>clearInterval(interval);
    },[adverts]);
    return (
        <section className="h-[100vh] w-[100%]">
            <UserNavbar />
            <div className="h-[60%] w-[90%] rounded-2xl mt-[7%]  ml-[5%] mr-auto border">
                {
                    randomAd &&(
                        <div className="w-[100%] h-[100%]">
                            <img 
                            src={`https://savefiles.org/${randomAd.img}?shareable_link=464`}
                             alt={randomAd.title} 
                             className="w-[100%] h-[100%] object-cover rounded-2xl"/>
                        </div>
                    )
                }
            </div>
            <div className="flex"><p className="font-bold ml-[5%] mt-[2em]">Categories</p><p className="font-bold ml-[75%] mt-[2em]"></p></div>
            <div className="w-[90%] h-[20%] mt-[1em] ml-[5%] mr-auto flex gap-x-4">
                {
                    C.CATEGORIES.map((category, index) => {
                        
                        return (<button>
                            <div onClick={()=>categoryClick(category.text)} key={index} className="h-[100%] w-[100%] flex flex-col gap-x-4 justify-center items-center border shadow-md rounded-2xl">
                            <span className="">
                                <FontAwesomeIcon className=" text-[1.5em]" icon={category.icon} />
                            </span>
                            <p className="font-bold text-center">{category.text}</p>
                        </div>
                        </button>

                        )
                    })
                }

                
            </div>

            <div className="w-[50%] h-[10%] mt-[2em] ml-[25%]">
                <input type="text"
                    onChange={handleSearch}
                    value={searchTerm}
                    placeholder="Search for an ad by title or category"
                    className="border-[2px] rounded-3xl w-[90%] p-[0.5em] pl-[1em] focus:outline-none" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[1.5em] text-[#9932CC] ml-[-2em]" />
            </div>

            <div className="h-[100vh] w-[90%] ml-[5%] mb-[10%] grid grid-cols-3 gap-x-[1em] gap-y-[10%] p-[1em]">
                {/* <div className="flex"><p className="font-bold ml-[5%]">Most Recent</p><p className="font-bold ml-[75%] mt-[2em]"></p></div>
                <div className="w-[100%] h-[100%] mt-[1em] border ml-[5%] mr-auto flex">

                </div> */}

                {currentAds.map((advert) => (
                    <div
                        key={advert._id}
                        className="w-[100%] h-[100%] flex flex-col"
                        onClick={()=>handleClick(advert.id)}
                    >
                        <img
                            src={`https://savefiles.org/${advert.img}?shareable_link=464`}
                            alt={advert.title}
                            className="advert-image hover:cursor-pointer"
                        />
                        <div className="ml-[5%] h-[20%]">
                            <h2>{advert.title}</h2>
                            
                            <div className="flex gap-24">
                                <p className="font-bold">${advert.price}</p>
                                <p>
                                <FontAwesomeIcon icon={faHeart} className="text-[#9932CC] mr-[1em]"/>
                                
                                </p>
                            </div>

                        </div>
                    </div>

                ))}
            </div>
            <Pagination
            length={filteredAdverts.length}
            adsPerPage={adsPerPage}
            handlePagination={handlePagination}
            />



            <UserFooter />
        </section>
    )
}

export default UserViewAds;

