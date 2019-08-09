import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Divider, Link } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import { LoginFormSetup } from '../../../utils/validation';

import LoginForm from '../../../components/Forms/LoginForm';

import useLoginPageStyles from './styles';

const LoginPage: React.FC = () => {
  const classNames = useLoginPageStyles({});

  const { initialValues, validate } = LoginFormSetup;
  const { values, errors, handleChange } = useForm(undefined, validate, initialValues);

  return (
    <React.Fragment>
      {/* Form */}
      <LoginForm values={values} errors={errors} handleChange={handleChange} />

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
