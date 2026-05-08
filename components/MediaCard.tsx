
import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

const MediaCard = ({ song }: { song: SongProps }) => {
    return (
        <Pressable key={song.title} className="mr-4 w-43">
            <Image source={song.image} className="w-43 h-43 rounded-lg" />
            <View className="ml-2">
                <Text numberOfLines={1}
                    className="text-zinc-400 text-base font-sans-semibold"
                >{song.title}
                </Text>
                <Text numberOfLines={1}
                    className="text-zinc-500 text-sm mt-1"
                >{song.artist}
                </Text>
            </View>
        </Pressable>
    )
}

export const MediaSection = ({title, data}:MediaSectionProps) => {
    return (
        <View className="mt-6">
            <Text className="text-white  text-2xl font-sans-extrabold mb-4 pl-5">
                {title}
            </Text>

            <FlatList 
               data={data}
               horizontal
               keyExtractor={(item)=> item.title.toString()}
               renderItem={({item})=> <MediaCard song={item}/>}
               showsHorizontalScrollIndicator={false}
               initialNumToRender={1}
               contentContainerStyle={{
                paddingLeft:10,
                paddingRight:10
               }}
             />
        </View>
    )
}