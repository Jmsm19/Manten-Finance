import { makeStyles } from '@material-ui/styles';

import colors from '../../../themes/colors';

const useLoginPageStyles = makeStyles({
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
});

export default useLoginPageStyles;
