import { View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenC'>;

const ScreenC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.pop(2);
        }}
      />
    </View>
  );
};

export default ScreenC;
