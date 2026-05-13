import { songs } from '@/constants/icons'
import Slider from '@react-native-community/slider'
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const Player = () => {
    const playing = true
    return (
        <>
            <View className='items-center mt-8'>
                <Image source={songs.song1} className='w-35 h-35 rounded-full border border-green-300' />
            </View>
            <View className='mt-8 px-5'>
                <Slider
                    style={{ height: 20 }}
                    minimumTrackTintColor='#1DB954'
                    maximumTrackTintColor='white'
                    thumbTintColor='white'
                />
                <View className=' flex-row justify-between px-4'>
                    <Text className='text-zinc-400 font-sans-light text-[10px]'>00:00</Text>
                    <Text className='text-zinc-400 font-sans-light text-[10px]'>04:28</Text>
                </View>
            </View>

            <View className='flex-row justify-between items-center px-8 mt-3'>
                <Shuffle size={22} color="#1DB954" />
                <Pressable>
                    <SkipBack size={32} color="white" fill="white" />
                </Pressable>
                <Pressable className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg">
                    {playing ? <Pause size={30} color="black" fill="black" /> : <Play size={30} color="black" fill="black" className="ml-1" />}
                </Pressable>
                <Pressable>
                    <SkipForward size={32} color="white" fill="white" />
                </Pressable>
                <Pressable>
                    <Repeat size={22} color="rgba(255,255,255,0.5)" />
                </Pressable>
            </View>
        </>
    )
}

export default Player