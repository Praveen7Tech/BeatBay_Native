import { playlist } from '@/constants/data'
import React, { useCallback } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import SectionHeader from '../common/SectionHeader'
import { useExpandableList } from '../hooks/useExpandableList'
import PlaylistItem from '../items/PlaylistItem'

interface PlaylistSectionProps {
  onAddSong: () => void
}

const PlaylistSection = ({ onAddSong }: PlaylistSectionProps) => {
  const { expandedId, toggleExpand } = useExpandableList()

  const renderItem = useCallback<ListRenderItem<PlayList>>(
    ({ item, index }) => (
      <PlaylistItem
        key={item.id}
        item={item}
        index={index}
        expanded={expandedId === item.id}
        onExpand={toggleExpand}
      />
    ),
    [expandedId, toggleExpand]
  )
  return (
    <View className='bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-1 min-h-0 h-full'>
      <View className='px-3'>
        <SectionHeader
          icon='musical-notes'
          title='Playlist'
          actionButton={{
            icon: 'add',
            label: 'Add Song',
            onPress: onAddSong,
          }}
        />
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

export default React.memo(PlaylistSection)