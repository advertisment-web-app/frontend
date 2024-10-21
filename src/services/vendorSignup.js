import { apiClient } from "./config";
export const apiVendorSignup = (payload)=>{
    return apiClient.post("register",payload);
}