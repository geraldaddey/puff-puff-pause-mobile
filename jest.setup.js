import '@testing-library/jest-native/extend-expect';
import { jest } from '@jest/globals';

import { server } from './src/api/mocks/server';
// surpressing warning resulted by useLinking due to usage of NavigationContainer
jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({ getInitialState: { then: () => null } }),
  __esModule: true,
}));

global.fetch = require('node-fetch');

// Establish API mocking before all tests.
// eslint-disable-next-line no-undef
beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
// eslint-disable-next-line no-undef
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
// eslint-disable-next-line no-undef
afterAll(() => server.close());

// surpressing Animated: `useNativeDriver` is not supported warning
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');
  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
