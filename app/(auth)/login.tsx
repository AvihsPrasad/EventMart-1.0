import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField'
import { router } from 'expo-router';
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function LogIn() {
    const [form, setForm] = useState({
        Phone: "9591499101"
      });
  return (
    <SafeAreaView>
        <View className="w-full h-full p-5">
            <Text className='mt-10 text-4xl font-RobotoMedium'>Enter Mobile number</Text>
            <View className=' flex mt-5 mb-5 w-full'>
                <InputField
                label="verify phone number"
                placeholder="Enter email"
                textContentType="telephoneNumber"
                containerStyle="bg-gray-200"
                value={form.Phone}
                onChangeText={(value) => setForm({ ...form, Phone: value })}
                 />
            </View>
            <View>
            <CustomButton
            title={"Send OTP"}
            onPress={() => router.push("/(auth)/otp")}
            // classname="w-11/12 mt-10 mb-5"
          />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LogIn