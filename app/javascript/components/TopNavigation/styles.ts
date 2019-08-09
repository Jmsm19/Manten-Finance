import { makeStyles } from '@material-ui/core';

import styleConstants from '../../themes/constants';
import colors from '../../themes/colors';

const useTopNavStyles = makeStyles({
  topNav: {
    borderRadius: styleConstants.borderRadius,
    boxShadow: styleConstants.boxShadow,
    marginBottom: styleConstants.doubleMargin,
  },
  mainNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mobileTopNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topNavUserContent: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
  },
  topNavUserAvatar: {
    marginRight: 20,
  },
  navBtn: {
    color: colors.fadedText,
    transition: 'color 100ms ease-in-out',
    '&.active': {
      color: colors.primaryBlue,
    },
    '&:hover': {
      color: colors.primaryBlue,
      backgroundColor: 'inherit',
    },
    '&:active': {
      color: colors.darkBlue,
    },
  },
});

export default useTopNavStyles;
