import React from 'react';
import { Hidden } from '@material-ui/core';

import MobileSidebar from '../components/MobileSidebar';

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  toggleDrawer: () => void;
}

const LayoutContext = React.createContext<undefined | ContextValue>(undefined);

export const LayoutProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

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
