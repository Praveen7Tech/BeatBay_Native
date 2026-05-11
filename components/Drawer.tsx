import { Users } from "@/constants/icons";
import { queryClient } from "@/providers/QueryProvider";
import { useAuthStore } from "@/store/useAuthStore";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

const ProfileDrawer = () => {
      const LogOut = useAuthStore((state) => state.logout)
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
    <DrawerContentScrollView >
        <View className="p-6 pt-12">
            <View className="flex-row items-center mb-10">
                <Image source={Users.avathar} className="w-14 h-14 rounded-full" />
                <View className="ml-3">
                    <Text className="text-white text-xl font-sans-bold">Praveen</Text>
                    <Text className="text-zinc-500 text-sm">View Profile</Text>
                </View>
            </View>
            <View>
                <Pressable onPress={HandleLogout} className="px-4 py-2 border border-inputborder rounded=full">
                    <Text className="text-white">Log out</Text>
                </Pressable>
            </View>
        </View>
    </DrawerContentScrollView>
  )
}

export default ProfileDrawer