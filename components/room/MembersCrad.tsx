import { members } from '@/constants/data'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MembersRaw from './MembersRaw'

const MembersCrad = () => {
    console.log("member card rendered : ",)
    return (
        <View className='bg-zinc-900 border border-zinc-800 rounded-2xl p-3 min-h-0 h-full'>
            <View className='flex-row justify-between items-center mb-4'>
                <View className='flex-row items-center gap-2'>
                    <Ionicons name='people' size={18} color="#1DB954" />
                    <Text className='text-white text-sm font-sans-semibold'>
                        Members
                    </Text>
                </View>
                <Text className='text-zinc-400 text-xs'>
                    {members.length}
                </Text>
            </View>
             <FlatList
               data={members}
               keyExtractor={(item)=> item.id}
               showsVerticalScrollIndicator={false}
               nestedScrollEnabled
               removeClippedSubviews
               initialNumToRender={5}
               maxToRenderPerBatch={5}
               windowSize={5}
               renderItem={({item})=>(
                <MembersRaw item={item} />
               )}
               style={{ flex: 1 }}
             />
        </View>
    )
}

export default MembersCrad