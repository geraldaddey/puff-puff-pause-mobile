import React from 'react';
import { View, Image, Text } from 'react-native';

export const AboutMe = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require('./../../../assets/images/avatar.png')} className="w-24 h-24" />
      <Text className="text-lg">Elliot Thomson</Text>
    </View>
  );
};
