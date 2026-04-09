import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('every time');
  }); // every time

  useEffect(() => {
    // api calling
    console.log('one time');
  }, []); // one time

  useEffect(() => {
    console.log('conditional time');
  }, [counter2]);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 1: {counter1}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter1(counter1 + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter1(counter1 - 1)}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 2: {counter2}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter2(counter2 + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter2(counter2 - 1)}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    margin: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CounterScreen;

// side effects
// api calling
// listeners
// resources clean up
// timers handling
