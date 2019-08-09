import React from 'react';
import { format } from 'date-fns';
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Icon,
  FormHelperText,
} from '@material-ui/core';

import TransactionAmountInputNumberMask from '../../TransactionAmountInputNumberMask';
import useTransactionCreationDialogStyles from '../../TransactionCreationDialog/styles';

interface Props {
  values: { [field: string]: any };
  errors: { [field: string]: any };
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const TransactionCreationForm: React.FC<Props> = ({ values, errors, handleChange }) => {
  const today = new Date();
  const classNames = useTransactionCreationDialogStyles({});

  return (
    <Grid container spacing={1} direction="column">
      {/* Amount input */}
      <Grid item spacing={0} container alignItems="flex-start">
        <Grid item xs={2} className={classNames.formFieldIconContainer}>
          <Icon style={{ marginTop: 36 }}>monetization_on</Icon>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            autoFocus
            error={!!errors.amount}
            helperText={errors.amount}
            id="transaction-amount"
            label="Amount"
            name="amount"
            margin="normal"
            placeholder="0.00"
            onChange={handleChange}
            value={values.amount}
            InputProps={{
              inputComponent: TransactionAmountInputNumberMask as any,
            }}
          />
        </Grid>
      </Grid>

      {/* Category select */}
      <Grid item spacing={1} container alignItems="flex-start">
        <Grid item xs={2} className={classNames.formFieldIconContainer}>
          <Icon className={classNames.formFieldIcon}>archive</Icon>
        </Grid>
        <Grid item xs={10}>
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel htmlFor="transaction-category">Category</InputLabel>
            <Select
              fullWidth
              value={10}
              error={!!errors.category}
              onChange={handleChange}
              name="age"
              id="transaction-category"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Description input */}
      <Grid item spacing={1} container alignItems="flex-start">
        <Grid item xs={2} className={classNames.formFieldIconContainer}>
          <Icon style={{ marginTop: 26 }}>subject</Icon>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            error={!!errors.description}
            helperText={errors.description}
            id="filled-dense-multiline"
            label="Description"
            name="description"
            margin="dense"
            onChange={handleChange}
            multiline
            rowsMax="4"
          />
        </Grid>
      </Grid>

      {/* Date input */}
      <Grid item spacing={1} container alignItems="flex-start">
        <Grid item xs={2} className={classNames.formFieldIconContainer}>
          <Icon className={classNames.formFieldIcon}>calendar_today</Icon>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            id="date"
            error={!!errors.date}
            helperText={errors.date}
            name="date"
            label="Date"
            type="date"
            onChange={handleChange}
            value={format(today, 'YYYY-MM-DD')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      {/* Account select  */}
      <Grid item spacing={1} container alignItems="flex-start">
        <Grid item xs={2} className={classNames.formFieldIconContainer}>
          <Icon className={classNames.formFieldIcon}>account_balance_wallet</Icon>
        </Grid>
        <Grid item xs={10}>
          <FormControl fullWidth error={!!errors.account}>
            <InputLabel htmlFor="user-account">Account</InputLabel>
            <Select
              fullWidth
              error={!!errors.account}
              value={values.account}
              onChange={handleChange}
              id="user-account"
              name="account"
            >
              <MenuItem value={10}>Bank Ten</MenuItem>
              <MenuItem value={20}>Bank Twenty</MenuItem>
              <MenuItem value={30}>Bank Thirty</MenuItem>
            </Select>
            <FormHelperText>{errors.account}</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TransactionCreationForm;
