import { songs } from '@/constants/icons'
import { useImageColor } from '@/hooks/useImageColor'
import { router } from 'expo-router'
import { Heart, Pause, Play } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const MiniPlayer = () => {
    const playing = false
    const trackId = "123"
    const bgColor = useImageColor(songs.song3, '#282828');
  return (
    <Pressable onPress={()=> router.push(`/player/${trackId}`)} className='absolute bottom-16 left-5 right-5 h-16 rounded-md flex-row items-center px-2' style={{backgroundColor: bgColor }}>
        <Image source={songs.song1} className='w-12 h-12 rounded-md'/>
        <View className='flex-1 ml-3'>
            <Text className='text-white text-sm font-sans-medium' numberOfLines={1}>Munbe va</Text>
            <Text className='text-zinc-400 text-xs font-sans-light'>Sreya ghoshal</Text>
        </View>
        <View className='flex-row items-center gap-5 px-3'>
            <Heart color={'white'} size={20}/>
            <Pressable>
                {playing ? <Pause size={20} color={'white'} fill="white"/> : <Play color='white' fill='white' size={20}/>}
            </Pressable>
        </View>

        <View className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-md'>
            <View className='h-full bg-white rounded-md' style={{width:40}}></View>
        </View>
    </Pressable>
  )
}

export default MiniPlayer