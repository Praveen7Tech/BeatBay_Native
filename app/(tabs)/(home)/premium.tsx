import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Premium = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <Text className='text-white m-5'>Premium page</Text>
    </SafeAreaView>
  )
}

export default Premium