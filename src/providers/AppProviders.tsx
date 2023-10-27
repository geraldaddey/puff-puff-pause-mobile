import { ApiClientContextController } from '../context/apiClient/apiClientContextController/ApiClientContextController';
import { AuthContextController } from '../context/auth/authContextController/AuthContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ApiClientContextController>
    <AuthContextController>{children}</AuthContextController>
  </ApiClientContextController>
);
