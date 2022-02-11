import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, Pressable } from 'react-native';

import styles from './Settings.styles';

export const Settings = () => {
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text>Change password</Text>
      <TextInput value={password} onChangeText={setPassword} style={styles.password} />
      <Button onPress={() => setIsModalVisible(true)} title="Send" />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text>New password: {password}</Text>
            <Pressable onPress={() => setIsModalVisible(false)} style={styles.closeModal}>
              <Text>x</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
