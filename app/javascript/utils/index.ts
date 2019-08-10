import { Location } from 'history';

export const isRouteActive = (location: Location, routePath: string) =>
  location.pathname === routePath;

export const generateSnackbarConfig = (
  variant: 'default' | 'error' | 'success' | 'warning' | 'info',
  horizontal: 'left' | 'center' | 'right' = 'center',
  vertical: 'top' | 'bottom' = 'top',
  extraOptions = {},
) => ({
  variant,
  anchorOrigin: {
    horizontal,
    vertical,
  },
  ...extraOptions,
});

/**
 * Capitalize the first letter of a given string
 *
 * @param {String} str
 */
export const capitalize = (string = '') => string[0].toUpperCase() + string.substr(1);
