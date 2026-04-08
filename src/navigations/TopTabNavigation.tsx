import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#fff', marginTop: 50 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigation;
