import { render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { LocaleContext } from './LocaleContext';

describe('LocaleContext', () => {
  test('is undefined by default', () => {
    render(
      <LocaleContext.Consumer>
        {(context) => (
          <View>
            <Text testID="context">{typeof context}</Text>
          </View>
        )}
      </LocaleContext.Consumer>,
      {
        wrapper: ({ children }) => <>{children}</>,
      },
    );

    expect(screen.getByTestId('context')).toHaveTextContent('undefined');
  });
});
