import React from 'react';
import { DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import { CreateTransactionFormSetup } from '../../../utils/validation';

import TransactionCreationForm from '../../Forms/TransactionCreationForm';
import useTransactionCreationDialogStyles from '../styles';

interface Props {
  onClose: () => void;
}

const TransactionCreationDialogContent: React.FC<Props> = ({ onClose }) => {
  const classNames = useTransactionCreationDialogStyles({});

  const { initialValues, validate } = CreateTransactionFormSetup;

  const { isSubmitting, handleChange, handleSubmit, values, errors } = useForm(
    v => console.log(v),
    validate,
    { ...initialValues, account: 10 },
  );

  return (
    <React.Fragment>
      <DialogTitle id="new-transaction" className={classNames.title}>
        New transaction
      </DialogTitle>
      <DialogContent className={classNames.content}>
        <TransactionCreationForm values={values} errors={errors} handleChange={handleChange} />
      </DialogContent>
      <DialogActions className={classNames.actionsSection}>
        <Button onClick={onClose} color="secondary" disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          onClick={() => handleSubmit()}
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          Save
        </Button>
      </DialogActions>
    </React.Fragment>
  );
};

export default TransactionCreationDialogContent;
