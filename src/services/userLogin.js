import { apiClient } from "./config"

export const apiUserLogin = async (payload)=>{
    return apiClient.post("/login",payload);

}


//const baseUrl = import.meta.......
// const token = localStorage.getItem("token")
// if (token) {
//     apiClient.defaults.headers.common["Authorization"]=`Bearer ${token}`
// }
// export const apiClient = axios.create({
// baseURL:baseUrl,
// })


