import React from 'react';

import Hello from './Hello';
import { register } from '../utils/serviceWorker';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Hello name="Jorge" />
    </React.Fragment>
  );
};

export default App;

// Register service worker
register();
