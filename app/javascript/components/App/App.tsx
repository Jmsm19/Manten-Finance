import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, Box } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

import { LayoutProvider } from '../../context/layoutContext';
import { AuthenticationProvider } from '../../context/authenticationContext';

import { register } from '../../utils/serviceWorker';

import theme from '../../themes/materialTheme';
import useAppStyles from './styles';

const AuthenticatedApp = React.lazy(() => import('../../pages/AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('../../pages/UnauthenticatedApp'));

const App: React.FC = () => {
  const classNames = useAppStyles({});

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <AuthenticationProvider>
          <SnackbarProvider maxSnack={1}>
            <LayoutProvider>
              <Box className={classNames.rootContainer}>
                <Container>
                  <Switch>
                    <Route
                      exact
                      path="/dashboard"
                      component={rProps => (
                        <React.Suspense fallback="Loading Dashboard...">
                          <AuthenticatedApp {...rProps} />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      component={rProps => (
                        <React.Suspense fallback="Loading...">
                          <UnauthenticatedApp {...rProps} />
                        </React.Suspense>
                      )}
                    />
                  </Switch>
                </Container>
              </Box>
            </LayoutProvider>
          </SnackbarProvider>
        </AuthenticationProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// Register service worker
register();
