/* eslint-disable import/prefer-default-export */
import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color designs

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#cdcedc',
          200: '#9a9cb9',
          300: '#686b95',
          400: '#353972',
          500: '#03084f',
          600: '#02063f',
          700: '#02052f',
          800: '#010320',
          900: '#010210',
        },
        secondary: {
          100: '#cce9ff',
          200: '#99d4ff',
          300: '#66beff',
          400: '#33a9ff',
          500: '#0093ff',
          600: '#0076cc',
          700: '#005899',
          800: '#003b66',
          900: '#001d33',
        },
      }
    : {
        grey: {
          900: '#141414',
          800: '#292929',
          700: '#3d3d3d',
          600: '#525252',
          500: '#666666',
          400: '#858585',
          300: '#a3a3a3',
          200: '#c2c2c2',
          100: '#e0e0e0',
        },
        primary: {
          900: '#010210',
          800: '#010320',
          700: '#02052f',
          600: '#02063f',
          500: '#03084f',
          400: '#353972',
          300: '#686b95',
          200: '#9a9cb9',
          100: '#cdcedc',
        },
        secondary: {
          900: '#001d33',
          800: '#003b66',
          700: '#005899',
          600: '#0076cc',
          500: '#0093ff',
          400: '#33a9ff',
          300: '#66beff',
          200: '#99d4ff',
          100: '#cce9ff',
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#121212',
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
      h7: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 12,
      },
    },
  };
};

// context for colormode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
