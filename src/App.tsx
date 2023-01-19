import React from 'react';

import {AppProvider, ThemeProvider} from 'context';
import {Navigation} from 'navigation';

export const App = () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </AppProvider>
  );
};
