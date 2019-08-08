import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, Container, Box, Grid } from '@material-ui/core';

import { LayoutProvider } from '../../context/layoutContext';

import TopNavigation from '../TopNavigation';
import BalancePage from '../../pages/BalancePage';

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
              <TopNavigation />

              <Grid className={classNames.mainGrid} item container spacing={3}>
                <Switch>
                  <Route component={BalancePage} />
                </Switch>
              </Grid>
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