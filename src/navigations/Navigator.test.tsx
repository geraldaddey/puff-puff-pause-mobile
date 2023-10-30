import { screen, fireEvent, act } from '@testing-library/react-native';
import React from 'react';

import { render } from 'tests';

import { Navigator } from './Navigator';

describe('Navigator', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('Correctly renders login screen', async () => {
    const component = <Navigator />;
    render(component);
    const loginBtn = await screen.findByText('Login');
    expect(loginBtn).toBeOnTheScreen();
  });

  test('Click on the login button takes you to Home screen', async () => {
    const component = <Navigator />;
    render(component);
    const loginBtn = await screen.findByText('Login');
    act(() => {
      fireEvent(loginBtn, 'press');
    });

    const person = await screen.findByText('Go to Profile');
    expect(person).toBeOnTheScreen();
  });
});
