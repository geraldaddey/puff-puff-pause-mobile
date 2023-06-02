import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { DetailsTabParamList } from './Details.types';
import { Age } from './tabs/Age';
import { City } from './tabs/City';
import { Name } from './tabs/Name';

const Tab = createBottomTabNavigator<DetailsTabParamList>();

export const Details = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000000',
      tabBarActiveBackgroundColor: '#87b1f5',
      tabBarStyle: { height: 64 },
      tabBarLabelStyle: { fontSize: 14 },
    }}
  >
    <Tab.Screen name="name" component={Name} />
    <Tab.Screen name="age" component={Age} />
    <Tab.Screen name="city" component={City} />
  </Tab.Navigator>
);
