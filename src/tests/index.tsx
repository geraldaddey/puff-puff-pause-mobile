import { RenderOptions, render } from '@testing-library/react-native';

import { AppProviders } from 'providers/AppProviders';

import { WrapperProps } from './types';

function customRender(ui: React.ReactElement, options?: RenderOptions) {
  const Wrapper = ({ children }: WrapperProps) => <AppProviders>{children}</AppProviders>;

  return render(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

export { customRender as render };
