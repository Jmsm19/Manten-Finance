import React from 'react';
import ImageIcon from '@material-ui/icons/Image';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

import useTransactionListStyles from '../styles';

interface Props {
  transaction: any;
}

const TransactionListItem: React.FC<Props> = ({ transaction }) => {
  const classNames = useTransactionListStyles({});

  return (
    <ListItem className={classNames.listItem}>
      <ListItemAvatar>
        <Avatar src="https://source.unsplash.com/random/200x200" alt="Category name">
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <div className={classNames.listItemContent}>
        <ListItemText primary="Category" secondary={`Concept ${transaction + 1}`} />
        <p className={classNames.listItemAmount}>+$100</p>
      </div>
    </ListItem>
  );
};

export default TransactionListItem;
