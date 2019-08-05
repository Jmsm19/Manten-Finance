import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useLayout } from '../../../context/layoutContext';

import useTopNavStyles from '../styles';

const MobileTopNavigation: React.FC = () => {
  const { toggleDrawer } = useLayout();
  const classNames = useTopNavStyles({});

  return (
    <nav className={classNames.mobileTopNav}>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    </nav>
  );
};

export default MobileTopNavigation;
