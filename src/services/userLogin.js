import { apiClient } from "./config"

export const apiUserLogin = async (payload)=>{
    return apiClient.post("/login",payload);

}