import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { loginApi } from '../api/auth.api';
import { useAuthStore } from "../store/useAuthStore";

export const useLogin = () =>{
    const setAuth = useAuthStore((state)=> state.setAuth)
    return useMutation({
        mutationFn: loginApi,
        onSuccess: async(data)=>{
            //await SecureStore.setItemAsync("accessToken", data.accessToken)
            await SecureStore.setItemAsync("refreshToken", data.refreshToken)
            setAuth({user: data.user,accessToken: data.accessToken})

            router.replace("/(tabs)/home")
        },
        onError: (error)=>{
            console.error("error in login", error)
        }
    })
}

