import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { styled } from "nativewind";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { icons } from "../constants/icons";
import { useLogin } from "../hooks/useAuth";
import { LoginFormData, loginSchema } from "../validators/auth.schema";

const SafeAreaView = styled(RNSafeAreaView);

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });

  const { mutate, isPending } = useLogin();

  const onLoginSubmit = (data: LoginFormData) => {
    mutate(data, {
      onError: (error: any) => {
        const errorMessage = error.message 
        Alert.alert("Login Failed", errorMessage);
      }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <View className="flex-1 justify-between px-6">

          {/* Header */}
          <View className="flex-row items-center gap-5 pt-4">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={26} color="white" />
            </Pressable>

            <Text className="text-white font-sans-bold text-xl pl-15">
              Log in to Beat
            </Text>
          </View>

          {/* Middle */}
          <View>
            <View className="mb-6">
              <Text className="text-white font-sans-bold text-2xl mb-2">
                Email
              </Text>
            </View>

            <View className="gap-4">
              {/* Email Input */}
              <View>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className={`border px-4 py-4 text-white text-base ${errors.email ? 'border-red-500' : 'border-inputborder'}`}
                      keyboardType="email-address"
                      placeholder="Email address"
                      placeholderTextColor="#a1a1aa"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCapitalize="none"
                    />
                  )}
                />
                {errors.email && (
                  <Text className="text-red-500 text-xs mt-1">{errors.email.message}</Text>
                )}
              </View>

              {/* Password Input */}
              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className={`border px-4 py-4 text-white text-base ${errors.password ? 'border-red-500' : 'border-inputborder'}`}
                      placeholder="Password"
                      placeholderTextColor="#a1a1aa"
                      secureTextEntry
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.password && (
                  <Text className="text-red-500 text-xs mt-1">{errors.password.message}</Text>
                )}
              </View>
            </View>

            <Pressable 
              onPress={handleSubmit(onLoginSubmit)} 
              disabled={isPending}
              className="bg-primary rounded-full items-center py-4 mt-6"
            >
              {isPending ? (
                <ActivityIndicator color="black" />
              ) : (
                <Text className="text-black font-sans-bold text-base">
                  Continue
                </Text>
              )}
            </Pressable>

            <View className="items-center my-5">
              <Text className="text-white font-medium">
                Or Log in with
              </Text>
            </View>

            <Pressable className="relative items-center justify-center border border-zinc-400 rounded-full py-4">
              <Image
                source={icons.google}
                className="w-6 h-6 absolute left-5"
                resizeMode="contain"
              />
              <Text className="text-white font-sans-bold">
                Continue with Google
              </Text>
            </Pressable>

          </View>

          {/* Bottom */}
          <View className="items-center justify-center gap-2 pb-6">
            <Text className="text-white font-sans-medium">
              Don&apos;t have an account?
            </Text>

            <Pressable onPress={() => router.push("/signup")}>
              <Text className="text-white font-sans-bold ">
                Sign up
              </Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}