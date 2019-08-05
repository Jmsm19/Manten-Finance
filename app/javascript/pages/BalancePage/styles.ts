import { makeStyles } from '@material-ui/core';

import theme from '../../themes/materialTheme';

const usePageStyles = makeStyles({
  secondColTopRow: {
    marginBottom: theme.spacing(1),
  },
  secondColActionBtnRow: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  floatingActionBtn: {
    position: 'fixed',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
});

export default usePageStyles;
