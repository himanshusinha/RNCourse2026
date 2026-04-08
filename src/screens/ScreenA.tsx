import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenA'>;

const ScreenA = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Screen B"
        onPress={() => {
          navigation.navigate('ScreenB', {
            user: {
              name: 'gaurav',
              email: 'gaurav@gmail.com',
            },
          });
        }}
      />
    </View>
  );
};

export default ScreenA;
