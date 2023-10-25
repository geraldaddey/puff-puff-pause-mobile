import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigator } from './src/navigations/Navigator';
import { AppProviders } from './src/providers/AppProviders';

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
