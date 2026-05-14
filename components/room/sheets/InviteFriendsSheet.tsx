import { friends } from '@/constants/data'
import { Ionicons } from '@expo/vector-icons'
import React, { useCallback, useEffect } from 'react'
import { Dimensions, FlatList, ListRenderItem, Pressable, Text, View } from 'react-native'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FriendsRaw from '../friends/FriendsRaw'

const { width, height } = Dimensions.get('window')
const SHEET_WIDTH = width * 0.60

interface Props {
    visible: boolean
    onClose: () => void
}


const InviteFriendsSheet = ({ visible, onClose }: Props) => {

    const insets = useSafeAreaInsets()
    const translateX = useSharedValue(-SHEET_WIDTH)

    useEffect(() => {
        translateX.value = withTiming(
            visible ? 0 : -SHEET_WIDTH,
            { duration: 250 }
        )
    }, [visible])

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }))

    const renderItem: ListRenderItem<Friend>= useCallback(({ item }) => (
        <FriendsRaw item={item}/>
    ), [])

    console.log("invite friend raw ", "/######/")

    return (
        <View pointerEvents={visible ? 'auto' : 'none'}
            className='absolute inset-0 z-50'>
            <Pressable
                onPress={onClose}
                className='absolute inset-0 bg-black/70'
            />
            <Animated.View
                style={[
                    animatedStyle,
                    {
                        width: SHEET_WIDTH,
                        top: insets.top,
                        bottom: insets.bottom
                    }]}
                className='absolute left-0 px-3 py-20'
            >
                <View className='flex-1 bg-zinc-900/95 border border-zinc-600 rounded-[30px] overflow-hidden'>
                    <View className='flex-row items-center justify-between px-5 py-5 border-b border-zinc-500'>
                        <Text className='text-white font-sans-bold'>Invite Friends</Text>
                        <Pressable onPress={onClose} className=''>
                            <Ionicons name='close' size={24} color='white' />
                        </Pressable>
                    </View>

                    <FlatList
                        data={friends}
                        keyExtractor={(item)=> item.id}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={8}
                        maxToRenderPerBatch={8}
                    />
                </View>
            </Animated.View>
        </View>
    )
}

export default InviteFriendsSheet

