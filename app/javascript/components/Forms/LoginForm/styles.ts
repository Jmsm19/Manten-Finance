import { makeStyles } from '@material-ui/styles';

import colors from '../../../themes/colors';

const useLoginFormStyles = makeStyles({
  fromGridContainer: {
    width: '100%',
  },
  formFieldIcon: {
    color: colors.fadedText,
  },
});

export default useLoginFormStyles;
