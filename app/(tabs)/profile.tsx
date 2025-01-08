import CustomButton from '@/components/CustomButton'
import CustomHeader from '@/components/Header'
import { MenuList } from '@/constants'
import { Entypo, Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function Profile() {
  return (<>
    {/* <SafeAreaView> */}
        <CustomHeader
          title="Profile"
          backArrow={true}
          onBack={() => router.back()}
        />
        <ScrollView>
          <View className="mb-5">
            <View className="flex flex-row items-center px-5 py-4">
              <View className="w-20 h-20 bg-black justify-center items-center rounded-full">
              {/* { user?.imageUrl && <Image source={{uri: user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl,}}
                     style={{ width: 80, height: 80, borderRadius: 110 / 2 }} 
                     className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                     />} */}
                {/* {! user?.imageUrl && <Text className="font-RobotoMedium text-3xl color-[#ffffff] " style={{ letterSpacing: 1.2 }}>SH</Text>} */}
                <Text className="font-RobotoMedium text-3xl color-[#ffffff] " style={{ letterSpacing: 1.2 }}>SH</Text>
              </View>
              <View className="grow">
                <Text className="text-xl font-RobotoBold m-0 pl-2"> Shivaprasad KS</Text>
                <Text className="text-sm font-Roboto pl-3 m-0 text-gray-500">shivaprasad266@gmail.com</Text>
              </View>
              <View className="p-3 ml-5">
                <TouchableOpacity onPress={() => router.push('/(public)/profileEdit')}>
                  <Feather name="edit" size={22} color="#3b82f6" />
                  <Text className="mt-2 text-blue-500 font-RobotoMedium">Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            {
                MenuList.map((item,index) => (
                    // <View key={index}>
                        <TouchableOpacity key={index}>
                            <View className="flex flex-row bg-white px-5 mb-0.5 py-4">
                                <View className="grow">
                                    <Text className="font-Roboto text-lg">{item.title}</Text>
                                    {/* <Text>{item.descp}</Text> */}
                                </View>
                                <View><Entypo name="chevron-right" size={22} color="black" /></View>
                            </View>
                        </TouchableOpacity>
                    // </View>
                ))
            }
            <View className="flex px-5 py-4">
              <CustomButton title='Logout' bgVariant='secondary' textVariant='secondary' classname='mt-6' />
            </View>
            <View style={{flexDirection:'row',padding:10,marginBottom:80,justifyContent: 'center'}}>
                <Text>Version 1.1.0</Text>
            </View>
          </View>
        </ScrollView>
      {/* </SafeAreaView> */}
      </>
  )
}

export default Profile