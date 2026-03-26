import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface MyButtonProps {
  title: string;
}
const MyButton: FC<MyButtonProps> = ({ title }) => {
  return (
    <View style={styles.btnStyle}>
      <Text style={styles.btnTitleStyle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  btnTitleStyle: { color: 'white', fontWeight: 'bold' },
});
export default MyButton;
