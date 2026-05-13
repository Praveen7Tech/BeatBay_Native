import { playlist } from '@/constants/data'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PlayListRaw from './PlayListRaw'

const PlayListCrad = () => {
    console.log("palylist card rendered")
    return (
        <View className='bg-zinc-900 border border-zinc-800 rounded-2xl p-3 min-h-0 h-full'>
            <View className='flex-row justify-between items-center mb-4'>
                <View className='flex-row items-center gap-2'>
                    <Ionicons name='musical-notes' size={18} color="#1DB954" />
                    <Text className='text-white text-sm font-sans-semibold'>
                        Playlist
                    </Text>
                </View>
                <Pressable className='bg-primary px-3 py-2 rounded-full flex-row items-center gap-1'>
                    <Ionicons name='add' size={16} color="black" />
                    <Text className='text-black text-xs font-sans-bold'>
                        Add Song
                    </Text>
                </Pressable>
            </View>

            <FlatList
                data={playlist}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                removeClippedSubviews
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
                renderItem={({ item, index }) => (
                    <PlayListRaw item={item} index={index} />
                )}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default PlayListCrad