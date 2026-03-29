import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();

  const MenuItem = ({ label, icon, screen }: any) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(screen as never)}
    >
      <Ionicons name={icon} size={22} />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <MenuItem label="Home" icon="home-outline" screen="Home" />
        <MenuItem label="Profile" icon="person-outline" screen="Profile" />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
