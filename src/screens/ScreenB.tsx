import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenB'>;

type ScreenBRouteProp = RouteProp<RootStackParamList, 'ScreenB'>;

const ScreenB = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ScreenBRouteProp>();

  console.log(route.params.user.name);
  console.log(route.params.user.email);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params.user.name}</Text>
      <Text>{route.params.user.email}</Text>

      <Button
        title="Go to Screen C"
        onPress={() => {
          navigation.navigate('ScreenC');
        }}
      />

      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ScreenB;
