import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

interface Props{
    search: string;
    setSearch:(text: string)=> void
}

const SearchCard = ({search,setSearch}: Props) => {
    console.log("search rendered : ")
    return (
        <View className='mx-5 mb-4 py-2 px-4 rounded-2xl bg-zinc-800 flex-row items-center'>
            <Ionicons name='search' size={18} color='#999'/>
            <TextInput 
                value={search}
                onChangeText={setSearch}
                placeholder='Search song'
                placeholderTextColor="#777"
                className='flex-1 ml-3 text-white'
            />
        </View>
    )
}

export default React.memo(SearchCard)