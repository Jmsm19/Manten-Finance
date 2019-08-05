import { makeStyles } from '@material-ui/styles';

import styleConstants from '../../themes/constants';
import colors from '../../themes/colors';
import mediaQ from '../../themes/mediaQuery';

const useAppStyles = makeStyles({
  rootContainer: {
    paddingTop: styleConstants.doubleMargin,
    paddingBottom: styleConstants.doubleMargin,
    backgroundColor: colors.fadedWhite,
  },
  mainGrid: {
    height: '100%',

    [mediaQ.md]: {
      flexDirection: 'column-reverse',
    },
  },
});

export default useAppStyles;
