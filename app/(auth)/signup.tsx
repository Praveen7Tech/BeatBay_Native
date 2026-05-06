import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { styled } from "nativewind";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { icons } from "../constants/icons";
import { useSignUp } from "../hooks/useAuth";
import { SignUpFormData, signupSchema } from "../validators/auth.schema";

const SafeAreaView = styled(RNSafeAreaView);

export default function SignUp() {
  const [serverError, setServerError] = useState<string | null>(null);
  const { mutate, isPending } = useSignUp();

  const {control, handleSubmit,formState: { errors },} = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const HandleSignUp = (data: SignUpFormData) => {
    setServerError(null);
    mutate(data, {
      onError: (error) => {
        const errorMessage = error.message 
        setServerError(errorMessage);
      },
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

            <Text className="text-white font-sans-bold text-xl pl-3">
              Sign up to start listening
            </Text>
          </View>

          {/* Middle */}
          <View>
            <View className="mb-6">
              <Text className="text-white font-sans-bold text-2xl mb-2">
                What&apos;s your email address?
              </Text>

              <Text className="text-inputborder font-sans-medium">
                You&apos;ll need to confirm this email later.
              </Text>
            </View>

            {/* Server Error Message (Spotify Style) */}
            {serverError && (
              <View className="bg-red-500/10 p-3 rounded-lg mb-4 border border-red-500">
                <Text className="text-red-500 text-sm text-center font-sans-medium">
                  {serverError}
                </Text>
              </View>
            )}

            <View className="gap-4">
              {/* Name Input */}
              <View>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className={`border px-4 py-4 text-white text-base ${
                        errors.name ? "border-red-500" : "border-inputborder"
                      }`}
                      placeholder="Name"
                      placeholderTextColor="#a1a1aa"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.name && (
                  <Text className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </Text>
                )}
              </View>

              {/* Email Input */}
              <View>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className={`border px-4 py-4 text-white text-base ${
                        errors.email ? "border-red-500" : "border-inputborder"
                      }`}
                      keyboardType="email-address"
                      placeholder="Email address"
                      placeholderTextColor="#a1a1aa"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                {errors.email && (
                  <Text className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </Text>
                )}
              </View>

              {/* Password Input */}
              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className={`border px-4 py-4 text-white text-base ${
                        errors.password ? "border-red-500" : "border-inputborder"
                      }`}
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
                  <Text className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            </View>

            <Pressable
              onPress={handleSubmit(HandleSignUp)}
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
              <Text className="text-white font-medium">Or sign up with</Text>
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
              Already have an account?
            </Text>

            <Pressable onPress={() => router.push("/login")}>
              <Text className="text-white font-sans-bold">Log in</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}