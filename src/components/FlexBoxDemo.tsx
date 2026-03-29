import React from 'react';
import { View } from 'react-native';

const FlexBoxDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={{ flex: 0.6, backgroundColor: 'green' }} />
      <View style={{ flex: 0.4, backgroundColor: 'orange' }} />
      <View style={{ flex: 0.4, backgroundColor: 'pink' }} />
    </View>
  );
};

export default FlexBoxDemo;