import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>History Content</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 