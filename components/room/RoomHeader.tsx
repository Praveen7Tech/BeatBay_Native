import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface RoomHeaderProps {
  title: string
  subtitle: string
  setInvite: ()=> void
}

const RoomHeader = ({ title, subtitle , setInvite}: RoomHeaderProps) => {
  
  return (
    <View className='bg-black/90 px-4 pt-5 pb-3 z-0'>
      <View className='flex-row items-center justify-between'>
        <Pressable
          className='p-2 rounded-full'
          onPress={() => router.back()}
          accessibilityLabel='Go back'
        >
          <Ionicons name='chevron-down' size={24} color='white' />
        </Pressable>

        <View className='items-center'>
          <Text className='text-white text-lg font-sans-bold'>{title}</Text>
          <Text className='text-zinc-400 text-xs'>{subtitle}</Text>
        </View>

        <Pressable onPress={setInvite}
          className='p-2 rounded-full'
          accessibilityLabel='Room actions'
        >
          <Ionicons name='person-add' size={24} color='white' />
        </Pressable>
      </View>
    </View>
  )
}

export default RoomHeader
