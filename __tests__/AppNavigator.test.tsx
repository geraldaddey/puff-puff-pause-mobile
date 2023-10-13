import { render, screen, fireEvent, act } from '@testing-library/react-native';
import React from 'react';

import { Navigator } from 'navigations/Navigator';

it('Correctly renders home screen', async () => {
  const component = <Navigator />;
  render(component);
  const btn = await screen.findByText('Go to Profile');
  expect(btn).toBeOnTheScreen();
});

test('Click on the button takes you to Profile screen', async () => {
  const component = <Navigator />;
  render(component);
  const goToProfileButton = await screen.findByText('Go to Profile');
  act(() => {
    fireEvent(goToProfileButton, 'press');
  });

  const person = await screen.findByText('Elliot Thomson');
  expect(person).toBeOnTheScreen();
});
