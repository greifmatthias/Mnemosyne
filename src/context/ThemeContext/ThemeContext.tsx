import {ThemeProvider as EmotionThemeProvider, useTheme} from '@emotion/react';
import {get} from 'lodash';
import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';

import {basetheme, Color} from 'theme';

import {ThemeContextInterface} from './ThemeContext.types';

export const ThemeContext = createContext<ThemeContextInterface>({
  isDarkMode: false,
  ...basetheme,
});

export const ThemeProvider = ({children}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <EmotionThemeProvider theme={{isDarkMode, ...basetheme}}>
      {children}
    </EmotionThemeProvider>
  );
};

export const useColor = (color: Color): string | undefined => {
  const {colors} = useTheme();

  return get(colors, color);
};
