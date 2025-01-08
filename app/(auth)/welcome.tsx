import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { router } from "expo-router";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (<>
    <View className="flex w-full h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-RobotoBold bg-[#EFB8C8] py-2 px-4 rounded-2xl">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        paginationStyle={{ position: 'absolute', backgroundColor: 'transparent', bottom: -10, left: 0, alignSelf: 'flex-end', justifyContent: 'center' }} 
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#A4243B] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item: any, index) => (
          <View key={index} className="flex items-center justify-center p-2">
            <Image
              source={item.image}
              className="w-full h-3/5"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-RobotoBold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-RobotoBold mx-10 mt-3 text-center text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      {isLastSlide && (
        <View className="flex flex-row justify-center">
          <CustomButton
            title={"LogIn"}
            onPress={() =>
              isLastSlide
                ? router.push("/(auth)/login")
                : swiperRef.current?.scrollBy(1)
            }
            classname="w-11/12 mt-10 mb-5"
          />
        </View>
      )}

      { !isLastSlide && <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.push("/(auth)/login")
            : swiperRef.current?.scrollBy(1)
        }
        classname="w-11/12 mt-10 mb-5"
      />
      }
      <View className="flex pb-8 w-11/12 bg-white">
        <OAuth />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({});
