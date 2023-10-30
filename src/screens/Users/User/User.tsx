import React from 'react';
import { Text, View } from 'react-native';

import { UserProps } from './User.types';

export const User = ({ user }: UserProps) => {
  return (
    <View className="p-5 bg-blue-200 rounded-sm  ">
      <Text className="text-center text-base">{user.name}</Text>
    </View>
  );
};
