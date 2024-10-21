import { apiClient } from "./config"
export const apiVendorLogin = (payload)=>{
   return apiClient.post("/login",payload)
}