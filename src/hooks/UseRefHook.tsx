import { View, Text, TextInput, Button } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';

const UseRefHook: FC = () => {
  const [count, setCount] = useState(0);
  const previousRef = useRef<number>(0);
  const inputRef = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(0);

  useEffect(() => {
    previousRef.current = count;
  }, [count]);

  const handleInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Previous Count {previousRef.current}</Text>
      <Text style={{ fontSize: 30 }}>Current Count {count}</Text>

      <Text onPress={() => setCount(count + 1)} style={{ fontSize: 30 }}>
        Increase Count
      </Text>

      <TextInput
        ref={inputRef}
        placeholder="Enter text"
        style={{
          borderWidth: 1,
          color: 'black',
          marginTop: 10,
          height: 50,
          paddingHorizontal: 10,
        }}
      />
      <TextInput
        ref={inputRef2}
        placeholder="Enter text"
        style={{
          borderWidth: 1,
          color: 'black',
          marginTop: 10,
          height: 50,
          paddingHorizontal: 10,
        }}
      />
      <Button title="Focus input" onPress={() => handleInput()} />

      <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center' }}>
        Timer : {timer}
      </Text>
      <Button
        onPress={() => clearInterval(intervalRef.current)}
        title="Pause Timer"
      />
    </View>
  );
};

export default UseRefHook;
