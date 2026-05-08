import { Users } from "@/constants/icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";

const ProfileDrawer = () => {
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
        </View>
    </DrawerContentScrollView>
  )
}

export default ProfileDrawer