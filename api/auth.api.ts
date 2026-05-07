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

export interface SignupPayload{
  name: string;
  email: string;
  password: string
}


interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface VerifyOtpResponse {
  message: string;
}

export const loginApi = async(data:LoginPayload): Promise<LoginResponse>=>{
    const response = await api.post("/user/login", data);
    return response.data;
}

export const restoreSession = async () => {
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  if (!refreshToken) {
    throw new Error("No refresh token");
  }
  const response = await api.post( "/user/refreshToken",{refreshToken});
  return response.data;
};

export const fetchUser = async()=>{
  const response = await api.get("/user/fetchUser")
  return response.data
}

export const signUp = async(data: SignupPayload)=>{
  const response = await api.post("/user/signup",data)
  return response.data
}

export const verifyOtp= async (data: VerifyOtpRequest): Promise<VerifyOtpResponse> => {
    const response = await api.post<VerifyOtpResponse>("/user/verify-otp", data);
    return response.data;
}

export const resendOtp = async(email: string)=>{
    const response = await api.post<VerifyOtpResponse>("/user/resend-otp", {email});
    return response.data;
}

export const googleSignin = async(token: string)=>{
    const response = await api.post("/user/google-signup", {token});
    return response.data;
}