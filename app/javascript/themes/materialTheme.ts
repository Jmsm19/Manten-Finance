import { createMuiTheme } from '@material-ui/core';

import colors from './colors';
import styleConstants from './constants';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: colors.primaryBlue },
    secondary: { main: colors.darkBlue },
    error: { main: colors.danger },
    text: {
      primary: colors.text,
      secondary: colors.fadedText,
    },
    background: {
      default: colors.fadedWhite,
      paper: colors.white,
    },
  },
  shape: {
    borderRadius: styleConstants.borderRadius,
  },
});

export default theme;
