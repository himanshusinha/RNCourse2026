import { View } from 'react-native';
import React, { FC } from 'react';
import FunctionalComponent from './src/components/FunctionalComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./global.css"
import FlexBoxDemo from './src/components/FlexBoxDemo';

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* <ClassComponent /> */}
        {/* <FunctionalComponent /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
