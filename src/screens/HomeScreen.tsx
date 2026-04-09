import { View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';
import UseContextHookDemo from '../hooks/UseContextHookDemo';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <UseStateEx /> */}
      {/* <CounterScreen /> */}
      {/* <UseRefHook /> */}
      <UseContextHookDemo />
    </View>
  );
};

export default HomeScreen;
