import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { useAuthentication } from '../../context/authenticationContext';

import TopNavigation from '../../components/TopNavigation';
import BalancePage from './BalancePage';

import useAppStyles from '../../components/App/styles';

const AuthenticatedApp: React.FC = () => {
  const classNames = useAppStyles({});
  const [goHome, setGoHome] = React.useState(false);
  const { isAuth, authUser } = useAuthentication();

  React.useEffect(() => {
    if (!isAuth && !authUser) setGoHome(true);
  }, [authUser, isAuth]);

  if (goHome) {
    return <Redirect to="/" />;
  }

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
