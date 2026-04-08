import { View, Text, Button } from 'react-native';
import React, { FC, useState } from 'react';

const UseStateEx: FC = () => {
  const [bgColor, setBgColor] = useState('red');
  const [switchOn, setSwitchOn] = useState(true);
  
  const [name, setName] = useState({
    name: 'Gaurav',
    email: 'Gaurav@gmail.com',
  });
  
  const handleChange = () => {
    setBgColor(bgColor === 'red' ? 'green' : 'red');
  };

  const handleValues = () => {
    setName({
      name: 'Himanshu',
      email: 'himanshu@gmail.com',
    });
  };
  const handleSwitch = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: bgColor,
          marginBottom: 20,
        }}
      >
        <Text>{name.name}</Text>
        <Text>{name.email}</Text>
      </View>

      <Text>{switchOn ? 'ON' : 'OFF'}</Text>
      <Button title="Change Box Color" onPress={() => handleChange()} />
      <Button title="Change Values" onPress={() => handleValues()} />

      <Button title="Switch" onPress={() => handleSwitch()} />
    </>
  );
};

export default UseStateEx;
