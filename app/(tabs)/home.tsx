import { router } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { queryClient } from "../providers/QueryProvider";
import { useAuthStore } from "../store/useAuthStore";

const SafeAreaView = styled(RNSafeAreaView);

const Home = () => {
  const LogOut =  useAuthStore((state)=> state.logout)

  const HnaldeLogout = async()=>{
    try {
      LogOut()

      router.replace("/")

      queryClient.clear()
    } catch (error) {
      console.error("error in logout ",error)
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center px-5">
        <Text className="text-white text-2xl font-sans-bold mb-6">
          Home Page
        </Text>
        <Pressable onPress={HnaldeLogout} className="bg-primary px-8 py-4 rounded-full">
          <Text className="text-black font-sans-bold">
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;