import React from 'react';
import { Typography } from '@material-ui/core';

import Card from '../../UI/Card';

import useFinancialCardStyles from './styles';

interface Props {
  title: string;
  type: 'income' | 'expense';
  amount: number;
}

const FinancialSummaryCard: React.FC<Props> = ({ title, type, amount }) => {
  const classNames = useFinancialCardStyles({ type });

  return (
    <Card>
      <Typography variant="body2" className={classNames.cardTitle}>
        {title}
      </Typography>
      <Typography variant="h6" className={classNames.cardAmount}>
        $ {amount}
      </Typography>
    </Card>
  );
};

export default FinancialSummaryCard;
