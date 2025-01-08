import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const ListCard = (DataList: any) => {
  return (
    <View className='bg-white rounded-lg'>
        <View className='w-full h-[180px] bg-slate-500 justify-center items-center rounded-t-lg rounded-tr-lg'>
            <Text>Property Image </Text>
        </View>
        <View className='p-4'>
            <View className='flex flex-row border-0 border-white'>
                <Text className='grow font-RobotoBold text-lg text-ellipsis overflow-hidden w-10/12'>{DataList?.DataList?.Name}</Text>
                <View className='bg-green-600 px-3 py-1 rounded-[4px] flex flex-row items-center h-8 mr-4'>
                    <Text className='text-white font-RobotoMedium text-sm mr-2'>{DataList?.DataList?.Rating}</Text>
                    <AntDesign name="star" size={18} color="#fff" />
                </View>
            </View>
            <View>
                <Text className='text-xs text-gray-500'>{DataList?.DataList?.Address}</Text>
            </View>
        </View>
    </View>
  )
}

export default ListCard