import * as SecureStore from "expo-secure-store";
import { User } from "../store/useAuthStore";
import { api } from "./axiosInstance";

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const loginApi = async(data:LoginPayload): Promise<LoginResponse>=>{
    console.log("api call start")
    const response = await api.post("/user/login", data);
    return response.data;
}

export const restoreSession = async () => {
  const refreshToken = await SecureStore.getItemAsync("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token");
  }
  const response = await api.post( "/user/auth-status",{refreshToken,});
  return response.data;
};

