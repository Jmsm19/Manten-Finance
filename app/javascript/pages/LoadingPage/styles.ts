import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useLoadingPageStyles = makeStyles((theme: Theme) => ({
  pageRootContainer: {
    height: 'calc(100vh - 40px)',
  },
  appTitleContainer: {
    marginBottom: theme.spacing(2),
  },
  appTitle: {
    width: '100%',
  },
  linearProgress: {
    width: '50%',
  },
  subtitle: {
    marginTop: theme.spacing(1) / 2,
  },
}));

export default useLoadingPageStyles;
