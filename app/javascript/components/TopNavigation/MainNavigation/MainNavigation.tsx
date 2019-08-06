import React from 'react';
import classnames from 'classnames';
import { MenuItem } from '@material-ui/core';
import { withRouter, RouteChildrenProps } from 'react-router';

import routes from '../../../config/routes';

import { isRouteActive } from '../../../utils';
import useTopNavStyles from '../styles';

const MainNavigation: React.FC<RouteChildrenProps> = ({ location }) => {
  const classNames = useTopNavStyles({});
  const routesKeys = Object.keys(routes);

  return (
    <nav className={classNames.mainNav}>
      {routesKeys.map(key => (
        <MenuItem
          key={key}
          className={classnames([classNames.navBtn], {
            active: isRouteActive(location, routes[key].path),
          })}
        >
          {routes[key].linkText}
        </MenuItem>
      ))}
    </nav>
  );
};

export default withRouter(MainNavigation);
