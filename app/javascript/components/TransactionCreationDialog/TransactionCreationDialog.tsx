import React from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
import { Dialog, Zoom, useMediaQuery, useTheme } from '@material-ui/core';

import TransactionCreationDialogContent from './TransactionCreationDialogContent';

interface Props extends DialogProps {
  onClose: () => void;
}

const TransactionCreationDialog: React.FC<Props> = ({ onClose, ...props }) => {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      keepMounted
      onClose={onClose}
      fullWidth={fullWidth}
      TransitionComponent={Zoom}
      aria-labelledby="alert-dialog-zoom-title"
      aria-describedby="alert-dialog-zoom-description"
      {...props}
    >
      <TransactionCreationDialogContent onClose={onClose} />
    </Dialog>
  );
};

export default TransactionCreationDialog;
