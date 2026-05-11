import LoadingScreen from "@/components/LoadingScreen";
import useInitialAuth from "@/hooks/useInitialAuth";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { router, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { queryClient } from "../providers/QueryProvider";
import { useAuthStore } from "../store/useAuthStore";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isLoaded } = useInitialAuth();
  const user = useAuthStore((state) => state.user);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) return;

    if (user) {
      router.replace("/(tabs)/(home)/home");
    } else {
      router.replace("/");
    }
  }, [user, isInitialized]);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={DarkTheme}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#000000" },
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen 
              name="player/[id]"
              options={{
                presentation: "transparentModal", 
                animation: "slide_from_bottom",
                gestureEnabled: false, // Disable native OS gesture to use  custom one
                contentStyle: { backgroundColor: "transparent" }, 
              }} 
            />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}