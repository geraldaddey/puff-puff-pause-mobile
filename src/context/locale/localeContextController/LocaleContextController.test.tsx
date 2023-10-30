import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { ReactNode, useContext } from 'react';
import { Button, Text, View } from 'react-native';

import { AppLocale } from '../AppLocale.enum';
import { defaultLocale } from '../defaultLocale';
import { LocaleContext } from '../localeContext/LocaleContext';

import { LocaleContextController } from './LocaleContextController';

describe('LocaleContextController', () => {
  const wrapper = ({ children }: { children?: ReactNode }) => <>{children}</>;

  const TestComponent = () => {
    const context = useContext(LocaleContext);

    return (
      <>
        <Button onPress={() => context?.setLocale(AppLocale.pl)} title="SET LOCALE" />
        <View>
          <Text testID="context">{JSON.stringify(context)}</Text>
        </View>
      </>
    );
  };

  test('renders its children', () => {
    render(
      <LocaleContextController>
        <Text>TEST</Text>
      </LocaleContextController>,
      { wrapper },
    );

    expect(screen.getByText(/TEST/)).toBeOnTheScreen();
  });

  test('provides functioning locale context', async () => {
    render(
      <LocaleContextController>
        <TestComponent />
      </LocaleContextController>,
      { wrapper },
    );

    expect(screen.getByTestId('context')).toHaveTextContent(
      JSON.stringify({
        defaultLocale,
        locale: defaultLocale,
      }),
    );
    const button = await screen.findByText(/SET LOCALE/);
    act(() => fireEvent(button, 'press'));

    expect(screen.getByTestId('context')).toHaveTextContent(
      JSON.stringify({
        defaultLocale,
        locale: AppLocale.pl,
      }),
    );
  });
});
