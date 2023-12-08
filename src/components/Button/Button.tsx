import { styled } from 'nativewind';
import React from 'react';
import { Pressable, Text } from 'react-native';

import { ButtonProps } from './Button.types';

const Button = ({ label, buttonStyle, labelStyle, disabled, ...props }: ButtonProps) => (
  <Pressable
    {...props}
    className={`items-center justify-center py-2 px-8 rounded-full bg-blue-600 ${disabled && 'bg-slate-300'}`}
    disabled={disabled}
    style={buttonStyle}
  >
    <Text className="text-white" style={labelStyle}>
      {label}
    </Text>
  </Pressable>
);

export default styled(Button, {
  props: {
    buttonStyle: true,
    labelStyle: true,
  },
});
