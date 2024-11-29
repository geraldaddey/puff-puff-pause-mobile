import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '../screens/Home/Home';
import { Profile } from '../screens/Profile/Profile';
import { ProfileDrawer } from '../screens/ProfileDrawer/ProfileDrawer';
import { SharedNavProfile } from '../screens/SharedNavProfile/SharedNavProfile';
import { Users } from '../screens/Users/Users';
import { SplashScreen } from '../screens/Splash/SplashScreen';
import { OnboardingScreen } from '../screens/Onboarding/OnboardingScreen';

import { RootStackParamList } from './Navigator.types';

export const Navigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />
        <Stack.Screen name="SharedNavProfile" component={SharedNavProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
