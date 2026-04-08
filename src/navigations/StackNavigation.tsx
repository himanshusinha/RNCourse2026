import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomNavigation';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';
import ScreenA from '../screens/ScreenA';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

// Stack Navigator: Manages screen navigation using a stack (push/pop).
// Drawer Navigator: Provides side menu navigation.
// Bottom Tabs: Provides navigation using tabs at the bottom.
// Material Top Tabs: Provides tabs at the top with swipe support.
