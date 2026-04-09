import { View, Text, StyleSheet } from 'react-native';

const CommanStylesDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CommanStylesDemo</Text>
      <Text style={styles.title}>Demo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default CommanStylesDemo;
