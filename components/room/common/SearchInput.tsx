import { Ionicons } from '@expo/vector-icons'
import React, { useMemo } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface SearchInputProps {
  search: string
  setSearch: (text: string) => void
  placeholder?: string
}

const SearchInput = ({ search, setSearch, placeholder = 'Search songs...' }: SearchInputProps) => {
   const handleClear = useMemo(() => () => setSearch(''), [setSearch])

    return (
      <View className='flex-row items-center gap-2 mx-5 mb-4 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700'>
        <Ionicons name='search' size={18} color='#71717a' />

        <TextInput
          className='flex-1 text-white text-sm font-sans-medium'
          placeholder={placeholder}
          placeholderTextColor='#71717a'
          value={search}
          onChangeText={setSearch}
        />

        {search && (
          <Ionicons
            name='close-circle'
            size={18}
            color='#71717a'
            onPress={handleClear}
          />
        )}
      </View>
    )

}

export default React.memo(SearchInput)