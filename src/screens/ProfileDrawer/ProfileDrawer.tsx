import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { TabParamList } from '../../navigations/Navigator.types';
import { AboutMe } from '../Profile/aboutMe/AboutMe';
import { Details } from '../Profile/details/Details';
import { Settings } from '../Profile/settings/Settings';

const Drawer = createDrawerNavigator<TabParamList>();

export const ProfileDrawer = () => {
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
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};
