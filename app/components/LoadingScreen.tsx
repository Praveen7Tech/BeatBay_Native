import React from "react";
import { ActivityIndicator, View, Image } from "react-native";
import { icons } from "../constants/icons";

export default function LoadingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Image 
        source={icons.logo} 
        style={{ width: 80, height: 80, marginBottom: 20 }} 
        resizeMode="contain" 
      />
      <ActivityIndicator size="small" color="#4ADE80" />
    </View>
  );
}
