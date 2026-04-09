import { View, Text } from 'react-native';
import React, { FC, useContext } from 'react';
import { UserContext } from '../hooks/UseContextHookDemo';

const CompC: FC = () => {
  const userContext = useContext(UserContext);

  return (
    <View>
      <Text>{userContext?.name}</Text>
      <Text>{userContext?.email}</Text>
    </View>
  );
};

export default CompC;
