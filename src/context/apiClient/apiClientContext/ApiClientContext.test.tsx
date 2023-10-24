import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { ApiClientContext } from './ApiClientContext';

describe('ApiClientContext', () => {
  test('is undefined by default', () => {
    render(
      <ApiClientContext.Consumer>
        {(context) => (
          <View>
            <Text testID="context">{typeof context}</Text>
          </View>
        )}
      </ApiClientContext.Consumer>,
      {
        wrapper: ({ children }) => <>{children}</>,
      },
    );

    expect(screen.getByTestId('context')).toHaveTextContent('undefined');
  });
});
