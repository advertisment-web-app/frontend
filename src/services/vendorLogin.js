import { apiClient } from "./config"
export const apiVendorLogin = async (payload)=>{
   return apiClient.post("/login",payload);
};