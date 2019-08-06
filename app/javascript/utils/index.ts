/* eslint-disable import/prefer-default-export */
import { Location } from 'history';

export const isRouteActive = (location: Location, routePath: string) =>
  location.pathname === routePath;
