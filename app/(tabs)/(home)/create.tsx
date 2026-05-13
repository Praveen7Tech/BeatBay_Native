import MembersCrad from '@/components/room/MembersCrad';
import Player from '@/components/room/Player';
import PlayListCrad from '@/components/room/PlayListCrad';
import RoomHeader from '@/components/room/RoomHeader';
import SearchCard from '@/components/room/SearchCard';
import { members } from '@/constants/data';
import { styled } from 'nativewind';
import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Create = () => {
  console.log("room page rendered")
  return (
    <SafeAreaView className='flex-1 bg-background '>
        <RoomHeader title='Jam Room' subtitle={`${members.length} members`}/>
        
      <FlatList
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
            <Player/>
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
          <SearchCard/>
        }
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={() => null}
      />
    </SafeAreaView>
  )
}

export default Create