/* eslint-disable import/prefer-default-export */
import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color designs

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        secondary: {
          100: '#ccf4ef',
          200: '#99e8e0',
          300: '#66ddd0',
          400: '#33d1c1',
          500: '#00c6b1',
          600: '#009e8e',
          700: '#00776a',
          800: '#004f47',
          900: '#002823',
        },
        tertiary: {
          100: '#fffdf7',
          200: '#fffcef',
          300: '#fffae6',
          400: '#fff9de',
          500: '#fff7d6',
          600: '#ccc6ab',
          700: '#999480',
          800: '#666356',
          900: '#33312b',
        },
        primary: {
          100: '#ccd9df',
          200: '#99b3bf',
          300: '#668e9f',
          400: '#33687f',
          500: '#00425f',
          600: '#00354c',
          700: '#002839',
          800: '#001a26',
          900: '#000d13',
        },
      }
    : {
        primary: {
          100: '#f7fbf9',
          200: '#f0f8f2',
          300: '#e8f4ec',
          400: '#e1f1e5',
          500: '#d9eddf',
          600: '#aebeb2',
          700: '#828e86',
          800: '#575f59',
          900: '#2b2f2d',
        },
        secondary: {
          100: '#e8f1db',
          200: '#d1e3b6',
          300: '#bbd592',
          400: '#a4c76d',
          500: '#8db949',
          600: '#71943a',
          700: '#556f2c',
          800: '#384a1d',
          900: '#1c250f',
        },
        tertiary: {
          100: '#d7e2df',
          200: '#afc4bf',
          300: '#88a79f',
          400: '#60897f',
          500: '#386c5f',
          600: '#2d564c',
          700: '#224139',
          800: '#162b26',
          900: '#0b1613',
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
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
            },
            background: {
              default: '#00425F',
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
              dark: colors.secondary[700],
              main: colors.secondary[500],
              light: colors.secondary[100],
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
