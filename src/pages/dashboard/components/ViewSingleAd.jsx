import { useState, useEffect } from "react";
import UserNavbar from "../../../components/UserPageNavbar"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import ClickToCall from "./ClickToCall";
import ClicktoWhatsapp from "./ClicktoWhatsapp";



const ViewSingleAd = () => {
    const { id } = useParams();
    const [adverts, setAdverts] = useState(null);
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) {
                    toast.error("Authorization token missing.");
                    return;
                }
                const response = await axios.get(
                    `https://backend-5kai.onrender.com/getad/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                );
                setAdverts(response.data);
            } catch (error) {
                toast.error("Failed to fetch advert details");
                console.error("Error fetching ad details: ", error);
            }
        }; fetchAds();
    }, [id]);
    if (!adverts) return <div className="text-center">Loading....</div>

    return (
        <section className="h-[100vh]">
            <UserNavbar />
            <div className="mt-[10%] w-[90%] h-[70%] ml-[5%] flex">
                <div className="w-[50%] border h-[100%] mr-[10%]" >
                    <img
                        className="h-[100%] w-[100%]"
                        src={adverts.img}
                        alt={adverts.title} />

                </div>
                <div className="w-[40%] h-[100%]">
                    <div className="flex flex-col w-[70%] ml-[15%]">
                        <h3 className="text-[2em] font-semibold mb-[0.5em]">{adverts.title}</h3>
                        <p className="mb-[0.5em]">{adverts.description}</p>
                        <p className="text-[2.2em] text-[#9932CC] font-semibold">${adverts.price}</p>
                    </div>
                    <div className="mt-[5%] h-[50%] w-[100%]">
                        <p className="text-center text-[1em] font-medium">Reach the Vendor</p>
                        <button className="font-extrabold p-[0.5em] w-[70%] ml-[15%] border mb-[5%] rounded-md text-[2em] text-[white] bg-[#9932CC]"><ClicktoWhatsapp/></button>
                        <button className="font-extrabold p-[0.5em] w-[70%] ml-[15%] border rounded-md text-[2em] text-[white] bg-[#9932CC]"><ClickToCall/></button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ViewSingleAd;