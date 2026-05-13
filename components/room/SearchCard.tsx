import React from 'react'
import { Text, View } from 'react-native'

const SearchCard = () => {
    console.log("search rendered : ")
    return (
        <View className='px-4 mt-6 pb-6'>
            <View className='rounded-3xl border border-zinc-800 bg-zinc-900 p-4'>
                <Text className='text-white text-base font-sans-semibold mb-3'>Search & add songs</Text>
                <Text className='text-zinc-400 text-sm'>
                    Add a search result list here when you integrate backend search and socket updates.
                </Text>
            </View>
        </View>
    )
}

export default SearchCard