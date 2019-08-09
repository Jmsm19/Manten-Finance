import { makeStyles } from '@material-ui/core';

import colors from '../../themes/colors';

const useUnauthenticatedAppStyles = makeStyles({
  page: {
    height: 'calc(100vh - 40px - 30px)',
  },
  pageGridRow: {
    width: 350,
  },
  appTitleGridSection: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
  footer: {
    height: 20,
    paddingBottom: 10,
    textAlign: 'center',
    color: colors.fadedText,
  },
  footerLink: {
    color: colors.fadedText,
    textDecoration: 'none',
  },
});

export default useUnauthenticatedAppStyles;
