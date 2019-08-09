import { makeStyles } from '@material-ui/core';

const useTransactionCreationDialogStyles = makeStyles({
  title: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
    paddingBottom: 24,
  },
  actionsSection: {
    paddingRight: 24,
    paddingBottom: 16,
  },
  formFieldIconContainer: {
    textAlign: 'center',
  },
  formFieldIcon: {
    marginTop: 16,
  },
});

export default useTransactionCreationDialogStyles;
