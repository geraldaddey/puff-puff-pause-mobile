import { GetMeQueryResponse, LoginMutationArguments } from 'api/actions/auth/auth.types';

import { AuthState } from '../authReducer/authReducer.types';

export type AuthContextValue = AuthState & {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  login: ({ password, username }: LoginMutationArguments) => void;
  logout: () => void;
  user: GetMeQueryResponse | undefined;
};
