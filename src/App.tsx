import React from 'react';

import {ServiceProvider, ThemeProvider} from 'context';
import {Navigation} from 'navigation';

export const App = () => {
  return (
    <ThemeProvider>
      <ServiceProvider>
        <Navigation />
      </ServiceProvider>
    </ThemeProvider>
  );
};
