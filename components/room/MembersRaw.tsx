import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

interface MmebersProps{
    item:{
        id:string
        name: string
        image:any
        role:string
    }
}

const MembersRaw = ({item}: MmebersProps) => {
    console.log("member raw rendered : ",1)
    return (
        <View className='flex-row items-center justify-between mb-4'>
            <View className='flex-row items-center flex-1'>
                <Image source={item.image} className='w-12 h-12 rounded-full' />
                <View className='ml-3 flex-1'>
                    <Text className='text-white text-sm font-sans-medium'>
                        {item.name}
                    </Text>
                    <Text className='text-[#1DB954] text-xs'>
                        {item.role}
                    </Text>
                </View>
            </View>
            <Pressable>
                <Ionicons name='ellipsis-vertical' size={18} color="white" />
            </Pressable>
        </View>
    )
}

export default MembersRaw