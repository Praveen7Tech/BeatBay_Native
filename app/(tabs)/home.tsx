import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <Text className='text-white m-5'>Home page</Text>
    </SafeAreaView>
  )
}

export default Home