import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Search = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <Text className='text-white m-5'>Search page</Text>
    </SafeAreaView>
  )
}

export default Search