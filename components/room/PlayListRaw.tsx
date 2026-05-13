import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface PlaylistProps{
    item:{
        id:string
        title:string
        artist:string
        duration:string
        image:any
    };
    index:number
}

const PlayListRaw = ({item,index}: PlaylistProps) => {
    console.log("list raw rendered : ",index+1)
    return (
        <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-zinc-500 text-xs w-4'>
                {index + 1}
            </Text>
            <Image
                source={item.image}
                className='w-12 h-12 rounded-md'
            />
            <View className='flex-1 mx-3'>
                <Text
                    className='text-white text-sm font-sans-medium'
                    numberOfLines={1}
                >
                    {item.title}
                </Text>
                <Text
                    className='text-zinc-400 text-xs font-sans-light'
                    numberOfLines={1}
                >
                    {item.artist}
                </Text>
            </View>
            <Text className='text-zinc-500 text-xs mr-3'>
               {item.duration}
            </Text>
            <Pressable>
                <Ionicons
                    name='ellipsis-horizontal'
                    size={18}
                    color="white"
                />
            </Pressable>
        </View>
    )
}

export default PlayListRaw