import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import { RegisterFormSetup } from '../../../utils/validation';

import RegisterForm from '../../../components/Forms/RegisterForm';
import { useAuthentication } from '../../../context/authenticationContext';

const RegisterPage: React.FC = () => {
  const { isRegistering, register } = useAuthentication();
  const { initialValues, validate } = RegisterFormSetup;
  const { values, errors, handleChange, handleSubmit } = useForm(register, validate, initialValues);

  return (
    <React.Fragment>
      <RegisterForm
        values={values}
        errors={errors}
        isRegistering={isRegistering}
        handleChange={handleChange}
        submit={handleSubmit}
      />

      <Link
        component={RouterLink}
        to="/"
        color="primary"
        underline="none"
        style={{ marginTop: 16 }}
      >
        Back to Login
      </Link>
    </React.Fragment>
  );
};

export default RegisterPage;
