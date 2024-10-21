import { apiClient } from "./config"

export const apiUserLogin = async (payload)=>{
    apiClient.post("/login",payload);
}