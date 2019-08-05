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
  topNavAppTitleSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topNavAppIcon: {
    marginRight: 10,
  },
  topNavAppTitle: {
    width: 220,
  },
  mobileTopNav: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  activeNavLinks: {
    color: colors.primaryBlue,
  },
  navLinks: {
    color: colors.fadedText,
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
});

export default useTopNavStyles;
