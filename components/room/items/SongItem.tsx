import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

interface SongItemProps {
  item: SongProps
}

const SongItem = ({ item }: SongItemProps) => {
  return (
     <Pressable className='flex-row items-center px-5 py-3 border-b border-zinc-800'>
      <Image source={item.image} className='w-12 h-12 rounded-md' />
      <View className='flex-1 ml-3'>
        <Text className='text-white text-sm font-sans-medium' numberOfLines={1}>
          {item.title}
        </Text>
        <Text className='text-zinc-400 text-xs' numberOfLines={1}>
          {item.artist}
        </Text>
      </View>
    </Pressable>
  )
}

export default React.memo(SongItem)