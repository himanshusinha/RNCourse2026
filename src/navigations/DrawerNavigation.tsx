import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CustomDrawer from '../components/CustomDrawer';
import BottomTabNavigator from './BottomNavigation';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Profile';
    default:
      return 'Home';
  }
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: 'slide',
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'ProfileScreen' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
