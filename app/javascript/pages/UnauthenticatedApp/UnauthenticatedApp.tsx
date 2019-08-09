import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router';

import AppTitle from '../../components/AppTitle';

import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

import useUnauthenticatedAppStyles from './styles';

const UnauthenticatedApp: React.FC = () => {
  const classNames = useUnauthenticatedAppStyles({});

  return (
    <React.Fragment>
      <Grid
        item
        container
        justify="center"
        direction="column"
        alignContent="center"
        className={classNames.page}
      >
        <Grid item container className={classNames.pageGridRow}>
          {/* App Title header */}
          <Grid
            item
            container
            justify="flex-start"
            alignItems="center"
            className={classNames.appTitleGridSection}
          >
            <AppTitle />
          </Grid>

          {/* Form */}
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </Grid>
      </Grid>
      <Grid item>
        <footer className={classNames.footer}>
          &copy; {new Date().getFullYear()} -{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://manten-dev.me"
            className={classNames.footerLink}
          >
            Manten Development
          </a>
        </footer>
      </Grid>
    </React.Fragment>
  );
};

export default UnauthenticatedApp;