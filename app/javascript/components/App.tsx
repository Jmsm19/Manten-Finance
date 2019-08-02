import React from 'react';

import Hello from './Hello';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Hello name="Jorge" />
    </React.Fragment>
  );
};

export default App;

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/packs/service-worker.js')
      .then(registration => console.log('SW Registered: ', registration))
      .catch(registrationError => console.log('SW Registration failed: ', registrationError));
  });
}
