import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

class ClassComponent extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Class Component</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titleStyle: {
    fontSize: 20,
  },
});
export default ClassComponent;
