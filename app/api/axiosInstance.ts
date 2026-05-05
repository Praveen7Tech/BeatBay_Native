import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const api = axios.create({
    baseURL: 'http://192.168.1.38:5000',
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


api.interceptors.response.use((response)=> response,
    async(error)=>{
        const originalRequest = error.config;
        console.log("error response : ", originalRequest.url)

        if(error.response.status === 401 && !originalRequest._retry){
           if(originalRequest.url.includes('/user/auth-status')){
            console.log("refresh api again called need to logout")
            return Promise.reject(error)
           }

           originalRequest._retry =  true;

           try {
                const currentRefreshToken = await SecureStore.getItemAsync("refreshToken")
                const response =  await axios.get('/user/auth-status',{currentRefreshToken})
                const {accessToken, refreshToken} = response.data;

                if(response.data){
                    //await SecureStore.setItem("accessToken", accessToken)
                    await SecureStore.setItem("refreshToken", refreshToken)
                    
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`
                    return api(originalRequest)    
                }else{
                    console.log("logout")
                    return Promise.reject(error)
                }
            
           } catch (error) {
                console.log("Error in api response logout",error)
                return Promise.reject(error)
           }
        }
    }
)