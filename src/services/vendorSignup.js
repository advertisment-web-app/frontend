import { apiClient } from "./config";
export const apiVendorSignup =async (payload)=>{
    return await apiClient.post("/register",payload);
}