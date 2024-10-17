import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { bodyPartEndpoint } from '../Api/ExerciseDb'
import axios from 'axios'
import { apiKey } from '../Data'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import ExerciseList from '../components/ExerciseList/ExerciseList'

const Exercises = () => {
  const [exercise, setExercise] = useState([])
  const router = useRouter()
  const { name, image } = useLocalSearchParams()
  console.log(name, image);


  // const bodyPart = "chest";


  useEffect(() => {
    const fetchBodyPartsExercise = async (bodyPart) => {
      try {
        const response = await axios.get(bodyPartEndpoint(bodyPart), {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        });
        setExercise(response.data)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }

    }

    fetchBodyPartsExercise(name)
  }, [])

  return (
    <ScrollView className='flex-1'>
      <StatusBar style='light' />
      <View className='relative w-full h-[400px]'>
        <Image source={image} className='w-full h-full object-contain rounded-b-[50px]' />
        <View className='flex-row justify-between px-4 absolute w-full top-10'>
          <TouchableOpacity onPress={router.back} className='bg-gray-300 rounded-full p-3'>
            <SimpleLineIcons name="arrow-left" size={25} color="#0073CF" />
          </TouchableOpacity>
          <TouchableOpacity className='bg-gray-300 rounded-full p-3'>
            <Ionicons name="chatbubble-ellipses-outline" size={25} color="#0073CF" />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['transparent', '#18181b']}
          style={{ height: "60%", width: "100%" }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
          className='absolute bottom-0 flex justify-end pb-12 space-y-8 rounded-b-[50px]'
        >
          <Text className='absolute bottom-5 left-0 right-0 text-center text-white font-Outfitbold uppercase text-4xl tracking-widest'>
            {name}</Text>
        </LinearGradient>
      </View>

      {/* exercise list cards*/}

      <ExerciseList exercise={exercise} name={name}/>
    </ScrollView>
  )
}

export default Exercises