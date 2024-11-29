import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/Navigator.types';

type OnboardingScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleComplete = () => {
    navigation.replace('MainTabs');
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#F5F5F5',
          image: (
            <View style={styles.imageContainer}>
              <Text style={styles.icon}>🌿</Text>
            </View>
          ),
          title: 'Welcome to Puff Puff Pause',
          subtitle: 'Your mindful companion for balanced cannabis consumption',
        },
        {
          backgroundColor: '#F5F5F5',
          image: (
            <View style={styles.imageContainer}>
              <Text style={styles.icon}>⏱️</Text>
            </View>
          ),
          title: 'Track Your Sessions',
          subtitle: 'Monitor your usage patterns and set healthy boundaries',
        },
        {
          backgroundColor: '#F5F5F5',
          image: (
            <View style={styles.imageContainer}>
              <Text style={styles.icon}>🧘</Text>
            </View>
          ),
          title: 'Mindful Consumption',
          subtitle: 'Learn to integrate mindfulness into your cannabis experience',
        },
      ]}
      onDone={handleComplete}
      onSkip={handleComplete}
      showSkip={true}
      showNext={true}
      showDone={true}
      containerStyles={styles.container}
      titleStyles={styles.title}
      subTitleStyles={styles.subtitle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  subtitle: {
    color: '#424242',
    paddingHorizontal: 20,
  },
}); 