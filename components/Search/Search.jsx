import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons';

const Search = () => {
    return (
        <>
            <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded-3xl">
                <View className='flex-row items-center gap-2'>
                    <Octicons name="search" size={20} color="#0073CF" />
                    <TextInput
                        placeholder='Search your workout'
                        className='text-lg font-Outfit'
                    />
                </View>
                <TouchableOpacity className='w-[30px] h-[30px]'>
                    <Image source={require("../../assets/images/filter.png")} className='w-full h-full object-contain'/>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Search