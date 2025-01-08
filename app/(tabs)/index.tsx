import CustomHeader from '@/components/Header';
import { HomeCat } from '@/components/ui/HomeCat';
import OfferSlide from '@/components/ui/offerSlide';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (<>
    {/* <StatusBar barStyle="light-content" backgroundColor={'#A4243B'}/> */}
    {/* <SafeAreaView className='bg-[#A4243B]'> */}
      <ScrollView className='bg-[#efefef] h-screen'>
        <CustomHeader title="Home" home={true} onNotification={() => router.push("/(public)/notification")} />
        <HomeCat />
        <OfferSlide />
        <View className='px-5 mb-3'><Text className='text-2xl font-bold'>Popular</Text></View>
      </ScrollView>
    {/* </SafeAreaView> */}
    </>);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
