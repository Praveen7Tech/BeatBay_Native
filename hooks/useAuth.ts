import { loginApi, resendOtp, signUp, verifyOtp } from '@/api/auth.api';
import { useAuthStore } from '@/store/useAuthStore';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export const useLogin = () =>{
    const setUser = useAuthStore((state)=> state.setUser)
    return useMutation({
        mutationFn: loginApi,
        onSuccess: async(data)=>{
            await SecureStore.setItemAsync("accessToken", data.accessToken)
            await SecureStore.setItemAsync("refreshToken", data.refreshToken)
            setUser(data.user)
            router.replace("/(tabs)/(home)/home")
        },
        onError: (error)=>{
            console.error("error in login", error)
            Alert.alert(error.message)
        }
    })
}


export const useSignUp = () =>{
    return useMutation({
        mutationFn: signUp,
        onSuccess: async(data,variables)=>{
            router.replace({
                pathname: "/(auth)/verifyotp",
                params: { email: variables.email } 
            });
        },
        onError: (error)=>{
            console.log("error in login", error)
        }
    })
}


export const useVerifyOtp = () =>{
    return useMutation({
        mutationFn: verifyOtp,
        onSuccess: async(data)=>{
            router.replace("/(auth)/login")
        },
        onError: (error)=>{
            console.log("error in login", error)
        }
    })
}

export const useResendOtp = () =>{
    return useMutation({
        mutationFn: resendOtp,
        onSuccess: async(data)=>{
            Alert.alert(data.message)
        },
        onError: (error)=>{
            console.log("error in login", error)
        }
    })
}

