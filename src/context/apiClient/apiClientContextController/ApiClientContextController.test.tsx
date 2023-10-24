import { render, screen } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { ApiClientContextController } from './ApiClientContextController';

describe('ApiClientContextController', () => {
  const wrapper = ({ children }: { children?: ReactNode }) => <>{children}</>;

  test('renders its children', () => {
    render(
      <ApiClientContextController>
        <View>
          <Text>TEST</Text>
        </View>
      </ApiClientContextController>,
      { wrapper },
    );

    expect(screen.getByText(/TEST/)).toBeOnTheScreen();
  });
});
