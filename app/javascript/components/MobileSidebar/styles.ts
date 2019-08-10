import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import colors from '../../themes/colors';

const useMobileSidebarStyles = makeStyles((theme: Theme) => ({
  navLink: {
    padding: 16,
    '&.active': {
      backgroundColor: colors.fadedBlue,
    },
  },
  navLinkText: {
    width: '100%',
  },
  logoutIcon: {
    color: colors.fadedText,
    marginRight: theme.spacing(1),
  },
}));

export const drawerStyles: React.CSSProperties = {
  height: 'max-content',
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  backgroundColor: colors.fadedWhite,
};

export default useMobileSidebarStyles;
