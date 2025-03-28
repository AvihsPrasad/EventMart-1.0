import CustomHeader from '@/components/Header'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categoryList } from '@/constants/index'
// import Icon from '@/components/icon'
// import { getCategories, getDBVersion } from '../(api)/cat+api'
import { fetchAPI, useFetch } from '@/lib/fetch'

function Category() {
  const { data: categoriesDb, loading, error } = useFetch<any[]>("/(api)/getcat");
  // const [dataFetched, setDataFetched] = useState([])
  const getImage = (val: any) => {
    let data = categoryList?.find((itmInner) => itmInner.type == val);
    return <Image source={data?.CategoryUrl} className='w-16 h-16 object-contain' />
  }
  useEffect(() => {
    // const version = async() => await getDBVersion()
    // const cat = async() => await getCategories()
    // console.log({version})
    // console.log(categoriesDb);
  })
  return (
    <>
      {/* <SafeAreaView className=' h-full top-0'> */}
      <CustomHeader title="Category" home={false} backArrow={true} onBack={() => router.back()} />
      {loading && <View className='h-full justify-center items-center'><ActivityIndicator size="large" color="#A4243B" /></View>}
      <ScrollView className='flex h-full'>
        <View className='flex px-5 py-5'>
          {categoriesDb?.map((item, index) => (
            <View key={index} className='flex px-5 shadow-sm bg-white mb-4'>
              <TouchableOpacity onPress={() => router.push({ pathname: '/(public)/category/[categoryid]', params: { categoryid: item.id } })} className={index % 2 ? 'flex flex-row' : 'flex flex-row-reverse'}>
                <View className={`grow py-3 justify-center w-3/4 ${index % 2 ? 'pr-4' : 'pl-4'}`}>
                  <Text className='text-xl font-RobotoMedium'>{item.title}</Text>
                  <Text className='text-md font-Roboto text-gray-500 text-ellipsis overflow-hidden'>{item.descp}</Text>
                  {/* <Text className='font-Roboto text-blue-600'>View All</Text> */}
                </View>
                <View className='py-3 w-20 h-24'>
                  {getImage(item?.id)}
                </View>
              </TouchableOpacity>
            </View>
          ))}
          {/* <Text>category</Text> */}
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </>
  )
}

export default Category