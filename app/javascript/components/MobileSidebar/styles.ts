import React from 'react';
import { makeStyles } from '@material-ui/styles';

import colors from '../../themes/colors';

const useMobileSidebarStyles = makeStyles({
  navLink: {
    padding: 16,
    '&.active': {
      backgroundColor: colors.fadedBlue,
    },
  },
  navLinkText: {
    width: '100%',
  },
});

export const drawerStyles: React.CSSProperties = {
  height: 'max-content',
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  backgroundColor: colors.fadedWhite,
};

export default useMobileSidebarStyles;
