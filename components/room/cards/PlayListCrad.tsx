import { playlist } from '@/constants/data'
import { Ionicons } from '@expo/vector-icons'
import React, { useCallback, useState } from 'react'
import { ListRenderItem, Pressable, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import PlayListRaw from '../raw/PlayListRaw'
interface Props{
    onAddSong: ()=> void
}

const PlayListCrad = ({onAddSong}: Props) => {
    const [expandId, setExpandId] = useState<string | null>(null)

    const toggleExpand = useCallback((id: string) => {
        setExpandId((prev) => prev === id ? null : id)
    }, [])

    const renderItem: ListRenderItem<PlayList> = useCallback(({ item, index }) => (
        <PlayListRaw
            key={item.id}
            item={item}
            index={index}
            expanded={expandId === item.id}
            onExpand={toggleExpand}
        />
    ), [expandId,toggleExpand])
    console.log("palylist card rendered")
    return (
        <View className='bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-1 min-h-0 h-full'>
            <View className='flex-row justify-between items-center mb-4'>
                <View className='flex-row items-center gap-2'>
                    <Ionicons name='musical-notes' size={18} color="#1DB954" />
                    <Text className='text-white text-sm font-sans-semibold'>
                        Playlist
                    </Text>
                </View>
                <Pressable onPress={onAddSong} className='bg-primary px-3 py-2 rounded-full flex-row items-center gap-1'>
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
                renderItem={renderItem}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default PlayListCrad