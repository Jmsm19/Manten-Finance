import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import TopNavigation from '../../components/TopNavigation';
import BalancePage from './BalancePage';

import useAppStyles from '../../components/App/styles';

const AuthenticatedApp: React.FC = () => {
  const classNames = useAppStyles({});

  return (
    <React.Fragment>
      <TopNavigation />

      <Grid className={classNames.mainGrid} item container spacing={3}>
        <BrowserRouter>
          <Switch>
            <Route component={BalancePage} />
          </Switch>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
};

export default AuthenticatedApp;
