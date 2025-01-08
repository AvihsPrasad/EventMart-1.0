import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#A4243B',
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle:{...styles.barContainer}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} style={{fontSize:20}}/>,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Category',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="category" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Destination',
          tabBarIcon: ({ color,focused }) => <AntDesign name="rocket1" size={24} color={color} />,
        }}
      />
      <Tabs.Screen name='profile' options={{
        title: 'Account',
        tabBarIcon: ({ color, focused }) => (
          // <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:20}}/>
          // <AntDesign name="setting" size={24} color={color} />
          <FontAwesome name="user" size={24} color={color} />
        ),
      }} />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  barContainer: {
    // backgroundColor:'#A4243B'
  },
});