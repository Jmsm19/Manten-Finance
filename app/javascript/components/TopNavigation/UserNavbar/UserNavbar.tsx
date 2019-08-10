import React from 'react';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

import { useAuthentication } from '../../../context/authenticationContext';

import useTopNavStyles from '../styles';

interface Props {
  user: {
    name: string;
  };
}

const UserNavbar: React.FC<Props> = ({ user }) => {
  const classNames = useTopNavStyles({});
  const { logout } = useAuthentication();

  return (
    <AppBar position="static" color="inherit" className={classNames.topNav}>
      <Toolbar>
        {/* <Avatar alt={user.name} className={classNames.topNavUserAvatar} /> */}

        <span className={classNames.topNavUserContent}>
          <Typography variant="subtitle1" color="inherit">
            {user.name}
          </Typography>

          <IconButton color="primary" className={classNames.navBtn} onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
