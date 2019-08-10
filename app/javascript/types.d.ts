interface ProviderProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

// AUTH
interface AuthContextAction {
  type:
    | 'AUTH_CHECK_IF_LOGGED_IN'
    | 'AUTH_LOGIN'
    | 'AUTH_LOGIN_SUCCESS'
    | 'AUTH_LOGIN_FAILED'
    | 'AUTH_REGISTER'
    | 'AUTH_REGISTER_SUCCESS'
    | 'AUTH_REGISTER_FAILED'
    | 'AUTH_LOGOUT'
    | 'REGISTER_IN_MODULE'
    | 'REGISTER_IN_MODULE_SUCCESS'
    | 'REGISTER_IN_MODULE_FAILED';
  payload?: any;
}

interface AuthContextState {
  isAuth: boolean;
  authUser: null | User;
  isLoggingIn: boolean;
  isRegistering: boolean;
  signupSuccess: boolean;
}

type AuthContextDispatch = React.Dispatch<AuthContextAction>;

interface AuthContextValue {
  state: AuthContextState;
  dispatch: AuthContextDispatch;
}

// Auth Actions
interface AuthHelper {
  dispatch: AuthContextDispatch;
  [key: string]: any;
}

type LoginUser = (loginData: any, helper: AuthHelper) => Promise<void>;
type RegisterUser = (userData: any, helper: AuthHelper) => Promise<void>;
type LogoutUser = (helper: AuthHelper) => Promise<void>;

// Auth Actions
type LoginUserReducer = (loginData: any, helper: AuthHelper) => Promise<void>;
type RegisterUserReducer = (userData: any, helper: AuthHelper) => Promise<void>;
type LogoutUserReducer = (helper: AuthHelper) => Promise<void>;
type CheckIfUserIsLoggedInReducer = (helper: AuthHelper) => Promise<void>;

// Auth Reducer
type AuthContextReducer = (state: AuthContextState, action: AuthContextAction) => AuthContextState;
