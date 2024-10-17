import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import TopNav from '../components/TopNav/TopNav';
import AppCarousel from '../components/Carousel/Carousel';
import BodyParts from '../components/BodyParts/BodyParts';
import { StatusBar } from "expo-status-bar"
import Search from '../components/Search/Search';

const Home = () => {
    return (
        <SafeAreaView className='bg-white pt-10 flex-1'>
            <StatusBar style='dark' />

            {/* Top Navigation */}
            <View className='px-3'>
                <TopNav />
            </View>

            <ScrollView className='space-y-5'>
                {/* search component */}
                <View className='px-3 mt-5'>
                    <Search />
                </View>

                {/* Carousel Component */}
                <View>
                    <AppCarousel />
                </View>

                {/* Body Parts Section */}
                <View className='px-3 flex-1'>
                    <BodyParts />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
