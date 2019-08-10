import React from 'react';
import { Grid, LinearProgress, Typography } from '@material-ui/core';

import AppTitle from '../../components/AppTitle';

import useLoadingPageStyles from './styles';

interface Props {
  text?: string;
}

const LoadingPage: React.FC<Props> = ({ text }) => {
  const classNames = useLoadingPageStyles({});

  return (
    <Grid
      item
      container
      alignContent="center"
      justify="center"
      className={classNames.pageRootContainer}
    >
      <Grid item container direction="column">
        <Grid item container justify="center" className={classNames.appTitleContainer}>
          <AppTitle variant="h4" iconSize="large" className={classNames.appTitle} />
        </Grid>
        <Grid item container justify="center">
          <LinearProgress className={classNames.linearProgress} />
        </Grid>
        {text && (
          <Grid item container justify="center">
            <Typography
              variant="subtitle1"
              component="h2"
              color="textSecondary"
              className={classNames.subtitle}
            >
              {text}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default LoadingPage;
