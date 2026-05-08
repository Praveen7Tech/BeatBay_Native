import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error('EXPO_PUBLIC_API_URL environment variable is required');
}

export const api = axios.create({
    baseURL: API_URL,
    headers:{
        'x-client-type': "mobile",
        'Content-Type': 'application/json'
    }
})


api.interceptors.request.use(async(config)=>{
    const accessToken = await SecureStore.getItemAsync("accessToken")
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
})


let isRefreshing = false
let failedQueue: { resolve: (value: unknown) => void; reject: (reason?: any) => void; }[] = []

const processQueue = (error:Error | null, token = null)=>{
    failedQueue.forEach((prom)=>{
        if(error) prom.reject(error);
        else prom.resolve(token)
    })

    failedQueue = []
}

api.interceptors.response.use(
    (response)=> response,
    async(error)=>{
        const originalRequest = error.config;
        console.log("error response : ", originalRequest.url)

        if(error.response?.status === 401 && !originalRequest._retry){
           if(isRefreshing){
            return new Promise((resolve,reject)=>{
                failedQueue.push({resolve, reject})
            }).then(token => {
                originalRequest.headers.Authorization = `Bearer ${token}`
                return api(originalRequest)
            })
           }

           originalRequest._retry =  true;
           isRefreshing = true

           try {
                const refreshToken = await SecureStore.getItemAsync("refreshToken")
                const response =  await api.post('/user/refreshToken',{refreshToken})
                
                const newAccessToken = response.data.accessToken
                const newRefreshToken = response.data.refreshToken
                await SecureStore.setItemAsync("accessToken", newAccessToken)

                if(newRefreshToken){
                    await SecureStore.setItemAsync("refreshToken", newRefreshToken)                     
                }

                processQueue(null,newAccessToken)
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest)
            
           } catch (error) {
                processQueue(error as Error,null)

                await SecureStore.deleteItemAsync("accessToken")
                await SecureStore.deleteItemAsync("refreshToken")
                console.log("Error in api response logout",error)
                return Promise.reject(error)
           }finally{
                isRefreshing = false
           }
           
        }

        const errorMessage = error.response?.data?.message || "An unexpected error occurred";
        const flattenedError = new Error(errorMessage);
        return Promise.reject(flattenedError)
    }
)