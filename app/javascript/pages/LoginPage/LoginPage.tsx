import React from 'react';
import { Grid, Divider, Button } from '@material-ui/core';

import useForm from '../../hooks/useForm';
import { LoginFormSetup } from '../../utils/validation';

import AppTitle from '../../components/AppTitle';
import LoginForm from '../../components/Forms/LoginForm';

import useLoginPageStyles from './styles';

const LoginPage: React.FC = () => {
  const classNames = useLoginPageStyles({});

  const { initialValues, validate } = LoginFormSetup;
  const { values, errors, handleChange } = useForm(undefined, validate, initialValues);

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
          <LoginForm values={values} errors={errors} handleChange={handleChange} />

          <Grid item direction="row" justify="center" className={classNames.dividerSection}>
            <Divider className={classNames.inlineDivider} />
            <span className={classNames.dividerText}>Or</span>
            <Divider className={classNames.inlineDivider} />
          </Grid>

          <Grid item direction="row" className={classNames.pageGridRow}>
            <Button color="primary" fullWidth>
              Register
            </Button>
          </Grid>
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

export default LoginPage;
