import axiosClient from 'api/axios';
import { ApiClientContext } from 'context/apiClient/apiClientContext/ApiClientContext';
import { ApiClientContextValue } from 'context/apiClient/apiClientContext/ApiClientContext.types';

import { ApiClientControllerProps } from './ApiClientContextController.types';

export const ApiClientContextController = ({ children }: ApiClientControllerProps) => {
  const ctx: ApiClientContextValue = { client: axiosClient };

  return <ApiClientContext.Provider value={ctx}>{children}</ApiClientContext.Provider>;
};
