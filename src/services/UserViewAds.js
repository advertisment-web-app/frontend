import { apiClient } from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt,faPlug,faCouch,faPalette,faPaintbrush,faGamepad,faBook,faDumbbell, faBurger } from "@fortawesome/free-solid-svg-icons";

export const apiUserViewAds =async()=>{


   return apiClient.get("/getallad");
    
};

const C={
    CATEGORIES:[
        {
            icon:faShirt,
            text:"Clothing and accessories"
        },
        {
            icon:faPlug,
            text:"Electronics and Gadgets"
        },
        {
            icon:faCouch,
            text:"Home and Living"
        },
        {
            icon:faPalette,
            text:"Beauty and Personal Care"
        },
        {
            icon:faPaintbrush,
            text:"Handmade and Craft Items"
        },
        {
            icon:faGamepad,
            text:"Toys and Outdoor"
        },
        {
            icon:faBook,
            text:"Books and Stationery"
        },
        {
            icon:faDumbbell,
            text:"Health and Fitness"
        },
        {
            icon:faBurger,
            text:"Food and Beverages"
        }
        
    ]}
    export default C;
