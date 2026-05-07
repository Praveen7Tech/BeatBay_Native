// import { googleSignin } from "@/api/auth.api";
// import { useAuthStore } from "@/store/useAuthStore";
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { useMutation } from "@tanstack/react-query";
// import { router } from "expo-router";
// import * as SecureStore from 'expo-secure-store';
// import { Alert } from "react-native";

// export const useGoogleAuth = ()=>{
//     const setUser = useAuthStore((state)=> state.setUser)

//     GoogleSignin.configure({
//         webClientId:"498052194353-295dj5vlfu0frpvoohbt37q6u6826qtf.apps.googleusercontent.com",
//         offlineAccess: true
//     })

//     const mutation = useMutation({
//         mutationFn: (token: string)=> googleSignin(token),
//         onSuccess: async (data)=>{
//             await SecureStore.setItemAsync("accessToken", data.accessToken);
//             await SecureStore.setItemAsync("refreshToken", data.refreshToken);
//             setUser(data.user);
//             router.replace("/(tabs)/home");
//         },
//         onError:(error)=>{
//             Alert.alert(error.message)
//         }
//     })

//     const signIn = async()=>{
//         try {
//             await GoogleSignin.hasPlayServices()
//             const userInfo  = await GoogleSignin.signIn();
//             const idToken = userInfo.data?.idToken

//             if(idToken){
//                 mutation.mutate(idToken)
//             }
//         } catch (error:any) {
//             if(error.code === statusCodes.SIGN_IN_CANCELLED){
//                 console.error(" google signIn cancelled : ", error)
//             }else if(error.code === statusCodes.IN_PROGRESS){
//                 console.error(" google signin progress : ", error)
//             }else{
//                 console.log("Detailed Error:", JSON.stringify(error, null, 2));
//             }
//         }
//     }

//     return {signIn, isPending: mutation.isPending}
// }