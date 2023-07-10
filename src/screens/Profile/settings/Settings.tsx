import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, Pressable } from 'react-native';

export const Settings = () => {
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Change password</Text>
      <TextInput value={password} onChangeText={setPassword} className="bg-primary w-32 h-8 rounded p-1" />
      <Button onPress={() => setIsModalVisible(true)} title="Send" />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 items-center justify-center">
          <View className="h-52 w-52 bg-white items-center justify-center rounded-[10px] shadow">
            <Text>New password: {password}</Text>
            <Pressable onPress={() => setIsModalVisible(false)} className="absolute top-0 right-0 p-2.5">
              <Text>x</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
