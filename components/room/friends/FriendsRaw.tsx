import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface FreindsData{
    item: Friend
}

const FriendsRaw = ({item}:FreindsData) => {
    console.log("invite friend raw ", item.id)
    return (
        <View className='flex-row p-5'>
            <Image source={item.image} className='w-12 h-12 rounded-full' />
            <View className='flex-1 ml-3'>
                <Text className='text-white font-sans-medium text-sm'>{item.name}</Text>
                <Text className={`text-xs font-sans-medium ${item.status === 'online'
                    ? 'text-green-500': 'text-zinc-500'}`}>
                        {item.status}
                </Text>
            </View>
            <Pressable className='border border-zinc-400 items-center justify-center px-4 rounded-lg'>
                <Ionicons name='person-add' color='white' size={13} />
            </Pressable>
        </View>
    )
}

export default FriendsRaw

