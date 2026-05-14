import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface SectionHeaderProps {
  icon: string
  title: string
  count?: number
  actionButton?: {
    icon: string
    onPress: () => void
    label: string
  }
}

const SectionHeader = ({ icon, title, count, actionButton }: SectionHeaderProps) => {

  return (
      <View className='flex-row justify-between items-center mb-4'>
        <View className='flex-row items-center gap-2'>
          <Ionicons name={icon as any} size={18} color='#1DB954' />
          <Text className='text-white text-sm font-sans-semibold'>{title}</Text>
        </View>

        {actionButton ? (
          <Pressable
            onPress={actionButton.onPress}
            className='bg-primary px-3 py-2 rounded-full flex-row items-center gap-1'
          >
            <Ionicons name={actionButton.icon as any} size={16} color='black' />
            <Text className='text-black text-xs font-sans-bold'>{actionButton.label}</Text>
          </Pressable>
        ) : (
          count !== undefined && <Text className='text-zinc-400 text-xs'>{count}</Text>
        )}
      </View>
    )

}

export default React.memo(SectionHeader)