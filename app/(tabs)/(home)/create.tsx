import { useRoomSheetControl } from '@/components/room/hooks/useRoomSheetControl'
import RoomHeader from '@/components/room/RoomHeader'
import MembersSection from '@/components/room/sections/MembersSection'
import PlaylistSection from '@/components/room/sections/PlaylistSection'
import RoomPlayer from '@/components/room/sections/RoomPlayer'
import AddSongSheet from '@/components/room/sheets/AddSongSheet'
import InviteFriendsSheet from '@/components/room/sheets/InviteFriendsSheet'
import { members } from '@/constants/data'
import { songs } from '@/constants/icons'
import { useImageColor } from '@/hooks/useImageColor'
import { LinearGradient } from 'expo-linear-gradient'
import { styled } from 'nativewind'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const Create = () => {
  const { inviteOpen, toggleInvite, songSheetOpen, toggleSongSheet } = useRoomSheetControl()

  const bgColor = useImageColor(songs.song3, '#121212')

  return (
    <LinearGradient colors={[bgColor, '#000000']} locations={[0, 1]} className='flex-1'>
      <SafeAreaView className='flex-1'>
        <RoomHeader
          title='Jam Room'
          subtitle={`${members.length} members`}
          setInvite={toggleInvite}
        />
    
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          <RoomPlayer />

          <View className='flex-row gap-4 mt-8 px-4'>
            <View className='flex-[1.5] min-h-0' style={{ height: 340 }}>
              <PlaylistSection onAddSong={toggleSongSheet} />
            </View>

            <View className='flex-1 min-h-0' style={{ height: 340 }}>
              <MembersSection />
            </View>
          </View>
        </ScrollView>

        <InviteFriendsSheet visible={inviteOpen} onClose={toggleInvite} />
        <AddSongSheet open={songSheetOpen} onClose={toggleSongSheet} />
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Create