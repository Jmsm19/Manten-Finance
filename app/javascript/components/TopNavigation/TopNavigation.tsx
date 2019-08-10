import React from 'react';
import { AppBar, Toolbar, Grid, Hidden } from '@material-ui/core';

import { useAuthentication } from '../../context/authenticationContext';

import AppTitle from '../AppTitle';
import MainNavigation from './MainNavigation';
import MobileTopNavigation from './MobileTopNavigation';
import UserNavbar from './UserNavbar';

import useTopNavStyles from './styles';

const TopNavigation: React.FC = () => {
  const { isAuth, authUser } = useAuthentication();

  const classNames = useTopNavStyles({});

  return (
    <Grid container spacing={3} direction="row" alignItems="center">
      <Grid item xs>
        <AppBar position="static" color="inherit" className={classNames.topNav}>
          <Toolbar>
            <AppTitle />

            {/* Navigation, Tablet or bigger */}
            <Hidden smDown>
              <MainNavigation />
            </Hidden>

            {/* Navigation, Phones */}
            <Hidden mdUp>
              <MobileTopNavigation />
            </Hidden>
          </Toolbar>
        </AppBar>
      </Grid>

      {isAuth && authUser && (
        <Hidden smDown>
          <Grid item md={3}>
            <UserNavbar user={authUser} />
          </Grid>
        </Hidden>
      )}
    </Grid>
  );
};

export default TopNavigation;
