import { members } from '@/constants/data'
import React, { useCallback } from 'react'
import { FlatList, ListRenderItem, View } from 'react-native'

import SectionHeader from '../common/SectionHeader'
import { useExpandableList } from '../hooks/useExpandableList'
import MemberItem from '../items/MemberItem'

const MembersSection = () => {
  const { expandedId, toggleExpand } = useExpandableList()

  const renderItem = useCallback<ListRenderItem<Member>>(
    ({ item }) => <MemberItem item={item} expanded={expandedId === item.id} onExpand={toggleExpand} />,
    [expandedId, toggleExpand]
  )

  return (
    <View className='flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden'>
      <View className='px-3 py-5'>
        <SectionHeader icon='people' title='Members' count={members.length} />
      </View>

      <FlatList
        data={members}
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

export default React.memo(MembersSection)