import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseList = ({ exercise, name }) => {
    const router = useRouter();
    const handleClick = (details) => {
        router.push({
            pathname: "ExerciseDetails",
            params: details
        })
    }
    return (
        <View className='px-3 mt-5'>
            <Text className='font-Outfitbold text-xl capitalize text-appBlue mb-3'>{name} <Text className='font-Outfit text-xl text-black'>Exercises</Text></Text>
            <FlatList
                data={exercise}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                scrollEnabled={false}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: 10
                }}
                renderItem={({ item, index }) => (
                    <>
                        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping()} className='w-[50%] gap-1'>
                            <TouchableOpacity onPress={() => handleClick(item)} className='rounded-2xl overflow-hidden shadow-lg'>
                                <Image source={{ uri: item.gifUrl }} className='w-full h-[250px] object-contain' />
                            </TouchableOpacity>
                            <Text className='font-Outfit text-base capitalize text-center'>{item.name}</Text>
                        </Animated.View>
                    </>
                )}
            />
        </View>
    )
}

export default ExerciseList