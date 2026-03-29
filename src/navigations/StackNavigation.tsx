import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigation from './TopTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="TopTabs"
        component={TopTabNavigation}
        options={{ headerTitle: 'Top Tabs' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
