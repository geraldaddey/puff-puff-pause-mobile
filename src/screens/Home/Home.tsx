import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Go to Profile (Drawer Navigation)" onPress={() => navigation.navigate('ProfileDrawer')} />
      <Button title="Go to Profile (Shared Navigation)" onPress={() => navigation.navigate('SharedNavProfile')} />
    </View>
  );
};
