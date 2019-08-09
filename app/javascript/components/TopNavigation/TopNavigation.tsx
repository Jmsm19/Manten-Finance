import React from 'react';
import { AppBar, Toolbar, Grid, Hidden } from '@material-ui/core';

import MainNavigation from './MainNavigation';
import MobileTopNavigation from './MobileTopNavigation';
import UserNavbar from './UserNavbar';

import useTopNavStyles from './styles';
import AppTitle from '../AppTitle';

const TopNavigation: React.FC = () => {
  const [isAuth] = React.useState(true);

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

      {isAuth && (
        <Hidden smDown>
          <Grid item md={3}>
            <UserNavbar user={{ name: 'Manten' }} />
          </Grid>
        </Hidden>
      )}
    </Grid>
  );
};

export default TopNavigation;
