const AuthStateReducer: AuthContextReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_CHECK_IF_LOGGED_IN':
      return { ...state, isAuth: true, authUser: { ...payload.user } };

    // User Login
    case 'AUTH_LOGIN':
      return { ...state, isLoggingIn: true };
    case 'AUTH_LOGIN_SUCCESS':
      return { ...state, isAuth: true, authUser: { ...payload.user }, isLoggingIn: false };
    case 'AUTH_LOGIN_FAILED':
      return { ...state, isAuth: false, isLoggingIn: false };

    // User Register
    case 'AUTH_REGISTER':
      return { ...state, isRegistering: true };
    case 'AUTH_REGISTER_SUCCESS':
      return { ...state, isRegistering: false };
    case 'AUTH_REGISTER_FAILED':
      return { ...state, isRegistering: false };

    // User Logout
    case 'AUTH_LOGOUT':
      return { ...state, isAuth: false, authUser: null };

    // Default responses
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default AuthStateReducer;
