import React from 'react';
import { Hidden } from '@material-ui/core';

import { useAuthentication } from './authenticationContext';

import MobileSidebar from '../components/MobileSidebar';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  toggleDrawer: () => void;
}

const LayoutContext = React.createContext<undefined | ContextValue>(undefined);

export const LayoutProvider: React.FC<Props> = ({ children }) => {
  const { isAuth, authUser } = useAuthentication();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  React.useEffect(() => {
    if (!isAuth && !authUser && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [authUser, isAuth, isDrawerOpen]);

  return (
    <LayoutContext.Provider value={{ toggleDrawer }}>
      {children}

      <Hidden mdUp>
        <MobileSidebar isOpen={isDrawerOpen} onClose={closeDrawer} />
      </Hidden>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = React.useContext(LayoutContext);
  return context;
};
