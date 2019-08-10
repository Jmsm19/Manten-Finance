import React from 'react';
import Cookie from 'js-cookie';
import { useSnackbar } from 'notistack';

import AuthStateReducer from '../store/reducers/authReducer';
import * as AA from '../store/actions/authActions';
import LoadingPage from '../pages/LoadingPage';

const AuthenticationContext = React.createContext<undefined | AuthContextValue>(undefined);

export const AuthenticationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [shouldMountChildren, setShouldMountChildren] = React.useState(false);

  const initialState: AuthContextState = {
    isAuth: !!Cookie.get('_authentication'),
    authUser: null,
    isLoggingIn: false,
    isRegistering: false,
    signupSuccess: false,
  };

  const [state, dispatch] = React.useReducer(AuthStateReducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  const bootstrapApp = React.useCallback(async () => {
    await Promise.all([AA.CheckIfUserIsLoggedIn({ dispatch })]);
    setShouldMountChildren(true);
  }, []);

  React.useEffect(() => {
    bootstrapApp();
  }, [bootstrapApp]);

  return (
    <AuthenticationContext.Provider value={value}>
      {shouldMountChildren ? children : <LoadingPage />}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  const { enqueueSnackbar } = useSnackbar();
  const context = React.useContext(AuthenticationContext);

  if (!context) {
    throw new Error('useAuthentication must be used within AuthenticationProvider');
  }

  const { dispatch, state } = context;
  const helpers = { dispatch, enqueueSnackbar };

  const actions = {
    login: (loginData: any) => AA.LoginUser(loginData, helpers),
    register: (userData: any) => AA.RegisterUser(userData, helpers),
    logout: () => AA.LogoutUser(helpers),
    checkIfUserIsLoggedIn: () => AA.CheckIfUserIsLoggedIn(helpers),
  };

  return {
    ...state,
    ...actions,
  };
};
