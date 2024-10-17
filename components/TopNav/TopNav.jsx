import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const TopNav = () => {
    return (
        <>
            <View className='flex-row justify-between items-center h-20'>
                <View className="flex-row items-center gap-2">
                    <Image source={require("../../assets/images/avatar.jpg")} className='w-[55px] h-[55px] object-contain rounded-full' />
                    <View>
                        <Text className='text-gray-500 font-Outfitmd text-sm tracking-widest'>Welcome Back👋</Text>
                        <Text className='text-appBlue font-Outfitbold text-3xl tracking-widest'>Henry</Text>
                    </View>
                </View>
                <View className='flex-row gap-1'>
                    <TouchableOpacity className='bg-gray-300 rounded-full p-3'>
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#0073CF" />
                    </TouchableOpacity>
                    <TouchableOpacity className='relative bg-gray-300 rounded-full p-3'>
                        <Feather name="bell" size={24} color="#0073CF" />
                        <View className=' absolute top-2 right-3 bg-appBlue w-[13px] h-[13px] rounded-full
                            flex justify-center items-center'>
                            <Text className='text-white text-[10px] font-Outfit'>4</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default TopNav