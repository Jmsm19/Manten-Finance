import React from 'react';
import { Typography } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/MonetizationOn';

import useAppTitleStyles from './styles';

const AppTitle: React.FC = () => {
  const classNames = useAppTitleStyles({});

  return (
    <span className={classNames.titleSection}>
      <MoneyIcon color="primary" className={classNames.icon} />
      <Typography className={classNames.title} variant="h6" component="h1" color="primary">
        Manten Finance
      </Typography>
    </span>
  );
};

export default AppTitle;
