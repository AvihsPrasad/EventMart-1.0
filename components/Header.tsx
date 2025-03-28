import { HeaderProps } from "@/types/type";
import { AntDesign, Feather, FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, Text, View, Image, Platform } from "react-native";
import InputField from "./InputField";


const CustomHeader = ({
    onSearch,
    onWishList,
    onNotification,
    onBack,
    title,
    user,
    userImage,
    backArrow = false,
    home = false,
    ...props
  }: HeaderProps) => {
  return (<>
    <View className="flex flex-row px-3 py-3 bg-[#A4243B] shadow-lg h-[80px] relative top-0">
        {home && <View className={`grow justify-center${Platform.OS !== 'ios' ? 'pt-6':''}`}>
            <View className="flex flex-row items-center">
                    <View>
                        <Text className="text-lg font-RobotoMedium pl-3 m-0 text-white capitalize">Hi, {user ? user : 'Guest'}</Text>
                        <View className="flex flex-row mt-1 pl-3">
                            <View className="mr-2"><FontAwesome6 name="location-dot" size={24} color="#EFB8C8" /></View>
                            <Text className="text-base font-Roboto m-0 text-white">{user ? user : 'location'}</Text>
                        </View>
                    </View>
                </View>
            </View>}
            {!home && title && 
            <>
            <View className="flex flex-row absolute left-4 top-4 pl-2 w-[45px] h-[45px] justify-center items-center rounded-full bg-[#EFB8C8]">
                {backArrow && <TouchableOpacity  onPress={() => router.back()} className="mr-2"><AntDesign name="arrowleft" size={20} color="#000" /></TouchableOpacity>}
            </View>
            <View className="grow flex flex-row justify-center items-center">
                <Text className="text-xl font-RobotoMedium text-white tracking-widest">{title}</Text>
            </View>
            </>}
            {home && <View className="grow justify-center">
            <View className="flex flex-row items-end justify-end ">
                <TouchableOpacity  onPress={onNotification} className="p-3 bg-[#EFB8C8] rounded-lg"><FontAwesome name="bell" size={20} color="#000" /></TouchableOpacity>
            </View>
        </View>}
    </View>
    {home && <View className="flex px-3 bg-[#A4243B] shadow-lg pb-3">
        <TouchableOpacity  onPress={() => router.push('/(public)/search')} className="mx-1">
            <InputField disable={true} placeholder='Search' containerStyle={'bg-[#EFB8C8]'} onPress={() => router.push('/(public)/search')} icon={<Ionicons name={'search' } color={'#979dac'} style={{fontSize:20,marginLeft: 15}}/>}/>
        </TouchableOpacity>
    </View>}
    </>
  );
};

export default CustomHeader;