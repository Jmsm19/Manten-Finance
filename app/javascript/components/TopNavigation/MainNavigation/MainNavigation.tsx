import React from 'react';
import { MenuItem } from '@material-ui/core';
import useTopNavStyles from '../styles';

const MainNavigation: React.FC = () => {
  const classNames = useTopNavStyles({});

  return (
    <nav className={classNames.mainNav}>
      <MenuItem className={classNames.activeNavLinks}>Transactions</MenuItem>
      <MenuItem className={classNames.navLinks}>People</MenuItem>
      <MenuItem className={classNames.navLinks}>Settings</MenuItem>
    </nav>
  );
};

export default MainNavigation;
