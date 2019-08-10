import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Divider, Link } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import { LoginFormSetup } from '../../../utils/validation';

import LoginForm from '../../../components/Forms/LoginForm';

import useLoginPageStyles from './styles';
import { useAuthentication } from '../../../context/authenticationContext';

const LoginPage: React.FC = () => {
  const classNames = useLoginPageStyles({});
  const { login, isLoggingIn } = useAuthentication();

  const { initialValues, validate } = LoginFormSetup;
  const { values, errors, handleChange, handleSubmit } = useForm(login, validate, initialValues);

  return (
    <React.Fragment>
      {/* Form */}
      <LoginForm
        values={values}
        errors={errors}
        isLoggingIn={isLoggingIn}
        handleChange={handleChange}
        submit={handleSubmit}
      />

      <Grid item className={classNames.dividerSection}>
        <Divider className={classNames.inlineDivider} />
        <span className={classNames.dividerText}>Or</span>
        <Divider className={classNames.inlineDivider} />
      </Grid>

      <Grid item container justify="center">
        <Link
          to="/register"
          color="primary"
          underline="none"
          component={RouterLink}
          style={{ textTransform: 'uppercase' }}
        >
          Register
        </Link>
      </Grid>
    </React.Fragment>
  );
};

export default LoginPage;
