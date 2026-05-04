import { styled } from 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const verifyotp = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <View>
        <Text className='text-white'>Verify your otp</Text>
      </View>
    </SafeAreaView>
  )
}

export default verifyotp