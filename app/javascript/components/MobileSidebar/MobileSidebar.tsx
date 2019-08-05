import React from 'react';
import { Drawer, ListItem, ListItemText } from '@material-ui/core';

import useMobileSidebarStyles, { drawerStyles } from './styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const classNames = useMobileSidebarStyles({});

  return (
    <Drawer
      variant="temporary"
      anchor="top"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: drawerStyles,
      }}
    >
      <ListItem button className={`${classNames.navLink} ${classNames.activeNavLink}`}>
        <ListItemText
          className={classNames.navLinkText}
          primary="Transactions"
          primaryTypographyProps={{
            color: 'primary',
          }}
        />
      </ListItem>
      <ListItem button className={classNames.navLink}>
        <ListItemText
          className={classNames.navLinkText}
          primary="People"
          primaryTypographyProps={{
            color: 'textPrimary',
          }}
        />
      </ListItem>
      <ListItem button className={classNames.navLink}>
        <ListItemText
          className={classNames.navLinkText}
          primary="Setting"
          primaryTypographyProps={{
            color: 'textPrimary',
          }}
        />
      </ListItem>
    </Drawer>
  );
};

export default MobileSidebar;
