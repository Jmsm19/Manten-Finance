import { SendData, GetData } from '../../utils/http';
import { generateSnackbarConfig, capitalize } from '../../utils';

export const LoginUser: LoginUserReducer = async (loginData, { dispatch, enqueueSnackbar }) => {
  dispatch({ type: 'AUTH_LOGIN' });

  try {
    const response = await SendData('POST', '/auth/login', loginData);
    const { data } = response.data;

    dispatch({
      type: 'AUTH_LOGIN_SUCCESS',
      payload: {
        user: { id: data.id, ...data.attributes },
      },
    });
  } catch ({ response }) {
    if (response.status === 401) {
      enqueueSnackbar('Invalid credentials', generateSnackbarConfig('error'));
    }

    dispatch({
      type: 'AUTH_LOGIN_FAILED',
    });
  }
};

export const RegisterUser: RegisterUserReducer = async (
  userData,
  { dispatch, enqueueSnackbar },
) => {
  dispatch({ type: 'AUTH_REGISTER' });

  try {
    await SendData('POST', '/auth/register', { user: userData });

    enqueueSnackbar('Successfully registered', generateSnackbarConfig('success'));

    dispatch({ type: 'AUTH_REGISTER_SUCCESS' });
  } catch ({ response }) {
    if (response.status === 401) {
      enqueueSnackbar('Invalid credentials', generateSnackbarConfig('error'));
    }
    const { errors } = response.data;
    const firstErrorKey = Object.keys(errors)[0];
    const firstError = errors[firstErrorKey][0];

    if (firstError) {
      enqueueSnackbar(
        `${capitalize(firstErrorKey)} ${firstError}`,
        generateSnackbarConfig('error'),
      );
    }

    dispatch({
      type: 'AUTH_REGISTER_FAILED',
      payload: { ...response.data },
    });
  }
};

export const CheckIfUserIsLoggedIn: CheckIfUserIsLoggedInReducer = async ({ dispatch }) => {
  try {
    const res = await GetData('/auth/logged_in');
    const { data } = res.data;

    dispatch({
      type: 'AUTH_CHECK_IF_LOGGED_IN',
      payload: {
        user: { id: data.id, ...data.attributes },
      },
    });
  } catch ({ response }) {
    if (response.status === 401) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: { ...response },
      });
    }
  }
};

export const LogoutUser: LogoutUserReducer = async ({ dispatch, enqueueSnackbar }) => {
  try {
    await SendData('DELETE', '/auth/logout');
    dispatch({ type: 'AUTH_LOGOUT' });
  } catch ({ response }) {
    if (response.status === 401) {
      enqueueSnackbar(response.statusText, generateSnackbarConfig('error'));
    }

    console.error('TCL: response', response);
  }
};
