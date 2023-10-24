import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppProviders } from 'providers/AppProviders';

import { Navigator } from './src/navigations/Navigator';

const App = () => {
  return (
    <AppProviders>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </AppProviders>
  );
};

export default App;
