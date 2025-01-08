import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const Amenities = () => {
  return (
    <View className='flex flex-row gap-2 flex-wrap'>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="wifi" size={24} color="#A4243B" />
            <Text className='mt-2 font-medium text-base text-[#A4243B]'>Wifi</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="snowflake" size={24} color="#A4243B" />
            <Text className='mt-2 font-medium text-base text-[#A4243B]'>A/C</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="car" size={24} color="#A4243B" />
            <Text className='mt-2 font-medium text-base text-[#A4243B]'>Parking</Text>
        </View>
        <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="hamburger" size={24} color="#A4243B" />
            <Text className='mt-2 font-medium text-base text-[#A4243B]'>Food</Text>
        </View>
        {/* <View className=' bg-white p-4 rounded-md justify-center items-center'>
            <FontAwesome5 name="snowflake" size={24} color="#A4243B" />
            <Text className='mt-2 font-medium text-base text-[#A4243B]'>A/C Rooms</Text>
        </View> */}
    </View>
  )
}

export default Amenities