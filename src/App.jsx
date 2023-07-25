import React from 'react';
import './App.css';

// import { Route, Routes } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme/Theme';
import Layout from './Layout/Layout';
import AppRoutes from './routes/routes';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
