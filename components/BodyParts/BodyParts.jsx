import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { bodyParts } from '../../Data';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

const BodyParts = () => {
    const router = useRouter()

    const handleClick = (bodyItem) => {
        router.push({
            pathname: "Exercises",
            params: bodyItem
        })
        console.log(bodyItem);
    }
    return (
        <>
            <Text className='font-Outfit text-xl'>Workout <Text className='font-Outfitbold text-xl'>Programs</Text></Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20, }}
                scrollEnabled={false}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginBottom: 10
                }}
                className='mt-5'
                renderItem={({ item, index }) => (
                    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()} className='w-[49%] h-[250px]'>
                        <TouchableOpacity onPress={() => handleClick(item)} className=' bg-gray-200 rounded-xl overflow-hidden'>
                            <Image source={item.image} className='w-full h-full object-contain' />
                            <LinearGradient
                                colors={['transparent', '#18181b']}
                                style={{ height: "100%", width: "100%" }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 0.8 }}
                                className='absolute bottom-0 flex justify-end pb-12 space-y-8'
                            >
                                <Text className=" absolute bottom-3 left-0 right-0 text-center text-white font-Outfitbold uppercase text-xl tracking-widest">{item.name}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Animated.View>
                )}
            />
        </>
    );
};

export default BodyParts;
