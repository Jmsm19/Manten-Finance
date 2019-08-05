import React from 'react';
import { Typography } from '@material-ui/core';

import Card from '../../UI/Card';
import TransactionList from '../../TransactionList';

import useTransactionCardStyles from './styles';

interface Props {
  transactions: any[];
}

const TransactionListCard: React.FC<Props> = ({ transactions }) => {
  const className = useTransactionCardStyles({});

  return (
    <Card fullHeight noPadding className={className.card}>
      <Typography component="h3" variant="body1" color="inherit" className={className.cardTitle}>
        Transaction history
      </Typography>

      <TransactionList transactions={transactions} />
    </Card>
  );
};

TransactionListCard.defaultProps = {
  transactions: [],
};

export default TransactionListCard;
