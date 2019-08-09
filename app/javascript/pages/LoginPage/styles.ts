import { makeStyles } from '@material-ui/styles';

import colors from '../../themes/colors';

const useLoginPageStyles = makeStyles({
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
  dividerSection: {
    marginTop: 16,
    marginBottom: 8,
  },
  inlineDivider: {
    display: 'inline-block',
    height: 1,
    width: 150,
    marginBottom: 6,
  },
  dividerText: {
    width: 20,
    padding: 10,
    color: colors.fadedText,
    fontStyle: 'italic',
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

export default useLoginPageStyles;
