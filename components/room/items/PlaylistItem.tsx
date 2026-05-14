import { Ionicons } from '@expo/vector-icons'
import { Trash2 } from 'lucide-react-native'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

interface PlaylistItemProps {
  item: PlayList
  index: number
  expanded: boolean
  onExpand: (id: string) => void
}

const PlaylistItem = ({ item, index, expanded, onExpand }: PlaylistItemProps) => {
  
  return (
    <Pressable onPress={() => onExpand(item.id)} className='border border-zinc-800 rounded-2xl p-2 mb-1 bg-zinc-900'>
      {/* Main Row */}
      <View className='flex-row items-center justify-between'>
        <Text className='text-zinc-500 text-xs w-4'>{index + 1}</Text>
        <Image source={item.image} className='w-12 h-12 rounded-md' />
        <View className='flex-1 mx-3'>
          <Text className='text-white text-sm font-sans-medium' numberOfLines={1}>
            {item.title}
          </Text>

          <Text className='text-zinc-400 text-xs font-sans-light' numberOfLines={1}>
            {item.artist}
          </Text>
        </View>

        {expanded && (
          <Pressable onPress={() => onExpand(item.id)} className='p-1'>
            <Ionicons name='close' size={18} color='white' />
          </Pressable>
        )}
      </View>

      {/* Expanded Content */}
      {expanded && (
        <View className='flex-row items-center justify-between mt-4 pt-3 border-t border-zinc-800'>
          <Text className='text-zinc-400 text-xs'>Duration: {item.duration}</Text>
          <Pressable className='bg-red-500 p-2 rounded-full flex-row items-center gap-2'>
            <Trash2 size={14} color='white' />
            <Text className='text-white text-xs font-sans-medium'>Remove</Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  )
}

export default React.memo(PlaylistItem)