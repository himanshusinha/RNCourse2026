import { View } from 'react-native';
import React, { createContext } from 'react';
import CompA from '../components/CompA';

export type User = {
  name: string;
  email: string;
};

export const UserContext = createContext<User | null>(null);

const UseContextHookDemo = () => {
  const user: User = {
    name: 'Himanshu',
    email: 'himanshusinha011@gmail.com',
  };

  return (
    <UserContext.Provider value={user}>
      <View>
        <CompA />
      </View>
    </UserContext.Provider>
  );
};

export default UseContextHookDemo;
