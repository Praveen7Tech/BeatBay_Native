import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface MmebersProps {
    item: Member
    expanded: boolean
    onExpand: (id:string) => void
}

const MembersRaw = ({ item, expanded, onExpand }: MmebersProps) => {
    console.log("member raw rendered : ", 1)
    return (
        <Pressable onPress={()=>onExpand(item.id)} className=' mb-4 px-1'>
            <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center flex-1'>
                    <Image source={item.image} className='w-12 h-12 rounded-full' />
                    <View className='ml-3 flex-1'>
                        <Text className='text-white text-sm font-sans-medium' numberOfLines={1}>
                            {item.name}
                        </Text>
                        <Text className='text-[#1DB954] text-xs' numberOfLines={1}>
                            {item.role}
                        </Text>
                    </View>
                </View>
                {expanded && (
                    <Pressable className='ml-1'>
                        <Ionicons name='close' size={18} color="white" />
                    </Pressable>
                )}
            </View>
            {expanded && (
                <View className='items-center py-3 border-b border-zinc-800'>
                    <Pressable className='bg-red-500 px-5 py-2 rounded-full flex-row items-center gap-2'>
                        <Ionicons
                            name='person-remove'
                            size={16}
                            color='white'
                        />
                        <Text className='text-white text-xs font-sans-medium'>
                            Kick
                        </Text>
                    </Pressable>
                </View>
            )}
        </Pressable>
    )
}

export default React.memo(MembersRaw)