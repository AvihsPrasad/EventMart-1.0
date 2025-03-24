import { useAuth } from '@clerk/clerk-expo';
import { Redirect, router } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const SplashScreen = () => {
    const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();
    useEffect(() => {
        setTimeout(() => {
            if (isSignedIn) {
                router.replace('/(tabs)')
            } else {
                router.replace('/(auth)/welcome')
            }
        }, 5000)
    })
    return (
        <View className='flex w-full h-full bg-[#A4243B] justify-center items-center'>
            <Text className='text-center font-medium text-5xl text-[#EFB8C8]'>Event Mart</Text>
            <View className='absolute bottom-10'>
            <View className='flex flex-row justify-center items-center mb-5'>
                    <ActivityIndicator size="large" color="#EFB8C8" />
                </View>
                <Text className='text-center text-[#EFB8C8]'>Powered By</Text>
                <Text className='text-center text-[#EFB8C8]'>Shivaprasad KS</Text>
            </View>
        </View>
    )
}

export default SplashScreen