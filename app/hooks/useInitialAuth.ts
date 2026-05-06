import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { fetchUser, restoreSession } from "../api/auth.api";

export const useInitialAuth = () => {
  const { setUser, logout, setInitialized, isInitialized } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "sans-regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (!fontsLoaded) return;

        const refreshToken = await SecureStore.getItemAsync("refreshToken");
        
        if (refreshToken) {
          // Attempt to restore session
          const data = await restoreSession();
          
          if (data.accessToken) {
            await SecureStore.setItemAsync("accessToken", data.accessToken);
            if (data.refreshToken) {
                await SecureStore.setItemAsync("refreshToken", data.refreshToken);
            }
            
            // Fetch user data
            const userData = await fetchUser();
            setUser(userData.user);
          }
        }
      } catch (error) {
        console.error("Initial Auth Error:", error);
        await logout();
      } finally {
        if (fontsLoaded) {
          setInitialized(true);
          await SplashScreen.hideAsync();
        }
      }
    };

    initializeApp();
  }, [fontsLoaded]);

  return { isLoaded: fontsLoaded && isInitialized };
};
