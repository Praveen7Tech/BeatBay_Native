import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface Props{
    item: SongProps;
}

const SongCrad = ({item,}: Props) => {
  return (
    <View className='flex-row items-center px-8 py-3'>
      <Image source={item.image} className='w-14 h-14 rounded-xl'/>
      <View className='flex-1 ml-5'>
        <Text className='text-white text-sm font-sans-semibold' numberOfLines={1}>{item.title}</Text>
        <Text className='text-zinc-400 text-xs mt-1 font-sans-medium'>{item.artist}</Text>
      </View>
      <Pressable className='bg-primary px-4 py-2 rounded-full'>
        <Text className='text-black text-xs font-sans-bold'>Add</Text>
      </Pressable>
    </View>
  )
}

export default React.memo(SongCrad)