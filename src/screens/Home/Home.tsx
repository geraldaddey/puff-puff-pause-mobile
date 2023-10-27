import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import Button from 'components/Button/Button';
import { useAuth } from 'hooks/useAuth/useAuth';

export const Home = () => {
  const navigation = useNavigation();
  const { user, login, logout, isAuthenticated, isAuthenticating } = useAuth();

  return (
    <View className="flex-1 items-center justify-center">
      {isAuthenticating && <Text>Loading...</Text>}
      {isAuthenticated ? (
        <View className="g-2">
          <Text className="text-xl text-center mb-3">
            Hello<Text className="font-bold"> {user?.firstName}</Text> !
          </Text>
          <Button label="Go to Profile" onPress={() => navigation.navigate('Profile')} testID="goToProfileButton" />
          <Button label="Go to Profile (Drawer Navigation)" onPress={() => navigation.navigate('ProfileDrawer')} />
          <Button label="Go to Profile (Shared Navigation)" onPress={() => navigation.navigate('SharedNavProfile')} />
          <Button label="Logout" onPress={() => logout()} buttonStyle="bg-transparent" labelStyle="text-black" />
        </View>
      ) : (
        <Button
          label="Login"
          onPress={() => login({ password: '123', username: 'test' })}
          disabled={isAuthenticating}
        />
      )}
    </View>
  );
};
