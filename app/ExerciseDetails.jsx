import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar'
import Feather from '@expo/vector-icons/Feather';

const ExerciseDetails = () => {
    const router = useRouter()
    const details = useLocalSearchParams()
    return (
        <SafeAreaView className="flex-1">
            <StatusBar style='dark' />
            <View className='relative w-full h-[400px] rounded-b-[50px] shadow-xl'>
                <Image source={{ uri: details.gifUrl }} className='w-full h-full object-contain rounded-b-[50px]' />
                <TouchableOpacity onPress={router.back} className='absolute right-5 top-10 bg-gray-300 rounded-full p-3'>
                    <Feather name="x" size={24} color="red" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }} className='px-3 py-3 space-y-1'>
                <Text className='font-Outfitbold text-[26px] capitalize text-gray-600 tracking-widest'>{details.name}</Text>
                <Text className='font-Outfit text-sm text-gray-500'>Equipment: <Text className='font-Outfitbold capitalize text-gray-800'>{details.equipment}</Text></Text>

                <Text className='font-Outfit text-sm text-gray-500'>Secondary Muscles: <Text className='font-Outfitbold 
                capitalize text-gray-800'>{details.secondaryMuscles}</Text></Text>

                <Text className='font-Outfit text-sm text-gray-500'>Target: <Text className='font-Outfitbold capitalize
                 text-gray-800'>{details.target}</Text></Text>

                <Text className='font-Outfitmd text-xl text-gray-600 pt-5' >Instructions:</Text>
                <Text className='font-Outfit text-base text-gray-600'>{details.instructions}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ExerciseDetails