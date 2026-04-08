import { View, Text } from 'react-native';
import React, { FC } from 'react';
import CompC from './CompC';

const CompB: FC = () => {
  return (
    <View>
      <CompC />
    </View>
  );
};

export default CompB;
