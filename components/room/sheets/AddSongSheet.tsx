import { playlist } from "@/constants/data";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ListRenderItem, Pressable, Text, View } from "react-native";
import SearchCard from "../cards/SearchCard";
import SongCrad from "../cards/SongCrad";
interface Props{
    open: boolean;
    onClose: ()=> void;
}

const AddSongSheet = ({open,onClose}: Props) => {

    const sheetRef = useRef<BottomSheet>(null)
    const [search, setSearch] = useState("")

    const snapPoint = useMemo(()=>["65%","85%"],[])

    useEffect(()=>{
        if(open){
            sheetRef.current?.snapToIndex(0)
        }else{
            sheetRef.current?.close()
        }
    },[open])

    const renderBackDrop = useCallback((props:any)=>(
        <BottomSheetBackdrop 
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.4}
            pressBehavior="close"
        />
    ),[])

    const renderItem: ListRenderItem<SongProps> = useCallback(({item})=>(
        <SongCrad item={item}/>
    ),[])

     const filteredSongs = useMemo(() => {
        return playlist.filter((song) =>
        song.title .toLowerCase().includes(search.toLowerCase()))
    }, [search])

  return (
    <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoint}
        enablePanDownToClose
        onClose={onClose}
        backdropComponent={renderBackDrop}
        backgroundStyle={{
            backgroundColor:"#111111",
            borderTopLeftRadius:35,
            borderTopRightRadius:35
        }}
        handleIndicatorStyle={{
            backgroundColor:"#666",
            width:50
        }}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustResize"
    >
        <View className="flex-1">
            <View className="flex-row items-center justify-around px-5 mb-4">
                <Text className="text-white text-lg font-sans-bold">Add songs</Text>
                <Pressable onPress={onClose}>
                    <Ionicons name="close" size={24} color='white'/>
                </Pressable>
            </View>

            <SearchCard search={search} setSearch={setSearch}/>

            <BottomSheetFlatList
                data={filteredSongs}
                keyExtractor={(item)=> item.id}
                renderItem={renderItem}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                contentContainerStyle={{
                    paddingBottom:50,
                    flexGrow:1
                }}
            />
        </View>
    </BottomSheet>
  )
}

export default React.memo(AddSongSheet)