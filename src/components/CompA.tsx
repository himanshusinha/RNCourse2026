import { View, Text } from 'react-native';
import React, { FC } from 'react';
import CompB from './CompB';

const CompA: FC = () => {
  return (
    <View>
      <CompB />
    </View>
  );
};

export default CompA;
