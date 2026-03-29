import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import DrawerNavigation from './src/navigations/DrawerNavigation';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
}
