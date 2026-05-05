import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { queryClient } from "./providers/QueryProvider";
import { useAuthStore } from "./store/useAuthStore";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const store = useAuthStore((state)=> state.user)
  
  console.log("zuz store : ", store)

  const [fontsLoaded] = useFonts({
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  })

  useEffect(()=>{
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#000",
          },
          animation: "slide_from_right",
        }}
      />
    </QueryClientProvider>
  );
}
