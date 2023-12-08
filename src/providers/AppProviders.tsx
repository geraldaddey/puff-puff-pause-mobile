import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ApiClientContextController>{children}</ApiClientContextController>
);
