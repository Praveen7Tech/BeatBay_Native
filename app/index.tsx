import "@/global.css";
import { router } from "expo-router";
import { styled } from "nativewind";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { icons } from "./constants/icons";

const SafeAreaView = styled(RNSafeAreaView)

export default function Index() {
  return (
      <SafeAreaView edges={["top"]} className="flex-1 bg-background px-6">
         <View className="flex-1 justify-between item-center py-16">

            <View className="items-center mt-52">
                <View className="w-20 h-20 rounded-full items-center justify-center mb-4">
                    <Image source={icons.logo} className="w-28 h-28"  resizeMode="contain"
                    />
                </View>
                <Text className="text-white text-4xl font-sans-extrabold text-center leading-tight">
                    Millions of Songs.
                </Text>
                <Text className="text-white text-4xl font-sans-extrabold text-center mb-10">
                    Free on Beat.
                </Text>
            </View>

            <View className="items-center mx-10">
                <Pressable onPress={()=> router.push('/signup')} className="w-full bg-green-400 rounded-full items-center py-4 mb-4">
                    <Text className="text-black font-sans-bold text-base">Sign Up for free</Text>
                </Pressable>
                <Pressable onPress={()=> router.push('/login')} className="w-full rounded-full border border-inputborder items-center py-4">
                    <Text className="text-white font-sans-bold">Log In</Text>
                </Pressable>

                <Pressable onPress={()=> router.push('/(auth)/verifyotp')} className="w-full rounded-full border border-inputborder items-center py-4">
                    <Text className="text-white font-sans-bold">verify otp</Text>
                </Pressable>
            </View>

         </View>
      </SafeAreaView>
  );
}
