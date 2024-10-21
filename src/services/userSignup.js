import { apiClient } from "./config"

export const apiUserSignup = (payload) => {
    return apiClient.post("/register", payload)
}