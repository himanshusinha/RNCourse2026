import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import MyButton from './MyButton';

const FunctionalComponent: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Functional Component</Text>
      <MyButton title="Press me" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titleStyle: {
    fontSize: 20,
  },
});
export default FunctionalComponent;
