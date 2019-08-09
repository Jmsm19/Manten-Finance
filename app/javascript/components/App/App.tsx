import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, Box } from '@material-ui/core';

import { LayoutProvider } from '../../context/layoutContext';

import LoginPage from '../../pages/LoginPage';
import AuthenticatedApp from '../../pages/AuthenticatedApp';

import { register } from '../../utils/serviceWorker';

import theme from '../../themes/materialTheme';
import useAppStyles from './styles';

const App: React.FC = () => {
  const classNames = useAppStyles({});

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <LayoutProvider>
          <Box className={classNames.rootContainer}>
            <Container>
              <Switch>
                <Route path="/dashboard" component={AuthenticatedApp} />
                <Route path="/" component={LoginPage} />
              </Switch>
            </Container>
          </Box>
        </LayoutProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// Register service worker
register();
