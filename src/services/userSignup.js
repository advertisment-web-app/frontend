import { apiClient } from "./config"

export const apiUserSignup = async (payload) => {
    return await apiClient.post("/register", payload)
}