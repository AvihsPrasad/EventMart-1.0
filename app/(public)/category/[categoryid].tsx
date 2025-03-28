import CustomButton from '@/components/CustomButton';
import CustomHeader from '@/components/Header';
import InputField from '@/components/InputField';
import ListCard from '@/components/ListCard';
import { cameraList, decorationList, escortList, foodList, hallList, invitationList, jewelList, muaList, musicList, propsList } from '@/constants';
import { useFetch } from '@/lib/fetch';
import { Entypo, Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryId = () => {
    const { categoryid } = useLocalSearchParams();
    const [form, setForm] = useState({ searchtext: "", });
    const { data: categoriesDb } = useFetch<any[]>("/(api)/getcat");
    const catTitle = categoriesDb?.find((itmInner) => itmInner.id == categoryid);
    const { data: businesDb, loading, error } = useFetch<any[]>("/(api)/getbusiness");
    return (
        <>
            <CustomHeader title={catTitle? catTitle?.title : ''} home={false} backArrow={true} onBack={() => router.back()} />
            {/* <Text>{JSON.stringify({listOfData}.listOfData)}</Text> */}
            {loading && <View className='h-full justify-center items-center'><ActivityIndicator size="large" color="#A4243B" /></View>}
            <View className='p-4 h-full pb-24'>
                <ScrollView>
                    <View className='flex bg-white p-4 mb-5 border-[1px] border-gray-300 rounded-lg'>
                        <View className='flex flex-row w-full gap-2'>
                            <View className='w-[48%]'>
                                <InputField
                                    placeholder='From'
                                    value={form.searchtext}
                                    onChangeText={(value) => setForm({ ...form, searchtext: value })}
                                    icon={<Entypo name={'calendar'}
                                        color={'#979dac'} style={{ fontSize: 20, marginLeft: 15 }} />
                                    } />
                            </View>
                            <View className='w-[48%]'>
                                <InputField
                                    placeholder='to'
                                    value={form.searchtext}
                                    onChangeText={(value) => setForm({ ...form, searchtext: value })}
                                    icon={<Entypo name={'calendar'}
                                        color={'#979dac'} style={{ fontSize: 20, marginLeft: 15 }} />
                                    } />
                            </View>
                        </View>
                        <View className='flex'>
                            <View className='w-full'>
                                <InputField
                                    placeholder='People capacity'
                                    value={form.searchtext}
                                    onChangeText={(value) => setForm({ ...form, searchtext: value })}
                                    icon={<Feather name={'user'}
                                        color={'#979dac'} style={{ fontSize: 20, marginLeft: 15 }} />
                                    } />
                            </View>
                            <CustomButton title={"Search"} classname="w-full" />
                        </View>
                    </View>
                    {catTitle?.title === 'Venues' && hallList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Props' && propsList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Photography' && cameraList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Decorations' && decorationList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Music & DJ' && musicList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'MUA' && muaList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Food & Beverages' && foodList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Invitations' && invitationList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Arificial Jewels' && jewelList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                    {catTitle?.title === 'Vehical Convoie' && escortList.map((datas, index) => <TouchableOpacity key={index} className='mb-2' onPress={() => router.push({ pathname: '/(public)/product/[productId]', params: { productId: datas.Id } })}><ListCard DataList={datas} /></TouchableOpacity>)}
                </ScrollView>
            </View>
        </>
    )
}

export default CategoryId