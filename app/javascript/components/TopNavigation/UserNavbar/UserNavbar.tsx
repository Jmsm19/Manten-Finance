import React from 'react';
import SettingsIcon from '@material-ui/icons/MoreVert';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@material-ui/core';

import useTopNavStyles from '../styles';

interface Props {
  user: {
    name: string;
  };
}

const UserNavbar: React.FC<Props> = ({ user }) => {
  const classNames = useTopNavStyles({});

  return (
    <AppBar position="static" color="inherit" className={classNames.topNav}>
      <Toolbar>
        <Avatar alt={user.name} className={classNames.topNavUserAvatar} />

        <span className={classNames.topNavUserContent}>
          <Typography variant="subtitle1" color="inherit">
            {user.name}
          </Typography>

          <IconButton color="primary" className={classNames.navBtn}>
            <SettingsIcon />
          </IconButton>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
