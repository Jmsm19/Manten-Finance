import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/Person';
import KeyIcon from '@material-ui/icons/VpnKey';

import useLoginFormStyles from './styles';

interface Props {
  values: { [field: string]: any };
  errors: { [field: string]: any };
  isLoggingIn: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  submit: (event?: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<Props> = ({ isLoggingIn, values, handleChange, submit }) => {
  const classNames = useLoginFormStyles({});

  return (
    <form onSubmit={submit}>
      <Grid container spacing={1} direction="column" className={classNames.fromGridContainer}>
        <Grid item>
          <TextField
            autoFocus
            fullWidth
            label="Email"
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle className={classNames.formFieldIcon} />
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
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoggingIn}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
