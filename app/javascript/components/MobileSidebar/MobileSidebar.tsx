import React from 'react';
import classnames from 'classnames';
import { withRouter, RouteChildrenProps } from 'react-router';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { Drawer, ListItem, ListItemText } from '@material-ui/core';

import { useAuthentication } from '../../context/authenticationContext';

import useTopNavStyles from '../TopNavigation/styles';

import routes from '../../config/routes';
import { isRouteActive } from '../../utils';
import useMobileSidebarStyles, { drawerStyles } from './styles';

interface Props extends RouteChildrenProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<Props> = ({ location, isOpen, onClose }) => {
  const { logout } = useAuthentication();
  const classNames = useMobileSidebarStyles({});
  const topNavClassNames = useTopNavStyles({});
  const routesKeys = Object.keys(routes);

  return (
    <Drawer
      anchor="top"
      variant="temporary"
      open={isOpen}
      onClose={onClose}
      PaperProps={{ style: drawerStyles }}
    >
      {routesKeys.map(key => (
        <ListItem
          button
          key={key}
          className={classnames([classNames.navLink], {
            active: isRouteActive(location, routes[key].path),
          })}
        >
          <ListItemText
            className={classnames([classNames.navLinkText, topNavClassNames.navBtn], {
              active: isRouteActive(location, routes[key].path),
            })}
            primary={routes[key].linkText}
            primaryTypographyProps={{
              color: isRouteActive(location, routes[key].path) ? 'primary' : 'textPrimary',
            }}
          />
        </ListItem>
      ))}
      <ListItem button className={classnames([classNames.navLink])} onClick={logout}>
        <LogoutIcon className={classNames.logoutIcon} />
        <ListItemText
          className={classnames([classNames.navLinkText, topNavClassNames.navBtn])}
          primary="Logout"
        />
      </ListItem>
    </Drawer>
  );
};

export default withRouter(MobileSidebar);
