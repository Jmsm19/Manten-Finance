import React from 'react';
import { Grid, TextField, InputAdornment, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import KeyIcon from '@material-ui/icons/VpnKey';

import useRegisterFormStyles from './styles';

interface Props {
  values: { [field: string]: any };
  errors: { [field: string]: any };
  isRegistering: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  submit: (event?: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<Props> = ({ values, isRegistering, errors, handleChange, submit }) => {
  const classNames = useRegisterFormStyles({});

  return (
    <form onSubmit={submit} className={classNames.fromGridContainer}>
      <Grid container spacing={1} direction="column" className={classNames.fromGridContainer}>
        <Grid item>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            variant="outlined"
            autoComplete="name"
            value={values.name}
            error={!!errors.name}
            helperText={errors.name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon className={classNames.formFieldIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email}
            value={values.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon className={classNames.formFieldIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            error={!!errors.password}
            helperText={errors.password}
            value={values.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon className={classNames.formFieldIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Confirm password"
            type="password"
            name="password_confirmation"
            margin="normal"
            variant="outlined"
            autoComplete="off"
            error={!!errors.password_confirmation}
            helperText={errors.password_confirmation}
            value={values.password_confirmation}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon className={classNames.formFieldIcon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            disabled={isRegistering}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
