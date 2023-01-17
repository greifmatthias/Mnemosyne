import React from 'react';

import {ThemeProvider} from 'context';
import {Navigation} from 'navigation';

export const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};
