import { View, Text } from 'react-native';
import React, { FC, useEffect, useRef, useState } from 'react';

const UseRefHook: FC = () => {
  const [count, setCount] = useState(0);
  const previousRef = useRef(0);
  useEffect(() => {
    previousRef.current = count;
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Count {previousRef.current}</Text>
      <Text style={{ fontSize: 30 }}>Count {count}</Text>

      <Text onPress={() => setCount(count + 1)} style={{ fontSize: 30 }}>
        Increase Count
      </Text>
    </View>
  );
};

export default UseRefHook;
