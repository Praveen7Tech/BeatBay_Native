import { MediaSection } from "@/components/MediaCard";
import { navOptions, SongList } from "@/constants/data";
import { Users } from "@/constants/icons";
import { queryClient } from "@/providers/QueryProvider";
import { useAuthStore } from "@/store/useAuthStore";
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const categories = ["All", "Music", "Album"]

const Home = () => {
  const navigation = useNavigation();
  const LogOut = useAuthStore((state) => state.logout)
  const [tab, setTab] = useState("All")

  const HandleLogout = async () => {
    try {
      LogOut()

      router.replace("/")

      queryClient.clear()
    } catch (error) {
      console.log("error in logout ", error)
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView 
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:50}}
      >
        {/*category options  */}
        <View className="flex-row items-center px-4 pt-3 mb-4">
          <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image 
          source={Users.avathar} 
          className="w-10 h-10 rounded-full mr-3" 
        />
      </Pressable>
          <View className=" flex-row items-center gap-2 ">
            {categories.map((item) => {
              const isActive = tab === item
              return (
                <Pressable key={item} onPress={() => setTab(item)} className={`px-5 py-2 rounded-full ${isActive ? 'bg-primary' : "bg-zinc-600 border border-amber-50"}`}>
                  <Text className={`${isActive ? 'text-black' : 'text-white'}`}>{item}</Text>
                </Pressable>
              )
            })}
          </View>
        </View>

        {/*Nav options  */}
        <View className="flex-row flex-wrap justify-between gap-y-3 px-4">
          {navOptions.map((item) => (
            <View key={item.name}
              className="w-[48%] bg-zinc-800 rounded-md h-15 flex-row items-center overflow-hidden">
              <Image source={item.Image} className="w-16 h-15 rounded-md" resizeMode="cover" />
              <Text className="text-white font-sans-medium ml-3 flex-1">{item.name}</Text>
            </View>
          ))}
        </View>
        
          {/* songs and album list section */}
          <MediaSection
            title="Songs feature&apos;d for you"
            data={SongList}
          />
          <MediaSection
            title=" Albums featuring songs you like"
            data={SongList}
          />
          <MediaSection
            title=" Albums featuring songs you like"
            data={SongList}
          />
          <MediaSection
            title=" Albums featuring songs you like"
            data={SongList}
          />
        </ScrollView>

    </SafeAreaView>
  );
};

export default Home;