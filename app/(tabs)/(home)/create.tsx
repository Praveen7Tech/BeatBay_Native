import MembersCrad from '@/components/room/cards/MembersCrad';
import PlayListCrad from '@/components/room/cards/PlayListCrad';
import Player from '@/components/room/player/Player';
import RoomHeader from '@/components/room/RoomHeader';
import AddSongSheet from '@/components/room/sheets/AddSongSheet';
import InviteFriendsSheet from '@/components/room/sheets/InviteFriendsSheet';
import { members } from '@/constants/data';
import { songs } from '@/constants/icons';
import { useImageColor } from '@/hooks/useImageColor';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Create = () => {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [songSheetOpen, setSongSheetOpen] =useState(false)

  const bgColor = useImageColor(songs.song3, "#121212")
  console.log("room page rendered ", "///")

  return (
    <LinearGradient colors={[bgColor,  "#000000"]} locations={[0, 1]} className='flex-1'>
      <SafeAreaView className='flex-1'>
        <RoomHeader title='Jam Room' subtitle={`${members.length} members`} setInvite={()=>setInviteOpen(true)}/>
        <InviteFriendsSheet
          visible={inviteOpen}
          onClose={() => setInviteOpen(false)}
        />
        <FlatList
          data={[]}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <>
              <Player />
              <View className='flex-row gap-4 mt-8 px-4'>
                <View className='flex-[1.5] min-h-0' style={{ height: 340 }}>
                  <PlayListCrad onAddSong={()=> setSongSheetOpen(true)}/>
                </View>

                <View className='flex-1 min-h-0' style={{ height: 340 }}>
                  <MembersCrad />
                </View>
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={() => null}
        />
        <AddSongSheet
          open={songSheetOpen}
          onClose={() => setSongSheetOpen(false)}
        />
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Create