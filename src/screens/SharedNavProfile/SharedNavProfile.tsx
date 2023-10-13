import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { TabParamList } from '../../navigations/Navigator.types';
import { AboutMe } from '../Profile/aboutMe/AboutMe';

import { Details } from './details/Details';

const Drawer = createDrawerNavigator<TabParamList>();

export const SharedNavProfile = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AboutMe"
        component={AboutMe}
        options={{
          title: 'About me',
        }}
      />
      <Drawer.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Details',
        }}
      />
    </Drawer.Navigator>
  );
};
