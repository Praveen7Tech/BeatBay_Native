import { members } from '@/constants/data'
import { Ionicons } from '@expo/vector-icons'
import React, { useCallback, useState } from 'react'
import { ListRenderItem, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MembersRaw from '../raw/MembersRaw'

const MembersCrad = () => {

    const [expandId, setExpandId] = useState<string | null>(null)

    const toggleExpand = useCallback((id: string) => {
        setExpandId((prev) => prev === id ? null : id)
    }, [])

    const renderItem: ListRenderItem<Member> = useCallback(({ item }) => (
        <MembersRaw
            item={item}
            expanded={expandId === item.id}
            onExpand={toggleExpand}
        />
    ), [expandId, toggleExpand])

    console.log("member card rendered")

    return (
        <View className='flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden'>
            <View className='flex-row justify-between items-center px-3 py-5 mb-3'>
                <View className='flex-row items-center gap-2'>
                    <Ionicons
                        name='people'
                        size={18}
                        color="#1DB954"
                    />
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
                renderItem={renderItem}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default React.memo(MembersCrad)