import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { carousel } from '../../Data';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const AppCarousel = () => {
    const { width, height } = Dimensions.get('window');
    return (
        <View style={{ height: height / 3 }}>
            <View className='px-3 flex-row justify-between items-center'>
                <Text className='font-Outfit text-xl'>New <Text className='font-Outfitbold text-xl'>Program</Text></Text>
                <TouchableOpacity><MaterialCommunityIcons name="dots-horizontal" size={24} color="#0073CF" /></TouchableOpacity>
            </View>
            <Carousel
                loop
                width={width}
                height={height / 3}
                autoPlay={true}
                autoPlayInterval={2000}
                data={carousel}
                mode='parallax'
                scrollAnimationDuration={3000}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={{ height: height / 3 }} className='w-full rounded-2xl overflow-hidden'>
                        <Image source={item.image} resizeMode='cover' className='rounded-2xl w-full h-full' />
                        <LinearGradient
                            colors={['transparent', '#18181b']}
                            style={{ height: "100%", width: "100%" }}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 0.8 }}
                            className='absolute bottom-0 flex justify-end pb-12 space-y-8'
                        >
                            <Text className="absolute bottom-5 left-3 right-4 text-left text-white font-Outfitmd text-2xl tracking-widest">{item.heading}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default AppCarousel;
