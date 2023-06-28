import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './AboutMe.styles';

export const AboutMe = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('./../../../assets/images/avatar.png')} style={styles.image} />
      <Text style={styles.fullName}>Elliot Thomson</Text>
    </View>
  );
};
