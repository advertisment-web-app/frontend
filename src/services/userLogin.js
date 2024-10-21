import { apiClient } from "./config"

export const apiUserLogin = async (payload)=>{
   return await apiClient.post("/login",payload);
  
}