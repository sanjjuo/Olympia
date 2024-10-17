import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from "expo-linear-gradient"
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';

const WelcomeScreen = () => {
  return (
    <View className='flex justify-end flex-1 relative'>
      <StatusBar style="light" />
      <Image source={require("../../assets/images/welcome.jpg")} className='w-full h-full object-contain absolute' />
      <View className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
        <Animated.View entering={FadeInDown.delay(100).springify()} exiting={FadeInUp} className='w-[100px] h-[90px]'>
          <Image source={require("../../assets/images/logo.png")} className='w-full h-full object-contain' />
        </Animated.View>
        <Animated.Text entering={FadeInDown.delay(200).springify()} exiting={FadeInUp} className='text-appBlue font-StrikeRegular text-[80px] uppercase tracking-widest'>
          Olympia</Animated.Text>
        <Animated.Text entering={FadeInDown.delay(300).springify()} exiting={FadeInUp} className='text-white font-Outfitmd text-[20px] tracking-widest uppercase'>
          Best <Text className='text-appBlue font-Outfitbold text-[25px]'>Workouts</Text> For You</Animated.Text>
      </View>
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ height: "68%", width: "100%" }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-8'
      >
      </LinearGradient>
    </View>
  )
}

export default WelcomeScreen