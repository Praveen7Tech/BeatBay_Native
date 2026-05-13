import MembersCrad from '@/components/room/cards/MembersCrad';
import PlayListCrad from '@/components/room/cards/PlayListCrad';
import Player from '@/components/room/player/Player';
import RoomHeader from '@/components/room/RoomHeader';
import SearchCard from '@/components/room/SearchCard';
import { members } from '@/constants/data';
import { songs } from '@/constants/icons';
import { useImageColor } from '@/hooks/useImageColor';
import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Create = () => {
  const bgColor = useImageColor(songs.song3, "#121212")
  console.log("room page rendered ", "///")
  return (
    <LinearGradient colors={[bgColor,  "#000000"]} locations={[0, 1]} className='flex-1'>
      <SafeAreaView className='flex-1'>
        <RoomHeader title='Jam Room' subtitle={`${members.length} members`} />

        <FlatList
          data={[]}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <>
              <Player />
              <View className='flex-row gap-4 mt-8 px-4'>
                <View className='flex-[1.5] min-h-0' style={{ height: 340 }}>
                  <PlayListCrad />
                </View>

                <View className='flex-1 min-h-0' style={{ height: 340 }}>
                  <MembersCrad />
                </View>
              </View>
            </>
          }
          ListFooterComponent={
            <SearchCard />
          }
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={() => null}
        />
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Create