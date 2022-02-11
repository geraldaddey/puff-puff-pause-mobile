import React from 'react';
import { Text, View } from 'react-native';

import styles from '../aboutMe/AboutMe.styles';

export const Details = () => (
  <View style={styles.wrapper}>
    <Text>Full Name: Elliot Thomson</Text>
    <Text>Age: 30</Text>
    <Text>City: New York</Text>
  </View>
);
