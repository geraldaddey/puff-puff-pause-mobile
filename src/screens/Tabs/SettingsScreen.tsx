import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/Navigator.types';

type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();

  const handlePress = (setting: string) => {
    switch (setting) {
      case 'Profile Settings':
        break;
      case 'Notification Settings':
        // TODO: Add navigation to Notifications
        break;
      case 'Privacy Settings':
        // TODO: Add navigation to Privacy
        break;
      case 'App Theme':
        // TODO: Add navigation to Theme
        break;
      case 'About':
        // TODO: Add navigation to About
        break;
      default:
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        
        <View style={styles.content}>
          <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Profile Settings')}>
            <Text style={styles.settingText}>Profile Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Notification Settings')}>
            <Text style={styles.settingText}>Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Privacy Settings')}>
            <Text style={styles.settingText}>Privacy Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('App Theme')}>
            <Text style={styles.settingText}>App Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('About')}>
            <Text style={styles.settingText}>About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingText: {
    fontSize: 18,
    color: '#333',
  },
}); 