import React from 'react';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import MoneyIcon from '@material-ui/icons/MonetizationOn';

import useAppTitleStyles from './styles';

interface Props extends TypographyProps {
  iconSize?: 'inherit' | 'default' | 'small' | 'large';
}

const AppTitle: React.FC<Props> = ({ iconSize, ...props }) => {
  const classNames = useAppTitleStyles({});

  return (
    <span className={classNames.titleSection}>
      <MoneyIcon color="primary" fontSize={iconSize || 'default'} className={classNames.icon} />
      <Typography
        variant="h6"
        className={classNames.title}
        {...props}
        component="h1"
        color="primary"
      >
        Manten Finance
      </Typography>
    </span>
  );
};

export default AppTitle;
