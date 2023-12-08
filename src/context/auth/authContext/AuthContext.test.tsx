import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { AuthContext } from './AuthContext';

describe('AuthContext', () => {
  test('is undefined by default', () => {
    render(
      <AuthContext.Consumer>
        {(context) => (
          <View>
            <Text testID="context">{typeof context}</Text>
          </View>
        )}
      </AuthContext.Consumer>,
      {
        wrapper: ({ children }) => <>{children}</>,
      },
    );

    expect(screen.getByTestId('context')).toHaveTextContent('undefined');
  });
});
