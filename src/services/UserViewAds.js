import { apiClient } from "./config";

export const apiUserViewAds =async()=>{


   return apiClient.get("/getallad");
    
};

