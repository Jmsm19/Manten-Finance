import React from 'react';
import { makeStyles } from '@material-ui/core';

import colors from '../../../themes/colors';

const useGraphCardStyles = makeStyles({
  cardTitle: {
    padding: '16px 16px 0 16px',
    color: colors.fadedText,
    marginBottom: 34,
  },
  graphWrapper: {
    paddingBottom: 34,
  },
});

export const cardContentStyle: React.CSSProperties = {
  padding: 0,
};

export default useGraphCardStyles;
