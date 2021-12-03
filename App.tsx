import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.text}>React Native Boilerplate</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
