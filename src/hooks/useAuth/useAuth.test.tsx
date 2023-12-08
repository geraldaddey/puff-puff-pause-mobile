import { act, renderHook } from '@testing-library/react-native';

import { AppProviders } from 'providers/AppProviders';
import { authStorage } from 'storage/storage';

import { useAuth } from './useAuth';

describe('useAuth', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      authStorage.clearAll();
    });
  });

  test('adds token to session storage on login', async () => {
    expect(authStorage.getAllKeys()).toEqual([]);
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <AppProviders>
          <>{children}</>
        </AppProviders>
      ),
    });

    await act(() => result.current?.login({ password: 'foo', username: 'bar' }));
    expect(authStorage.getAllKeys()).toEqual(['auth']);

    const authStorageJSON = authStorage.getString('auth');
    const authStorageObject = JSON.parse(authStorageJSON || '');
    expect(authStorageObject).toEqual(
      expect.objectContaining({
        accessToken: expect.any(String),
        refreshToken: expect.any(String),
        expires: expect.any(Number),
      }),
    );
  });

  test('removes token from session storage on logout', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => (
        <AppProviders>
          <>{children}</>
        </AppProviders>
      ),
    });

    await act(() => result.current?.login({ password: 'foo', username: 'bar' }));
    await act(() => result.current.logout());

    const authStorageJSON = authStorage.getString('auth');
    const authStorageObject = JSON.parse(authStorageJSON || '');
    expect(authStorageObject).toEqual({
      accessToken: null,
      refreshToken: null,
      expires: null,
    });
  });
});
