import React from 'react';
import uuid from 'uuid/v4';
import { Typography, List, Divider } from '@material-ui/core';

import TransactionListItem from './TransactionListItem';

import useTransactionListStyles from './styles';

interface Props {
  transactions: any[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  const classNames = useTransactionListStyles({});

  return (
    <List className={classNames.list}>
      <Typography className={classNames.listSubtitle}>{new Date().toDateString()}</Typography>

      {transactions.length &&
        transactions.map((_, i) => (
          <React.Fragment key={uuid()}>
            {i > 0 && (
              <Divider variant="inset" component="li" className={classNames.listItemDivider} />
            )}

            <TransactionListItem transaction={i} />
          </React.Fragment>
        ))}
    </List>
  );
};

TransactionList.defaultProps = {
  transactions: [],
};

export default TransactionList;
