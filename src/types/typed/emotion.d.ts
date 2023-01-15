import '@emotion/react';

import {ThemeVariant} from 'theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeVariant {
    isDarkMode: boolean;
  }
}
