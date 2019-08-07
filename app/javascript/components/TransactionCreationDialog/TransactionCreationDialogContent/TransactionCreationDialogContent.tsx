import React from 'react';
import { DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import { CreateTransactionFormSetup } from '../../../utils/validation';

import TransactionCreationForm from '../../Forms/TransactionCreationForm';

interface Props {
  onClose: () => void;
}

const TransactionCreationDialogContent: React.FC<Props> = ({ onClose }) => {
  const { initialValues, validate } = CreateTransactionFormSetup;

  const { isSubmitting, handleChange, handleSubmit, values, errors } = useForm(
    v => console.log(v),
    validate,
    { ...initialValues, account: 10 },
  );

  return (
    <React.Fragment>
      <DialogTitle id="new-transaction" style={{ paddingBottom: 0 }}>
        New transaction
      </DialogTitle>
      <DialogContent style={{ paddingTop: 0, paddingBottom: 24 }}>
        <TransactionCreationForm values={values} errors={errors} handleChange={handleChange} />
      </DialogContent>
      <DialogActions style={{ paddingRight: 24, paddingBottom: 16 }}>
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
